# devops-demo


Small demo app to demonstrate DevOps skills: containers, CI/CD, and deployment.


## What it is
A React frontend and Node.js backend (Express) with Dockerfiles, docker-compose for local runs, and a GitHub Actions workflow for CI. The backend exposes `/api/items` and `/health`.


## How to run locally (with Docker)


Requirements: Docker & Docker Compose


```bash
# from repo root
docker-compose up --build
# frontend on http://localhost:3000
# backend on http://localhost:4000