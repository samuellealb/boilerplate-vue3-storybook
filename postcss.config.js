const path = require('path')

module.exports = (ctx) => ({
  parser: ctx.parser ? 'sugarss' : false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-mixins': ({ mixinsDir: path.join(__dirname, './src/styles/mixins/') }),
    'postcss-calc': {},
    cssnano: ctx.env === 'production' ? {} : false
  }
})