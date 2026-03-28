import { createFackeProduct } from "../utils/createFackeProduct.js";
import { readFileContent } from "../utils/readProductList.js";
import { writeFileContent } from "../utils/writeProducts.js";

export const generateProducts = async (number) => {
  const curentProducts = await readFileContent();
  const createProducts = Array(number).fill(0).map(createFackeProduct);
  const newProducts = [...curentProducts, ...createProducts];
  await writeFileContent(newProducts);
};

generateProducts(3);
