module.exports = {
  printWidth: 140,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('@trivago/prettier-plugin-sort-imports'),
  ],
};
