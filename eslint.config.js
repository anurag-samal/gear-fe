import solid from "eslint-plugin-solid";

const flatRecommended = solid.configs["flat/recommended"];
const flatTypeScript = solid.configs["flat/typescript"];

export default [
  flatRecommended,
  flatTypeScript,
  {
    ignores: [
      "dist/",
      ".output/",
      ".nitro/",
      ".vinxi/",
      "node_modules/",
    ],
  },
];
