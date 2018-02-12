var test = require('tape')
var deleteValue = require('./')

test('deletes with the given value', function (t) {
  var obj = {
    a: 'b',
    c: 'd'
  }

  t.deepEqual(deleteValue(obj, 'd'), { a: 'b' })
  t.end()
})

test('deletes multiple keys if values match', function (t) {
  var obj = {
    a: 'b',
    c: 'd',
    e: 'b'
  }

  t.deepEqual(deleteValue(obj, 'b'), { c: 'd' })
  t.end()
})

test('mutates the object', function (t) {
  var obj = { a: 0, b: 1 }

  deleteValue(obj, 0)

  t.deepEqual(obj, { b: 1 })
  t.end()
})

test('deletes strict-equal things', function (t) {
  var obj = {
    a: { x: 'b' },
    b: { x: 'b' }, // different object
    c: '0',
    e: '1',
    f: 1
  }

  deleteValue(obj, 1)
  deleteValue(obj, obj.a)

  t.deepEqual(obj, {
    b: { x: 'b' },
    c: '0',
    e: '1'
  })

  t.end()
})
