module.exports = (ctx) => ({
  parser: ctx.parser ? 'sugarss' : false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-calc': {},
    'postcss-nested': {},
    cssnano: ctx.env === 'production' ? {} : false
  }
})