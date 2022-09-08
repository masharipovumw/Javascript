const prompt = require('prompt-sync')()

// let A = prompt('A soni:')
// let B = prompt('B soni:')

// function formula(A, B) {
//      console.log( 7*A - B**5 / (A-B))
// }
//  formula(A,B)

// let A = +prompt('A soni')
// let B = +prompt('B soni')
// let C = +prompt('C soni')

// function powerA234(a) {
//     console.log(a ** 2);

//     console.log(a ** 3);

//     console.log(a ** 4);
// }

// console.log('A qiymatlari');
// powerA234(A)

// console.log('B qiymatlari');
// powerA234(B)

// console.log('C qiymatlari');
// powerA234(C)

// let A = +prompt('A soni :')
// let B = +prompt('B soni :')

// function triangle(A, B) {

//     console.log('perimetri')
//     console.log((A *= 2) + (B *= 2))

//     console.log('yuzasi')
//     console.log(A*B);
// }
// triangle(A,B)

// let A = +prompt('A soni :')
// let B = +prompt('B soni :')
// let C = +prompt('C soni :')
// let D = +prompt('D soni :')

// function Mean(a, b) {
//     console.log('arifmetigi');
//     console.log((a + b) / 2)
//     console.log('geometrigi');
//     console.log((a * b) ** (1 / 2))
// }
// Mean(A, B)
// Mean(C, D)
// Mean(A, D)
// Mean(C, A)
// Mean(B, C)
// Mean(B, D)

// let N = prompt('ixtiyoriy sonni kiriting :')
// let I = null

// for (let i = 1; i <= N; i++) {
//     let x = prompt('sonlar toplanini kiriting :')
//     I++
// }
// console.log(`${I} son kiritilgan`);

// function price(B, M, nds) {
//     console.log(B * M * (1 + nds))
// }
// price(450, 12, 0.15)

// let L = prompt('yoqilgi miqdori tanla :')

// function fuel(L) {
//     if (L >= 1000) {
//         console.log('yashil')
//     }
//     if (L >= 500) {
//         console.log('sariq')
//     }
//     if (L < 1) {
//         console.log('qizil')
//     }
// }
// fuel(L)

// let N = prompt('sonni kiriting')
// let i = 1

// function nex(N) {
//     while (i < N) {

//         console.log(1+N)
//     }
// }
// nex(N)

// let o = prompt('o : ')
// let n = prompt('n : soz kiriting : ')

// function Arit(n, o) {
//     if (o === 'double') {
//         n *= 2
//         console.log(n);
//     }
//     if (o === 'invert') {
//         n *= -1
//         console.log(n);
//     }
//     if (o === 'next') {
//         n = n+ 1
//         console.log(n);
//     }
//     if (o === 'prev') {
//         n -= 1
//         console.log(n);
//     }
// }
// Arit(o,n)

let a = prompt('a soni')
let b = prompt('b soni')
let c = a + b

function count(a, b, c) {
    if (c === 10) {
        console.log('true')
    } else if (c < 10) {
        console.log('false')
    }
}
count(a, b, c)
