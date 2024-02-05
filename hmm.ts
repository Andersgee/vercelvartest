import { join } from "node:path";
import fs from "node:fs";

function getSpecialPaths(base: string, res: string[] = []) {
  const files = fs.readdirSync(base);

  for (const file of files) {
    const path = join(base, file);
    if (fs.statSync(path).isDirectory()) {
      getSpecialPaths(path, res);
    } else if (path.endsWith("route.ts")) {
      res.push(path);
    }
  }
}
