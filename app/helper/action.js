import { promises as fs } from "fs";

export default async function getUser() {
  const file = await fs.readFile(
    process.cwd() + "/app/helper/users.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return data;
}
