module.exports = function deleteValue (obj, value) {
  var k = Object.keys(obj)
  for (var i = 0; i < k.length; i++) {
    if (obj[k[i]] === value) {
      delete obj[k[i]]
    }
  }
  return obj
}
