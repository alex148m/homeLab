const express = require('express');
const client = require('prom-client');
const app = express();

const PORT = 3000;

// métricas default (CPU, memoria, etc.)
client.collectDefaultMetrics();

// contador de requests
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
});

// endpoint principal
app.get('/', (req, res) => {
  httpRequestCounter.inc();

  res.json({
    message: "Hello from Kubernetes 🚀",
    hostname: require('os').hostname()
  });
});

// endpoint de métricas
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});