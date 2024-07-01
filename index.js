import http from "http";
import fs from "fs";
import url from "url"

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer( async (req, res) => {
  try {
    try {
      if (req.method === "GET") {
        let filePath;
        
        if (req.url === "/") {
          filePath = path.join(__dirname, "public", "index.html");
        } else if (req.url === "/about") {
          filePath = path.join(__dirname, "public", "about.html");
        } else {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("<h1>Not Found</h1>");
          return;  // Kończy działanie funkcji po wysłaniu odpowiedzi 404
        }
  } catch (error) {
    
  }
})