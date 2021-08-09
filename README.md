# next-step
> Get current/next/previous step data.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-step
```

## usage
```js
import '@jswork/next-step';

const items = [
  {
    id: 15,
    status: 'W',
    student: { id: 3, realname: '小明', photo: 'default-avatar.png' }
  },
  {
    id: 65,
    status: 'R',
    student: { id: 7, realname: '测试3号', photo: 'default-avatar.png' }
  },
  { id: 115, status: 'R', student: { id: 8, realname: 'H彩', photo: 'default-avatar.png' } }
];

const result1 = nx.step(items, {
  callback: (item) => item.id === 15,
  get: (item) => nx.get(item, 'id', null)
});

const result2 = nx.step(items, {
  callback: (item) => item.id === 65,
  get: (item) => nx.get(item, 'id', null)
});

const result3 = nx.step(items, {
  callback: (item) => item.id === 115,
  get: (item) => nx.get(item, 'id', null)
});

// result1 is: { current: 15, previous: null, next: 65 }
// result2 is: { current: 65, previous: 15, next: 115 }
// result3 is: { current: 115, previous: 65, next: null }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-step/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-step
[version-url]: https://npmjs.org/package/@jswork/next-step

[license-image]: https://img.shields.io/npm/l/@jswork/next-step
[license-url]: https://github.com/afeiship/next-step/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-step
[size-url]: https://github.com/afeiship/next-step/blob/master/dist/next-step.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-step
[download-url]: https://www.npmjs.com/package/@jswork/next-step
