import { writeFileContent } from "../utils/writeProducts.js";

export const clearProducts = async () => {
  await writeFileContent([]);
};
await clearProducts();
