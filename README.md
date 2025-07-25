# Simple EKS Demo - Complete Setup Guide

## Prerequisites

- AWS CLI installed and configured
- kubectl installed
- eksctl installed
- Docker installed

## Step 1: Create EKS Cluster

```bash
# Create EKS cluster (takes 15-20 minutes)
eksctl create cluster \
  --name demo-cluster \
  --region us-west-2 \
  --nodegroup-name demo-nodes \
  --node-type t3.medium \
  --nodes 2 \
  --nodes-min 1 \
  --nodes-max 3 \
  --managed

# Update kubeconfig
aws eks update-kubeconfig --region us-west-2 --name demo-cluster
```

## Step 2: Backend Application

Create `backend.js`:

```javascript
const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

let counter = 0;
const podName = process.env.HOSTNAME || "unknown-pod";

app.get("/api/status", (req, res) => {
  counter++;
  res.json({
    message: `Hello from backend pod: ${podName}`,
    requests: counter,
    timestamp: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", pod: podName });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend running on port ${port}, pod: ${podName}`);
});
```

Create `backend/Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
RUN npm init -y && npm install express
COPY backend.js .
EXPOSE 3001
CMD ["node", "backend.js"]
```

## Step 3: Frontend Application

Create `frontend.js`:

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>EKS Demo App</title>
    <style>
        body { font-family: Arial; margin: 40px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; }
        button { padding: 10px 20px; margin: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
        .response { background: #e9ecef; padding: 15px; margin: 10px 0; border-radius: 4px; }
        .pod-info { background: #d4edda; padding: 10px; margin: 5px 0; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 EKS Demo Application</h1>
        <p>This app demonstrates EKS with multiple pods:</p>
        <ul>
            <li>2 Frontend pods (this interface)</li>
            <li>2 Backend pods (API service)</li>
        </ul>
        
        <button onclick="callBackend()">Call Backend API</button>
        <button onclick="loadTest()">Load Test (10 calls)</button>
        
        <div id="results"></div>
    </div>

    <script>
        async function callBackend() {
            try {
                const response = await fetch('/api/status');
                const data = await response.json();
                displayResult(data);
            } catch (error) {
                displayResult({error: error.message});
            }
        }

        async function loadTest() {
            document.getElementById('results').innerHTML = '<p>Running load test...</p>';
            const promises = [];
            for(let i = 0; i < 10; i++) {
                promises.push(fetch('/api/status').then(r => r.json()));
            }
            const results = await Promise.all(promises);
            
            let html = '<h3>Load Test Results:</h3>';
            results.forEach((result, i) => {
                html += \`<div class="pod-info">Call \${i+1}: \${result.message} (Request #\${result.requests})</div>\`;
            });
            document.getElementById('results').innerHTML = html;
        }

        function displayResult(data) {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = \`<div class="response"><pre>\${JSON.stringify(data, null, 2)}</pre></div>\`;
        }
    </script>
</body>
</html>
`;

app.get("/", (req, res) => {
  res.send(html);
});

app.get("/api/status", async (req, res) => {
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch("http://backend-service:3001/api/status");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Backend unavailable", details: error.message });
  }
});

const podName = process.env.HOSTNAME || "unknown-pod";
app.listen(port, "0.0.0.0", () => {
  console.log(`Frontend running on port ${port}, pod: ${podName}`);
});
```

Create `frontend/Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
RUN npm init -y && npm install express node-fetch
COPY frontend.js .
EXPOSE 3000
CMD ["node", "frontend.js"]
```

## Step 4: Build and Push Docker Images

```bash
# Get ECR login
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin <your-account-id>.dkr.ecr.us-west-2.amazonaws.com

# Create ECR repositories
aws ecr create-repository --repository-name demo-backend --region us-west-2
aws ecr create-repository --repository-name demo-frontend --region us-west-2

