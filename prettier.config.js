export default {
  semi: true,
  trailingComma: "none",
  tabWidth: 2,
  endOfLine: "auto",
  singleQuote: false,
  quoteProps: "preserve",
  jsxSingleQuote: false,
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      options: {
        singleQuote: false
      }
    }
  ]
};
