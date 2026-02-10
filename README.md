# Simple EKS Demo - Complete Setup Guide 2

## Architecture Diagram
```md
<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="2025-01-01T00:00:00.000Z" agent="draw.io" etag="xxx" version="24.0.0" type="device">
  <diagram name="EKS-Demo-Architecture" id="eks-demo">
    <mxGraphModel dx="1422" dy="794" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1200" pageHeight="800" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        
        <!-- Background -->
        <mxCell id="bg" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#F8F9FA;strokeColor=none;" vertex="1" parent="1">
          <mxGeometry x="0" y="0" width="1200" height="800" as="geometry" />
        </mxCell>
        
        <!-- Title -->
        <mxCell id="title" value="EKS Demo Application" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=24;fontStyle=1;fontColor=#1A202C;" vertex="1" parent="1">
          <mxGeometry x="450" y="40" width="300" height="40" as="geometry" />
        </mxCell>
        
        <!-- Users -->
        <mxCell id="users" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#1976D2;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.users;" vertex="1" parent="1">
          <mxGeometry x="570" y="120" width="60" height="60" as="geometry" />
        </mxCell>
        <mxCell id="users-label" value="Users" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1;fontColor=#1976D2;" vertex="1" parent="1">
          <mxGeometry x="570" y="185" width="60" height="20" as="geometry" />
        </mxCell>
        
        <!-- Load Balancer -->
        <mxCell id="alb" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7B1FA2;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.application_load_balancer;" vertex="1" parent="1">
          <mxGeometry x="570" y="270" width="60" height="60" as="geometry" />
        </mxCell>
        <mxCell id="alb-label" value="Load Balancer" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1;fontColor=#7B1FA2;" vertex="1" parent="1">
          <mxGeometry x="545" y="335" width="110" height="20" as="geometry" />
        </mxCell>
        
        <!-- EKS Cluster Container -->
        <mxCell id="eks-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#F57C00;strokeWidth=3;" vertex="1" parent="1">
          <mxGeometry x="200" y="420" width="800" height="300" as="geometry" />
        </mxCell>
        <mxCell id="eks-icon" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#F57C00;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.eks_cloud;" vertex="1" parent="1">
          <mxGeometry x="220" y="440" width="60" height="36" as="geometry" />
        </mxCell>
        <mxCell id="eks-label" value="Amazon EKS Cluster" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;fontColor=#F57C00;" vertex="1" parent="1">
          <mxGeometry x="290" y="448" width="200" height="20" as="geometry" />
        </mxCell>
        
        <!-- Frontend Pods -->
        <mxCell id="frontend-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8F5E8;strokeColor=#4CAF50;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="280" y="520" width="280" height="80" as="geometry" />
        </mxCell>
        <mxCell id="frontend-label" value="Frontend Pods (2x)" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1;fontColor=#4CAF50;" vertex="1" parent="1">
          <mxGeometry x="360" y="530" width="120" height="20" as="geometry" />
        </mxCell>
        
        <mxCell id="frontend-pod1" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#4CAF50;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=8;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_1;" vertex="1" parent="1">
          <mxGeometry x="340" y="560" width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="frontend-pod1-label" value="React UI" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontColor=#4CAF50;" vertex="1" parent="1">
          <mxGeometry x="320" y="590" width="70" height="10" as="geometry" />
        </mxCell>
        
        <mxCell id="frontend-pod2" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#4CAF50;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=8;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_1;" vertex="1" parent="1">
          <mxGeometry x="450" y="560" width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="frontend-pod2-label" value="React UI" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontColor=#4CAF50;" vertex="1" parent="1">
          <mxGeometry x="430" y="590" width="70" height="10" as="geometry" />
        </mxCell>
        
        <!-- Backend Pods -->
        <mxCell id="backend-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#FF9800;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="640" y="520" width="280" height="80" as="geometry" />
        </mxCell>
        <mxCell id="backend-label" value="Backend Pods (2x)" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1;fontColor=#FF9800;" vertex="1" parent="1">
          <mxGeometry x="720" y="530" width="120" height="20" as="geometry" />
        </mxCell>
        
        <mxCell id="backend-pod1" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#FF9800;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=8;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_1;" vertex="1" parent="1">
          <mxGeometry x="700" y="560" width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="backend-pod1-label" value="Node.js API" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontColor=#FF9800;" vertex="1" parent="1">
          <mxGeometry x="675" y="590" width="80" height="10" as="geometry" />
        </mxCell>
        
        <mxCell id="backend-pod2" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#FF9800;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=8;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_1;" vertex="1" parent="1">
          <mxGeometry x="810" y="560" width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="backend-pod2-label" value="Node.js API" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontColor=#FF9800;" vertex="1" parent="1">
          <mxGeometry x="785" y="590" width="80" height="10" as="geometry" />
        </mxCell>
        
        <!-- Container Registry -->
        <mxCell id="ecr" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#F57C00;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ecr;" vertex="1" parent="1">
          <mxGeometry x="1080" y="520" width="60" height="60" as="geometry" />
        </mxCell>
        <mxCell id="ecr-label" value="Container&#xa;Registry" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=12;fontStyle=1;fontColor=#F57C00;" vertex="1" parent="1">
          <mxGeometry x="1060" y="585" width="100" height="30" as="geometry" />
        </mxCell>
        
        <!-- Traffic Flow Arrows -->
        <!-- Users to ALB -->
        <mxCell id="arrow1" value="" style="endArrow=classic;html=1;rounded=0;strokeWidth=4;strokeColor=#1976D2;" edge="1" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="600" y="210" as="sourcePoint" />
            <mxPoint x="600" y="270" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="arrow1-label" value="HTTP/HTTPS" style="text;html=1;strokeColor=none;fillColor=white;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=12;fontStyle=1;fontColor=#1976D2;" vertex="1" parent="1">
          <mxGeometry x="620" y="230" width="90" height="20" as="geometry" />
        </mxCell>
        
        <!-- ALB to Frontend -->
        <mxCell id="arrow2" value="" style="endArrow=classic;html=1;rounded=0;strokeWidth=4;strokeColor=#4CAF50;" edge="1" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="580" y="360" as="sourcePoint" />
            <mxPoint x="450" y="520" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="arrow2-label" value="Load Balance" style="text;html=1;strokeColor=none;fillColor=white;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=12;fontStyle=1;fontColor=#4CAF50;" vertex="1" parent="1">
          <mxGeometry x="480" y="430" width="90" height="20" as="geometry" />
        </mxCell>
        
        <!-- Frontend to Backend -->
        <mxCell id="arrow3" value="" style="endArrow=classic;html=1;rounded=0;strokeWidth=3;strokeColor=#FF9800;" edge="1" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="560" y="560" as="sourcePoint" />
            <mxPoint x="640" y="560" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="arrow3-label" value="API Calls" style="text;html=1;strokeColor=none;fillColor=white;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=11;fontStyle=1;fontColor=#FF9800;" vertex="1" parent="1">
          <mxGeometry x="570" y="535" width="70" height="20" as="geometry" />
        </mxCell>
        
        <!-- ECR to Cluster -->
        <mxCell id="arrow4" value="" style="endArrow=classic;html=1;rounded=0;strokeWidth=2;strokeColor=#F57C00;dashed=1;dashPattern=8 8;" edge="1" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="1080" y="550" as="sourcePoint" />
            <mxPoint x="1000" y="550" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="arrow4-label" value="Pull Images" style="text;html=1;strokeColor=none;fillColor=white;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=11;fontStyle=1;fontColor=#F57C00;" vertex="1" parent="1">
          <mxGeometry x="1020" y="530" width="70" height="20" as="geometry" />
        </mxCell>
        
        <!-- Simple Stats -->
        <mxCell id="stats-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFFFFF;strokeColor=#BDBDBD;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="280" y="650" width="640" height="60" as="geometry" />
        </mxCell>
        <mxCell id="stats-title" value="Demo Capabilities" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1;fontColor=#1A202C;" vertex="1" parent="1">
          <mxGeometry x="580" y="660" width="120" height="20" as="geometry" />
        </mxCell>
        <mxCell id="stats-text" value="4 Pods • Load Balancing • Auto-Scaling • Service Discovery • Container Orchestration" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=12;fontColor=#666666;" vertex="1" parent="1">
          <mxGeometry x="300" y="685" width="600" height="20" as="geometry" />
        </mxCell>
        
        <!-- Simple Legend -->
        <mxCell id="legend-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFFFFF;strokeColor=#BDBDBD;strokeWidth=1;" vertex="1" parent="1">
          <mxGeometry x="50" y="500" width="120" height="100" as="geometry" />
        </mxCell>
        <mxCell id="legend-title" value="Components" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=12;fontStyle=1;fontColor=#1A202C;" vertex="1" parent="1">
          <mxGeometry x="85" y="510" width="80" height="15" as="geometry" />
        </mxCell>
        
        <mxCell id="legend-frontend" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#4CAF50;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=8;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_1;" vertex="1" parent="1">
          <mxGeometry x="65" y="535" width="15" height="15" as="geometry" />
        </mxCell>
        <mxCell id="legend-frontend-text" value="Frontend" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontColor=#4CAF50;" vertex="1" parent="1">
          <mxGeometry x="85" y="530" width="60" height="25" as="geometry" />
        </mxCell>
        
        <mxCell id="legend-backend" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#FF9800;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=8;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_1;" vertex="1" parent="1">
          <mxGeometry x="65" y="560" width="15" height="15" as="geometry" />
        </mxCell>
        <mxCell id="legend-backend-text" value="Backend" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontColor=#FF9800;" vertex="1" parent="1">
          <mxGeometry x="85" y="555" width="60" height="25" as="geometry" />
        </mxCell>
        
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```

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
