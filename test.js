'use strict'

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

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id:1,
    autor: 'Stas',
}

newPost(firstPost)