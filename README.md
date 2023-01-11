# perfmate [![npm](https://img.shields.io/npm/v/perfmate)](https://www.npmjs.com/package/perfmate) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/coremyslo/perfmate/blob/master/LICENSE)

This module represents a class for measuring and logging code execution time, both in browser and in node.js, based on [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) and [process.hrtime.bigint()](https://nodejs.org/api/process.html#processhrtimebigint)

Every instance of the class created contains
* a start time (now is set on creation)
* an end time

All methods of the class manipulate the start or/and end time or print their difference.
## Installation

```shell
$ yarn add perfmate
```

```javascript
import PerfMate from "perfmate";
// OR
const PerfMate = require("perfmate").default;
```

## Usage Examples
### Basic
```typescript
const perf = new PerfMate()
// your code ~ 100ms
perf.log("named label1"); // named label1: 100.011
```
### Custom message
```typescript
const perf = new PerfMate()
// your code ~ 100ms
console.log(`named label2, diff is ${perf.end().diff(0)}ms`) /// named label2, diff is 100ms
// end() used here can be omitted just to perf.diff() if you don't need to stop
```
### Warning and Error
```typescript
const perf = new PerfMate()
// your code ~ 100ms
perf.warn("named label3"); // named label3: 100.012
perf.error("named label4"); // named label4: 100.014
// both are aliases for console.warn and console.error
```
### Reset and reuse
```typescript
const perf = new PerfMate()
// your code ~ 100ms
perf.log("named label5"); // named label5: 100.008
perf.clear();
// your code ~ 200ms
perf.log("named label6"); // named label6: 200.014
```

### Stop and remember
```typescript
const perf = new PerfMate()
// your code ~ 100ms
perf.log("named label7"); // named label7: 100.006
// your code ~ 100ms
perf.log("named label8"); // named label8: 200.013
perf.end();
// your code ~ 200ms
perf.log("named label9"); // named label9: 200.013
```
## API
### `diff(round)`
* `round: number`, default value is 3

Returns the difference between the time when the instance of the class was created (or when the last `clear` was called) and now. Doesn't set the end time.

### `end()`
Sets the end time as now.
### `clear()`
Sets the start time as now.
### `log(message, round)`
* `message: string`
* `round: number`, default value is 3

console.log's the difference between start time and end time, if end time is not set, now is used instead.
### `warn(message, round)`
* `message: string`
* `round: number`, default value is 3

console.warn's the difference between start time and end time, if end time is not set, now is used instead.
### `error(message, round)`
* `message: string`
* `round: number`, default value is 3

console.error's the difference between start time and end time, if end time is not set, now is used instead.
