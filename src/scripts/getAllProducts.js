import { readFileContent } from "../utils/readProductList.js";

export const getAllProducts = async () => {
  const data = await readFileContent();
  return data;
};
console.log(await getAllProducts());
