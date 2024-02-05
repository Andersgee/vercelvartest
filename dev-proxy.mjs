//dev-proxy.mjs
import http from "node:http";
import httpProxy from "http-proxy";
import fs from "node:fs";
import { join } from "node:path";

const specialPort = Number(process.argv[2]);
if (isNaN(specialPort)) {
  console.log("example usage: node dev-proxy.mjs 33779");
  process.exit();
}

//const specialPort = 44675;
//const specialPaths = ["/api/edge-route", "/api/nodejs-route"];
const specialPaths = getSpecialPaths();

const proxy = httpProxy.createProxyServer();
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (specialPaths.includes(url.pathname)) {
    proxy.web(req, res, { target: `http://localhost:${specialPort}` });
  } else {
    //everything else works as normal
    proxy.web(req, res, { target: `http://localhost:3000` });
  }
});

console.log("forwarding everything to 3000 except:");
for (const p of specialPaths) {
  console.log(p);
}
console.log(`which is forwarded to ${specialPort} instead`);
console.log("\nlistening on port 3001");
server.listen(3001);

function getSpecialPaths(base = "src/app/api", res = []) {
  const files = fs.readdirSync(base);

  for (const file of files) {
    const path = join(base, file);
    if (fs.statSync(path).isDirectory()) {
      getSpecialPaths(path, res);
    } else if (path.endsWith("/route.ts")) {
      const p = path.split("/route.ts")[0].split("src/app")[1];
      res.push(p);
    }
  }
  return res;
}
