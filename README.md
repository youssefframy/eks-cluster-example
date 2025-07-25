# Simple EKS Demo - Complete Setup Guide

## Architecture Diagram
```md
<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="2025-01-01T00:00:00.000Z" agent="draw.io" etag="xxx" version="24.0.0" type="device">
  <diagram name="EKS-Demo-Architecture" id="eks-demo">
    <mxGraphModel dx="1422" dy="794" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1400" pageHeight="900" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        
        <!-- Background -->
        <mxCell id="bg" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=#F8F9FA;strokeColor=none;" vertex="1" parent="1">
          <mxGeometry x="0" y="0" width="1400" height="900" as="geometry" />
        </mxCell>
        
        <!-- Title -->
        <mxCell id="title" value="EKS Demo Application Architecture" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=28;fontStyle=1;fontColor=#1A202C;" vertex="1" parent="1">
          <mxGeometry x="450" y="40" width="500" height="40" as="geometry" />
        </mxCell>
        
        <!-- Internet -->
        <mxCell id="internet-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E3F2FD;strokeColor=#1976D2;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="620" y="120" width="160" height="80" as="geometry" />
        </mxCell>
        <mxCell id="internet" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#1976D2;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.internet;" vertex="1" parent="1">
          <mxGeometry x="670" y="135" width="60" height="37" as="geometry" />
        </mxCell>
        <mxCell id="internet-label" value="Internet Users" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1;fontColor=#1976D2;" vertex="1" parent="1">
          <mxGeometry x="650" y="175" width="100" height="20" as="geometry" />
        </mxCell>
        
        <!-- AWS Cloud Container -->
        <mxCell id="aws-cloud-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF8E1;strokeColor=#FF8F00;strokeWidth=3;" vertex="1" parent="1">
          <mxGeometry x="100" y="240" width="1200" height="600" as="geometry" />
        </mxCell>
        <mxCell id="aws-icon" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#FF8F00;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.aws_cloud;" vertex="1" parent="1">
          <mxGeometry x="120" y="260" width="50" height="31" as="geometry" />
        </mxCell>
        <mxCell id="aws-label" value="AWS Cloud" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;fontColor=#FF8F00;" vertex="1" parent="1">
          <mxGeometry x="180" y="270" width="100" height="20" as="geometry" />
        </mxCell>
        
        <!-- Application Load Balancer -->
        <mxCell id="alb-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F3E5F5;strokeColor=#7B1FA2;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="600" y="300" width="200" height="100" as="geometry" />
        </mxCell>
        <mxCell id="alb" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7B1FA2;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.application_load_balancer;" vertex="1" parent="1">
          <mxGeometry x="670" y="320" width="60" height="60" as="geometry" />
        </mxCell>
        <mxCell id="alb-label" value="Application Load Balancer" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=12;fontStyle=1;fontColor=#7B1FA2;" vertex="1" parent="1">
          <mxGeometry x="620" y="375" width="160" height="20" as="geometry" />
        </mxCell>
        
        <!-- VPC Container -->
        <mxCell id="vpc-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8F5E8;strokeColor=#2E7D32;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="150" y="450" width="1100" height="350" as="geometry" />
        </mxCell>
        <mxCell id="vpc-icon" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#2E7D32;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.vpc;" vertex="1" parent="1">
          <mxGeometry x="170" y="470" width="50" height="50" as="geometry" />
        </mxCell>
        <mxCell id="vpc-label" value="VPC (Virtual Private Cloud)" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1;fontColor=#2E7D32;" vertex="1" parent="1">
          <mxGeometry x="230" y="485" width="200" height="20" as="geometry" />
        </mxCell>
        
        <!-- EKS Cluster Container -->
        <mxCell id="eks-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#F57C00;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="200" y="530" width="1000" height="240" as="geometry" />
        </mxCell>
        <mxCell id="eks-icon" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#F57C00;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.eks_cloud;" vertex="1" parent="1">
          <mxGeometry x="220" y="550" width="60" height="36" as="geometry" />
        </mxCell>
        <mxCell id="eks-label" value="Amazon EKS Cluster (demo-cluster)" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1;fontColor=#F57C00;" vertex="1" parent="1">
          <mxGeometry x="290" y="558" width="250" height="20" as="geometry" />
        </mxCell>
        
        <!-- Node Group 1 -->
        <mxCell id="node1-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E3F2FD;strokeColor=#1976D2;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="250" y="600" width="400" height="140" as="geometry" />
        </mxCell>
        <mxCell id="node1-icon" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#1976D2;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ec2_instance;" vertex="1" parent="1">
          <mxGeometry x="270" y="620" width="48" height="48" as="geometry" />
        </mxCell>
        <mxCell id="node1-label" value="Worker Node 1 (t3.medium)" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=12;fontStyle=1;fontColor=#1976D2;" vertex="1" parent="1">
          <mxGeometry x="330" y="635" width="180" height="20" as="geometry" />
        </mxCell>
        
        <!-- Pods in Node 1 -->
        <mxCell id="frontend-pod1-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8F5E8;strokeColor=#4CAF50;strokeWidth=1;" vertex="1" parent="1">
          <mxGeometry x="350" y="680" width="80" height="40" as="geometry" />
        </mxCell>
        <mxCell id="frontend-pod1" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#4CAF50;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=8;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_1;" vertex="1" parent="1">
          <mxGeometry x="360" y="690" width="20" height="20" as="geometry" />
        </mxCell>
        <mxCell id="frontend-pod1-label" value="Frontend" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontColor=#4CAF50;fontStyle=1;" vertex="1" parent="1">
          <mxGeometry x="385" y="690" width="40" height="20" as="geometry" />
        </mxCell>
        
        <mxCell id="backend-pod1-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#FF9800;strokeWidth=1;" vertex="1" parent="1">
          <mxGeometry x="450" y="680" width="80" height="40" as="geometry" />
        </mxCell>
        <mxCell id="backend-pod1" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#FF9800;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=8;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_1;" vertex="1" parent="1">
          <mxGeometry x="460" y="690" width="20" height="20" as="geometry" />
        </mxCell>
        <mxCell id="backend-pod1-label" value="Backend" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontColor=#FF9800;fontStyle=1;" vertex="1" parent="1">
          <mxGeometry x="485" y="690" width="40" height="20" as="geometry" />
        </mxCell>
        
        <!-- Node Group 2 -->
        <mxCell id="node2-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E3F2FD;strokeColor=#1976D2;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="750" y="600" width="400" height="140" as="geometry" />
        </mxCell>
        <mxCell id="node2-icon" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#1976D2;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ec2_instance;" vertex="1" parent="1">
          <mxGeometry x="770" y="620" width="48" height="48" as="geometry" />
        </mxCell>
        <mxCell id="node2-label" value="Worker Node 2 (t3.medium)" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=12;fontStyle=1;fontColor=#1976D2;" vertex="1" parent="1">
          <mxGeometry x="830" y="635" width="180" height="20" as="geometry" />
        </mxCell>
        
        <!-- Pods in Node 2 -->
        <mxCell id="frontend-pod2-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8F5E8;strokeColor=#4CAF50;strokeWidth=1;" vertex="1" parent="1">
          <mxGeometry x="850" y="680" width="80" height="40" as="geometry" />
        </mxCell>
        <mxCell id="frontend-pod2" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#4CAF50;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=8;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_1;" vertex="1" parent="1">
          <mxGeometry x="860" y="690" width="20" height="20" as="geometry" />
        </mxCell>
        <mxCell id="frontend-pod2-label" value="Frontend" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontColor=#4CAF50;fontStyle=1;" vertex="1" parent="1">
          <mxGeometry x="885" y="690" width="40" height="20" as="geometry" />
        </mxCell>
        
        <mxCell id="backend-pod2-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#FF9800;strokeWidth=1;" vertex="1" parent="1">
          <mxGeometry x="950" y="680" width="80" height="40" as="geometry" />
        </mxCell>
        <mxCell id="backend-pod2" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#FF9800;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=8;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_1;" vertex="1" parent="1">
          <mxGeometry x="960" y="690" width="20" height="20" as="geometry" />
        </mxCell>
        <mxCell id="backend-pod2-label" value="Backend" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontColor=#FF9800;fontStyle=1;" vertex="1" parent="1">
          <mxGeometry x="985" y="690" width="40" height="20" as="geometry" />
        </mxCell>
        
        <!-- ECR Registry -->
        <mxCell id="ecr-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#F57C00;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="1300" y="300" width="80" height="100" as="geometry" />
        </mxCell>
        <mxCell id="ecr" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#F57C00;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ecr;" vertex="1" parent="1">
          <mxGeometry x="1320" y="320" width="40" height="40" as="geometry" />
        </mxCell>
        <mxCell id="ecr-label" value="ECR" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=12;fontStyle=1;fontColor=#F57C00;" vertex="1" parent="1">
          <mxGeometry x="1310" y="370" width="60" height="20" as="geometry" />
        </mxCell>
        
        <!-- Services -->
        <mxCell id="services-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F3E5F5;strokeColor=#7B1FA2;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="480" y="480" width="240" height="60" as="geometry" />
        </mxCell>
        <mxCell id="services-label" value="Kubernetes Services" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=12;fontStyle=1;fontColor=#7B1FA2;" vertex="1" parent="1">
          <mxGeometry x="550" y="505" width="140" height="20" as="geometry" />
        </mxCell>
        
        <!-- Traffic Flow Arrows -->
        <!-- Internet to ALB -->
        <mxCell id="arrow1" value="" style="endArrow=classic;html=1;rounded=0;strokeWidth=3;strokeColor=#1976D2;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" parent="1" source="internet-bg" target="alb-bg">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="700" y="220" as="sourcePoint" />
            <mxPoint x="700" y="280" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="arrow1-label" value="HTTPS Traffic" style="text;html=1;strokeColor=none;fillColor=white;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=11;fontStyle=1;fontColor=#1976D2;" vertex="1" parent="1">
          <mxGeometry x="720" y="250" width="80" height="20" as="geometry" />
        </mxCell>
        
        <!-- ALB to Services -->
        <mxCell id="arrow2" value="" style="endArrow=classic;html=1;rounded=0;strokeWidth=3;strokeColor=#7B1FA2;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" parent="1" source="alb-bg" target="services-bg">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="700" y="420" as="sourcePoint" />
            <mxPoint x="600" y="460" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="arrow2-label" value="Load Balance" style="text;html=1;strokeColor=none;fillColor=white;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=11;fontStyle=1;fontColor=#7B1FA2;" vertex="1" parent="1">
          <mxGeometry x="630" y="430" width="80" height="20" as="geometry" />
        </mxCell>
        
        <!-- Services to Pods -->
        <mxCell id="arrow3" value="" style="endArrow=classic;html=1;rounded=0;strokeWidth=2;strokeColor=#4CAF50;exitX=0.2;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="1" source="services-bg">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="520" y="560" as="sourcePoint" />
            <mxPoint x="390" y="680" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <mxCell id="arrow4" value="" style="endArrow=classic;html=1;rounded=0;strokeWidth=2;strokeColor=#4CAF50;exitX=0.8;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="1" source="services-bg">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="672" y="560" as="sourcePoint" />
            <mxPoint x="890" y="680" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- Frontend to Backend -->
        <mxCell id="arrow5" value="" style="endArrow=classic;html=1;rounded=0;strokeWidth=2;strokeColor=#FF9800;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="frontend-pod1-bg" target="backend-pod1-bg">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="430" y="700" as="sourcePoint" />
            <mxPoint x="450" y="700" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <mxCell id="arrow6" value="" style="endArrow=classic;html=1;rounded=0;strokeWidth=2;strokeColor=#FF9800;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="frontend-pod2-bg" target="backend-pod2-bg">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="930" y="700" as="sourcePoint" />
            <mxPoint x="950" y="700" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        
        <!-- ECR to Cluster -->
        <mxCell id="arrow7" value="" style="endArrow=classic;html=1;rounded=0;strokeWidth=2;strokeColor=#F57C00;dashed=1;dashPattern=5 5;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" edge="1" parent="1" source="ecr-bg" target="eks-bg">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="1280" y="350" as="sourcePoint" />
            <mxPoint x="1220" y="650" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="arrow7-label" value="Container Images" style="text;html=1;strokeColor=none;fillColor=white;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=11;fontStyle=1;fontColor=#F57C00;" vertex="1" parent="1">
          <mxGeometry x="1220" y="470" width="100" height="20" as="geometry" />
        </mxCell>
        
        <!-- Legend -->
        <mxCell id="legend-bg" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFFFFF;strokeColor=#BDBDBD;strokeWidth=2;shadow=1;" vertex="1" parent="1">
          <mxGeometry x="150" y="90" width="350" height="120" as="geometry" />
        </mxCell>
        <mxCell id="legend-title" value="Architecture Components" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;fontColor=#1A202C;" vertex="1" parent="1">
          <mxGeometry x="275" y="105" width="180" height="20" as="geometry" />
        </mxCell>
        
        <!-- Legend Items -->
        <mxCell id="legend-frontend-icon" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#4CAF50;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=8;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_1;" vertex="1" parent="1">
          <mxGeometry x="170" y="135" width="16" height="16" as="geometry" />
        </mxCell>
        <mxCell id="legend-frontend-text" value="Frontend Pods (React UI)" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=11;fontColor=#4CAF50;" vertex="1" parent="1">
          <mxGeometry x="195" y="130" width="130" height="25" as="geometry" />
        </mxCell>
        
        <mxCell id="legend-backend-icon" value="" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#FF9800;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=8;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.container_1;" vertex="1" parent="1">
          <mxGeometry x="170" y="160" width="16" height="16" as="geometry" />
        </mxCell>
        <mxCell id="legend-backend-text" value="Backend Pods (Node.js API)" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=11;fontColor=#FF9800;" vertex="1" parent="1">
          <mxGeometry x="195" y="155" width="130" height="25" as="geometry" />
        </mxCell>
        
        <mxCell id="legend-flow-text" value="Traffic Flow: Users → ALB → Services → Pods" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=11;fontStyle=1;fontColor=#1A202C;" vertex="1" parent="1">
          <mxGeometry x="170" y="185" width="310" height="20" as="geometry" />
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
