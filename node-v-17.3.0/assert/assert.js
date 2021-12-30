const assert = require('assert');
const http = require('http')
const assert1 = require('assert/strict');
const fs = require('fs')
const resultPrinter = require('../result-printer')
// fs.appendFileSync(__filename, decodeURIComponent(JSON.parse("u0041")))

try {
  assert.deepEqual(/a/gi, new Date());
  
} catch (error) {
  console.log(error)
}

const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: 'strictEqual'
});

// Verify error output:
try {
  assert.strictEqual(1, 2);
} catch (err) {
  assert(err instanceof assert.AssertionError);
  assert.strictEqual(err.message, message);
  assert.strictEqual(err.name, 'AssertionError');
  assert.strictEqual(err.actual, 1);
  assert.strictEqual(err.expected, 2);
  assert.strictEqual(err.code, 'ERR_ASSERTION');
  assert.strictEqual(err.operator, 'strictEqual');
  assert.strictEqual(err.generatedMessage, true);
}

console.log('\u001b' === '')

// fs.readFile(__filename, (err, data) => {
//     const fileData = data.toString()
//     let line = 0
//     for(let i = 0; i <= fileData.length; i++) {
//         if (fileData[i] === '\n') {
//             line++
//         }
//         if (line === 10) {
//             console.log('your line' + line)
//             return
//         }
//     }
//     console.log(line)
// })

// try {
//     const result = assert.deepEqual([1, 2, [3, 4]], [1, 2, ['3', 4]])
//     fs.writeFile('./text.txt', result, (err, data) => {
//         console.log('object')
//     })

// } catch (error) {
//     const err = "" + error
//     const newError = []
//     for(let i = 0; i <= err.length; i++){
//         if (err[i] === '\u001b') {
//             i += 5
//             console.log('object')
//         }
//         newError.push(err[i])
//     }
//     console.log(newError.join(''))
    // fs.appendFile(__filename, "/*" + (error) + '\n' + JSON.stringify(error) + "*/", (err, data) => {
    //     console.log(error)
    // })
// }
// function getRowNum() {
//     let e = new Error();
//     e = e.stack.split("\n")[2].split(":");
//     e.pop();
//     return e.pop();
// }
// console.log(getRowNum())
// const server = http.createServer((req, res) => {
//     console.log(err)
//     res.end(JSON.stringify(err))
// })

// server.listen(8000, () => {

//     console.log('server')
// })

/*AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:
+ actual - expected
  [
    1,
    2,
    [
+     3,
-     '3',
      4
    ]
  ]*/
