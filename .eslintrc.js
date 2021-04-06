module.exports = {
  extends: ["react-app", "react-app/jest", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort"],
  rules: {
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "max-depth": ["error", { max: 3 }],
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-imports": "off",
    "import/order": "off",
  },
  env: {
    jest: true,
    node: true,
    browser: true,
  },
};
