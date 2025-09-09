import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    ignores: ["dist/**", "package-lock.json"]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json"
      }
    },
    plugins: {
      prettier
    },
    rules: {
      "quotes": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      semi: ["error", "always"],
      "comma-dangle": ["error", "never"],
      "prettier/prettier": [
        "error",
        {
          semi: true,
          trailingComma: "none",
          singleQuote: false,
          jsxSingleQuote: false
        }
      ]
    }
  }
];
