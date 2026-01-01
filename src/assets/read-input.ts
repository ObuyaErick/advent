import { fileURLToPath } from "url";
import path from "path";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function readInput(from: string): string {
  return readFileSync(path.join(__dirname, "../../src/assets", from), "utf8");
}
