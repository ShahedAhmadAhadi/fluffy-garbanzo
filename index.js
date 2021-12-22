const ProgressBar = require('progress')
const string = require('./about')
const exp = require('./exp')
// const oranges = ['orange', 'orange']
// const apples = ['just one apple']
// oranges.forEach(fruit => {
//   console.count(fruit)
// })
// apples.forEach(fruit => {
//   console.count(fruit)
// })

// console.countReset('orange')

// oranges.forEach(fruit => {
//   console.count(fruit)
// })

// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()

// const doSomething = () => {
//     console.log('test')
//     for (let i = 0; i < 100000000; i++) {
//         continue;
//     }
// }
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //do something, and measure the time it takes
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()

// console.log('\x1b[33m%s\x1b[0m', 'hi!')
// console.log('\x1b[33m%s\x1b[0m', 'hi!')


// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 100)


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//   })

  console.log(string)
  console.log(exp)
  console.log(exp.xy)

  const fs = require('fs')

// const getFile = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (err, data) => {
//       if (err) {
//         reject(err)  
//         return
//       }
//       resolve(data)
//     })
//   })
// }

// getFile('./event-loops-prac/text.txt')
// .then(data => console.log(data))
// .catch(err => console.error(err))

const isItDoneYet = new Promise(/* ... as above ... */)
//...

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}

const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
  const doSomething = async () => {
    console.log(await doSomethingAsync())
  }
  
  console.log('Before')
  doSomething()
  console.log('After')



  


