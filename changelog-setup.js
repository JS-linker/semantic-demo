// If it is true, only a version changelog will be generated
const ONLY_PUT_LAST_VERSION_FLAG = true

module.exports = function(Handlebars) {
  Handlebars.registerHelper('list', function(context, option) {
    if (ONLY_PUT_LAST_VERSION_FLAG) {
      return option.fn(context[0])
    }
    return context.reduce((ret, item) => ret + option.fn(item), '')
  })
}
