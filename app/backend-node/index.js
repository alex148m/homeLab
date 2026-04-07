const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Hello from Kubernetes v2🚀",
    hostname: require('os').hostname()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});