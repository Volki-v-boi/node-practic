import { readFileContent } from "../utils/readProductList.js";

export const countProducts = async () => {
  const data = await readFileContent();
  return data.length;
};

console.log(await countProducts());
