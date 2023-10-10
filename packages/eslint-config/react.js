/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  rules: {
    'no-console': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto',
        plugins: ['prettier-plugin-tailwindcss'],
        tailwindAttributes: ['class', 'className', 'ngClass', '.*ClassName'],
        tailwindFunctions: ['tv', 'twMerge', 'cn'],
      },
    ],
  },
}
