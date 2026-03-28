import { createFackeProduct } from "../utils/createFackeProduct.js";
import { readFileContent } from "../utils/readProductList.js";
import { writeFileContent } from "../utils/writeProducts.js";

export const addOneProduct = async () => {
  const currentProducts = await readFileContent();
  const newProduct = createFackeProduct();
  currentProducts.push(newProduct);
  await writeFileContent(currentProducts);
};
addOneProduct();
