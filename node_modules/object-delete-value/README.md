# object-delete-value

delete keys with the given value from an object

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/object-delete-value.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/object-delete-value
[travis-image]: https://img.shields.io/travis/goto-bus-stop/object-delete-value.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/object-delete-value
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install object-delete-value
```

## Usage

```js
var deleteValue = require('object-delete-value')

var obj = {
  abc: 'def',
  ghi: 'whaddup',
  jkl: 'alphabets',
  xyz: 'whaddup'
}

deleteValue(obj, 'whaddup')
// → { abc: 'def',
//     jkl: 'alphabets' }
```

## API

### `deleteValue(obj, value)`

Delete all keys from `obj` whose values strict-equal `value`. Return `obj`.

## License

[Apache-2.0](LICENSE.md)
