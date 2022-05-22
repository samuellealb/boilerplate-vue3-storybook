module.exports = function (mixin, breakpoint, limit) {
  return {
    ['@media screen and (' + limit + '-width: '+ breakpoint +'px)']: {
      '&': {
        '@mixin-content': {}
      }
    }
  }
}