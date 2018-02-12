var assert = require('assert')

var findHtml = /id=["']?([\d\w-_ ]+)+["']?/g
module.exports = extract

function extract (html) {
  assert.equal(typeof html, 'string', 'extract-html-id: html should be type string')

  var arr = []
  var res

  while (true) {
    res = findHtml.exec(html)
    if (!res) break
    arr = arr.concat(res[1].split(' ')[0])
  }

  if (arr.length <= 1) return arr
  return arr.filter(function (value, index) {
    return arr.indexOf(value) === index
  })
}
