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
