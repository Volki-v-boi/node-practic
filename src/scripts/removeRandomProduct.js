import { readFileContent } from "../utils/readProductList.js";
import { writeFileContent } from "../utils/writeProducts.js";

export const removeRandomProduct = async () => {
  const data = await readFileContent();
  if (data.length === 0) return;
  let random = Math.floor(Math.random() * data.length);
  data.splice(random, 1);
  return await writeFileContent(data);
};
await removeRandomProduct();
