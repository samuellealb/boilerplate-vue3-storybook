module.exports = function (mixin, cols) {
  return {
    '&': {
      'flex-wrap': 'wrap',
      'display': 'flex',
      'flex-direction': 'row',
      'overflow': 'auto',
      '& > *': {
        'flex-basis': 'calc(100% / ' + cols + ')',
        'min-width': 'calc(100% / ' + cols + ')',
        'max-width': 'calc(100% / ' + cols + ')'
      }
    }
  } 
}