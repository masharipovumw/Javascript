// Write the command to add the language "Go" to the end of the languages array.
// Change the difficulty to the value of 7.
// Using the delete keyword, write the command to remove the jokes key from the programming object.
// Write the command to add a new key called isFun and a value of true to the programming object.
// Using a loop, iterate through the languages array and console.log all of the languages.
// Using a loop, console.log all of the keys in the programming object.
// Using a loop, console.log all of the values in the programming object.

const { listenerCount } = require("prompt")

// let programming = {
//     languages: ['JavaScript', 'Python', 'Ruby'],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: 'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke',

//     add() {
//         this.languages.push('go')
//     },
//     caunt() {
//         this.difficulty = 7
//     },
//     addkey() {
//         this.isfun = true
//     },
//     delete() {
//         delete this.jokes
//     },
// }
// programming.add()
// programming.caunt()
// programming.addkey()
// programming.delete()
// let value = Object.values(programming.languages)
// let key = Object.keys(programming)
// console.log(programming);
// console.log(value);
// console.log(key);






let products = [
    {
        name: 'Coca Cola 1L',
        price: 8000,
        category: 'drink'
    },
    {
        name: 'Snikers',
        price: 5000,
        category: 'sweet'
    },
    {
        name: 'Coca Cola 0.5L',
        price: 5000,
        category: 'drink'
    },
    {
        name: 'Fanta 1.5L',
        price: 12000,
        category: 'drink'
    },
    {
        name: 'Chips',
        price: 1000,
        category: 'sweet'
    },
    {
        name: 'Humson',
        price: 3000,
        category: 'drink'
    },
    {
        name: 'Bounty',
        price: 7000,
        category: 'sweet'
    },
]

let price = products.filter(p => p.price <= 5000)
list.forEach(p => {
    
});