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
