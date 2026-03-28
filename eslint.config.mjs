import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  pluginJs.configs.recomended,
  {
    files: ["src/**/*.js"],
    languageOptions: { globals: globals.node },
    rules: {
      semi: "error",
      "no-unused-vars": "off",
      "no-undef": "error",
    },
  },
];