# Build and push backend
docker build -t demo-backend -f backend/Dockerfile .
docker tag demo-backend:latest <your-account-id>.dkr.ecr.us-west-2.amazonaws.com/demo-backend:latest
docker push <your-account-id>.dkr.ecr.us-west-2.amazonaws.com/demo-backend:latest

# Build and push frontend
docker build -t demo-frontend -f frontend/Dockerfile .
docker tag demo-frontend:latest <your-account-id>.dkr.ecr.us-west-2.amazonaws.com/demo-frontend:latest
docker push <your-account-id>.dkr.ecr.us-west-2.amazonaws.com/demo-frontend:latest
```

## Step 5: Kubernetes Manifests

Create `k8s-manifests.yaml`:

```yaml
# Backend Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
        - name: backend
          image: <your-account-id>.dkr.ecr.us-west-2.amazonaws.com/demo-backend:latest
          ports:
            - containerPort: 3001
          resources:
            requests:
              memory: "64Mi"
              cpu: "100m"
            limits:
              memory: "128Mi"
              cpu: "200m"
---
# Backend Service
apiVersion: v1
kind: Service
metadata:
  name: backend-service
spec:
  selector:
    app: backend
  ports:
    - port: 3001
      targetPort: 3001
  type: ClusterIP
---
# Frontend Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
        - name: frontend
          image: <your-account-id>.dkr.ecr.us-west-2.amazonaws.com/demo-frontend:latest
          ports:
            - containerPort: 3000
          resources:
            requests:
              memory: "64Mi"
              cpu: "100m"
            limits:
              memory: "128Mi"
              cpu: "200m"
---
# Frontend Service (LoadBalancer)
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
spec:
  selector:
    app: frontend
  ports:
    - port: 80
      targetPort: 3000
  type: LoadBalancer
```

## Step 6: Deploy to EKS

```bash
# Deploy applications
kubectl apply -f k8s-manifests.yaml

# Check deployments
kubectl get deployments
kubectl get pods
kubectl get services

# Get the LoadBalancer URL (wait a few minutes for provisioning)
kubectl get service frontend-service
```

## Step 7: Test Your Demo

```bash
# Check pod status
kubectl get pods -o wide

# View logs
kubectl logs -l app=frontend
kubectl logs -l app=backend

# Port forward for local testing (alternative)
kubectl port-forward service/frontend-service 8080:80
```

## Demo Script

1. **Show the web interface** - Access the LoadBalancer URL
2. **Demonstrate load balancing** - Click "Call Backend API" multiple times to see different backend pods responding
3. **Show pod distribution** - Run the load test to see requests distributed across pods
4. **Show scaling** - Scale deployments up/down:
   ```bash
   kubectl scale deployment backend-deployment --replicas=3
   kubectl scale deployment frontend-deployment --replicas=3
   ```
5. **Show pod resilience** - Delete a pod and show auto-recovery:
   ```bash
   kubectl delete pod <pod-name>
   kubectl get pods -w
   ```

## Cleanup

```bash
# Delete applications
kubectl delete -f k8s-manifests.yaml

# Delete cluster
eksctl delete cluster --name demo-cluster --region us-west-2

# Delete ECR repositories
aws ecr delete-repository --repository-name demo-backend --region us-west-2 --force
aws ecr delete-repository --repository-name demo-frontend --region us-west-2 --force
```

## Key EKS Features Demonstrated

- **Container Orchestration**: Multiple pods running different services
- **Service Discovery**: Frontend automatically finds backend via Kubernetes DNS
- **Load Balancing**: Traffic distributed across multiple pod replicas
- **Auto-healing**: Kubernetes restarts failed pods automatically
- **Scaling**: Easy horizontal scaling of applications
- **Resource Management**: CPU and memory limits/requests
- **External Access**: LoadBalancer exposes app to internet

This demo shows EKS managing 4 pods (2 frontend + 2 backend) with automatic load balancing, service discovery, and scaling capabilities!
