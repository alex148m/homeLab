# 🧪 Phase 1 - Base Infrastructure

## 📌 Overview

In this phase, we set up a lightweight Kubernetes environment using **k3s** and deployed our first applications to validate that the cluster is working correctly.

This step establishes the foundation for all future work in this homelab.

---

## ⚙️ k3s Installation

We installed k3s using the official installation script:

```bash
curl -sfL https://get.k3s.io | sh -
```

After installation, we verified the cluster status:

```bash
kubectl get nodes
```

---

## 🔑 kubectl Configuration (No sudo)

To avoid using `sudo` for every command, we configured kubeconfig permissions:

```bash
mkdir -p ~/.kube
sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/config
sudo chown $USER:$USER ~/.kube/config
```

---

## ⚡ Shell Productivity Improvements

### Enable kubectl autocompletion (zsh)

```bash
echo "source <(kubectl completion zsh)" >> ~/.zshrc
source ~/.zshrc
```

### Create alias for kubectl

```bash
echo "alias k=kubectl" >> ~/.zshrc
source ~/.zshrc
```

This allows faster command execution:

```bash
k get pods
```

---

## 🐳 Docker Configuration (No sudo)

We configured Docker to run without sudo:

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
docker ps
```

---

## 🚀 First Deployment (Nginx)

We deployed a simple Nginx application using:

* Deployment (manages pods)
* Service (exposes the application)

### Apply resources:

```bash
kubectl apply -f nginx-deployment.yaml
kubectl apply -f nginx-service.yaml
```

### Verify resources:

```bash
kubectl get pods
kubectl get svc
```

---

## 🌐 Accessing the Application

The service was exposed using a NodePort, allowing access via:

```
http://localhost:30007
```

---

## 🔥 Key Kubernetes Concepts Tested

### 1. Self-Healing

We manually deleted a pod:

```bash
kubectl delete pod <pod-name>
```

Kubernetes automatically recreated it.

✅ This demonstrates:

* High availability
* Automatic recovery

---

### 2. Scaling (Scale In / Out)

We scaled the deployment up and down:

```bash
kubectl scale deployment demo-nginx --replicas=3
kubectl scale deployment demo-nginx --replicas=1
```

✅ This demonstrates:

* Horizontal scaling
* Load handling capability

---

## 🚀 Custom Application Deployment (Node.js)

We created and deployed our first custom backend application using Node.js.

### 🐳 Build Docker Image

```bash
docker build -t backend-node:v1 .
```

### 📦 Import Image into k3s

Since we are working locally, we imported the image directly into k3s:

```bash
docker save backend-node:v1 | sudo k3s ctr images import -
```

### 🔍 Verify Image in k3s

```bash
sudo k3s ctr images ls | grep backend-node
```

---

## 🔁 Additional Validation

We re-tested Kubernetes core capabilities using our custom application:

### Self-Healing

* Deleted pods manually
* Verified automatic recreation

### Scaling

* Increased and decreased replicas
* Confirmed application remained accessible


When I do some change I need to hit manually this commands:

kubectl apply -f k8s/base/deployments/backend-deployment.yaml
kubectl rollout restart deployment backend-node