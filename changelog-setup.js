module.exports = function (Handlebars) {
  Handlebars.registerHelper('custom', function (context, options) {
    console.log('registerHelper -> context', context, options)
    return 'custom helpers!'
  })
}
