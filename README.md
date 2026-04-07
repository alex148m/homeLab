# 🚀 Homelab DevOps Project

## 📌 Overview

This project is a fully functional **DevOps homelab** designed to demonstrate real-world skills in:

* Kubernetes (k3s)
* CI/CD pipelines
* Infrastructure as Code (Terraform)
* Observability (Prometheus + Grafana)
* Containerization (Docker)
* Backend (Java - Spring Boot)
* Frontend (TypeScript)

The goal is to simulate a production-like environment using limited local resources.

---

## 🎯 Objectives

* Build a lightweight Kubernetes cluster using k3s
* Deploy a microservices-based application
* Implement a full CI/CD pipeline
* Add monitoring and observability
* Apply Infrastructure as Code principles
* Document real issues and troubleshooting

---

## 🧱 Tech Stack

| Area          | Technology           |
| ------------- | -------------------- |
| Orchestration | k3s (Kubernetes)     |
| Containers    | Docker               |
| Backend       | Java (Spring Boot)   |
| Frontend      | TypeScript (React)   |
| CI/CD         | GitHub Actions       |
| Observability | Prometheus + Grafana |
| IaC           | Terraform            |

---

## 🗺️ Roadmap

### ✅ Phase 1 - Base Infrastructure

* [x] Install k3s cluster
* [ ] Configure kubectl access
* [ ] Deploy a test application

### 🔄 Phase 2 - Application

* [ ] Create backend (Spring Boot API)
* [ ] Create frontend (React app)
* [ ] Connect frontend to backend
* [ ] Deploy app to Kubernetes

### ⚙️ Phase 3 - CI/CD

* [ ] Setup GitHub Actions
* [ ] Build Docker images automatically
* [ ] Push images to registry
* [ ] Deploy automatically to k3s

### 📊 Phase 4 - Observability

* [ ] Install Prometheus
* [ ] Install Grafana
* [ ] Create dashboards
* [ ] Monitor application metrics

### 🏗️ Phase 5 - Infrastructure as Code

* [ ] Define infrastructure with Terraform
* [ ] Automate environment setup

### 🔥 Phase 6 - Advanced Features

* [ ] Autoscaling (HPA)
* [ ] Failure simulation (self-healing)
* [ ] Multi-environment (dev/staging/prod)
* [ ] Alerts and monitoring improvements

---

## 🖥️ Environment

* OS: Ubuntu 20.04
* Hardware: Laptop (8GB RAM)
* Kubernetes: k3s (single-node cluster)

---

## 📚 Documentation

* `docs/architecture.md` → System design
* `docs/troubleshooting.md` → Issues and fixes
* `docs/decisions.md` → Technical decisions

---

## 🚀 Getting Started (WIP)

Instructions will be added step by step as the project evolves.

---

## 💡 Notes

This project is intentionally built step-by-step to reflect real DevOps workflows, including:

* Debugging issues
* Making trade-offs due to limited resources
* Iterative improvements

---

