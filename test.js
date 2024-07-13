// 'use strict'

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

let myArray = [1, 2, 3]
console.log(myArray)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)

console.log(myArray[2])
console.log(myArray[1])
console.log(myArray[0])
console.log(myArray2[0])
console.log(myArray2[1])
console.log(myArray2[2])
console.log(myArray.length)

myArray2.pop()
const removedElement = myArray2.pop()
const removedElement2 = myArray2.pop()
console.log(removedElement)
console.log(removedElement2)
console.log(myArray2.length)