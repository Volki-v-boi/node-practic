import * as fs from "fs/promises";
import { PATH_DB } from "../constants/products.js";

export const readFileContent = async () => {
  const data = await fs.readFile(PATH_DB, "utf-8");
  return data.trim() ? JSON.parse(data) : [];
};
