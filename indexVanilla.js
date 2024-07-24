import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = 8080;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      let statusCode = 200;

      if (req.url === "/") {
        filePath = path.join(__dirname, "index.html");
      } else if (req.url === "/index") {
        filePath = path.join(__dirname, "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "about.html");
      } else if (req.url === "/contact-me") {
        filePath = path.join(__dirname, "contact-me.html");
      } else {
        filePath = path.join(__dirname, "404.html");
        statusCode = 404;
      }

      const data = await fs.readFile(filePath);
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method not Allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
