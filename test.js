// 'use strict'

// const { compileFunction } = require("vm")

// const aB= {
//     a: 3+2,
//     b: 2+2    
// }
// console.log(aB)

// A = 123

// function A() {
//     console.log('A')
// }  

// const myCity = {
//     city: "Kyiv",
//     cityGreeting: function () {
//         console.log("Dobryi vechir!")
//     }
// }

// myCity.cityGreeting()


// function myFn() {
//     let b 
//     a = a + 1
//     c = a + b
//     return c
// }

// myFn(2, 3) 

// console.log(myFn)

// let a 
// let b 

// function myFn(){
//     let b 
//     a = true 
//     b = 10
//     console.log(b) 
// }

// myFn()
// console.log(a)
// console.log(b)

// const a = 5

// function myFn(){
//     function innerFn(){
//         console.log(a)
//     }
//     innerFn()
// }

// asdfsadfsad

// const button = {
//     width: 200,
//     text: 'Buy'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }

// console.table(redButton)

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt,
// })

// const firstPost = {
//     id:1,
//     author: 'Stas',
// }

// // newPost(firstPost)
// console.log(newPost(firstPost))

// const fnWithError = () => {
//     throw new Error('Some error')
// }

// try {
//     fnWithError()
// } catch (error) {
//     console.error(error)
//     console.log(error.message)
// }

// console.log('Continue...')  

// 'abc';
// a = a +3;
// c = a + b;
// d = 'Good ' + 'evening';
// myFunction(c, d);
// console.log('Hey');

// function myFn(a) {
//     console.log(a);
// }
// const b = true;
// let c = 10;

// myFn(2+3)
// myFn(b)
// myFn(c = c + 1)
// myFn(c = c + 1);
// myFn(let d)

// let myArray = [1, 2, 3]
// console.log(myArray)

// const myArray2 = new Array(1, 2, 3)
// console.log(myArray2)

// console.log(myArray[2])
// console.log(myArray[1])
// console.log(myArray[0])
// console.log(myArray2[0])
// console.log(myArray2[1])
// console.log(myArray2[2])
// console.log(myArray.length)

// myArray2.pop()
// const removedElement = myArray2.pop()
// const removedElement2 = myArray2.pop()
// console.log(removedElement)
// console.log(removedElement2)
// console.log(myArray2.length)

// myArray2.unshift(true)
// myArray2.unshift('stas', '123')
// console.log(myArray2.length)
// console.log(myArray2)


// const myArray = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(myArray)

// myArray.forEach(el => {console.log(el * 2)})

// console.log(myArray)

// const myArray = [1, 2, 3]
// console.log(myArray)

// const newArray = myArray.map(el => {return el * 3})
// console.log(newArray)

// const userProfile = {
//     name: 'Stas',
//     commentQty: 22,
//     hasSignedAgreement: false,
// }

// const { name, commentQty } = userProfile
// const { hasSignedAgreement} = userProfile

// console.log(name)
// console.log(commentQty)

// const fruits = ['Apple', 'Banana']
// const [fruitOne, fruitTwo] = fruits
// console.log(fruitOne)
// console.log(fruitTwo)

// const userProfile = {
//     name: 'Stas',
//     commentQty: 22,
//     hasSignedAgreement: false,
// }

// const userInfo = ({ name, commentQty }) => {
//     if (!commentQty) {
//         return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commentQty} comments`
// }

// console.log(userInfo(userProfile))

// const months = 2

// switch (months) {
//     case 12:
//         console.log('Dec')
//         break
//     case 1: 
//         console.log('Jan')
//         break
//     case 2:
//         console.log('Feb')
//         break
//     default: 
//         console.log('Not winter months')
// }


// let value = 11
// console.log(value >= 0 ? value : -value)

// value = -5
// const res = value >= 0 ? value : -value
// console.log(res)

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// const myArray = ['first', 'second', 'third']
// myArray.forEach((element, index) => {
//     console.log(element, index)
// })


// let i = 0
// while (i < 5) {
//     console.log(i)
//     i++
// }

// let h = 0 

// do {
//     console.log(h)
//     h++
// } while (h<5)

const timerPromise = () =>
    new Promise((resolve, reject) =>
    setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}

asyncFn()