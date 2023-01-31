module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@next/next/recommended",
    "turbo",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // OFF
    "@next/next/no-html-link-for-pages": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    // ON
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
};
