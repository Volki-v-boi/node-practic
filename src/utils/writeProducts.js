import * as fs from "fs/promises";
import { PATH_DB } from "../constants/products.js";

export const writeFileContent = async (newProducts) => {
  await fs.writeFile(PATH_DB, JSON.stringify(newProducts, null, 2));
  return newProducts;
};
