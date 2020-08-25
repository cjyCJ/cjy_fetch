<!--
 * @Author: chenjianying
 * @Date: 2020-08-25 16:45:38
 * @LastEditTime: 2020-08-25 16:57:01
 * @FilePath: \npm_modules\README.md
-->
# cjy_fetch polyfill

`fetch()` 函数用于请求接口,其中包含 fetch.get() / fetch.post() / fetch.push() / fetch.delete()。

## Installation

```
npm install cjy_fetch --save

const fetch = require('cjy_fetch');
```

## Usage

For a more comprehensive API reference that this polyfill supports, refer to
https://github.com/cjyCJ/cjy_fetch

### Importing

Importing will automatically polyfill `window.fetch` and related APIs:

```javascript
import 'cjy_fetch';
```

### GET JSON

```javascript
fetch.get('http://jsonplaceholder.typicode.com/users').then(users => {
  console.log(users);
});
```

### Post JSON

```javascript
var users = {
  name: 'name',
  age: 'age'
};

fetch.post('/users', users).then(res => console.log(res));
```

### PUT JSON

```javascript
var users = {
  name: 'name',
  age: 'age'
};

fetch.put('/users/:id', users).then(res => console.log(res));
```

### DELETE JSON

```javascript
var users = {
  name: 'name',
  age: 'age'
};

fetch.delete('/users/:id').then(res => console.log(res));
```
