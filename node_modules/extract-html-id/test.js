var tape = require('tape')
var extract = require('./')

tape('extracts first ids from html', function (assert) {
  var html = `
    <div id="foo bar">
      <p id="bin baz">hello planet</p>
    </div>
  `
  var expected = ['foo', 'bin']
  assert.deepEqual(extract(html), expected, 'array was same')
  assert.end()
})

tape('returns empty array if no matches', function (assert) {
  var html = `
    <div>
      <p>hello planet</p>
    </div>
  `
  var expected = []
  assert.deepEqual(extract(html), expected, 'array was same')
  assert.end()
})

tape('removes duplicates', function (assert) {
  var html = `
    <div id="foo bar" class="foo2 bar2">
      <p id="foo bar" class="foo2 bar2">hello planet</p>
    </div>
  `
  var expected = ['foo']
  assert.deepEqual(extract(html), expected, 'array was same')
  assert.end()
})

tape('matches fancy ids', function (assert) {
  var html = `
    <body id=_7750a623>
      <h1>hello planet</h1>
    </body>
  `
  var expected = [ '_7750a623' ]
  assert.deepEqual(extract(html), expected, 'array was same')
  assert.end()
})
