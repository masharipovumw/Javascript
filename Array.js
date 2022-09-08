const prompt = require('prompt-sync')()
// function array(n) {
//     for (let i = 1; i < n; i += 2) {
//         console.log(i)
//     }
// }
// array(10)

// let power = []
// function Array1(n) {
//     for (let i = 0; i < n; i++) {
//         power.push(2 ** i)
//     }
//     console.log(power)
// }
// Array1(5)

// let pg = []
// function Arr2(n, a, d) {
//     for (let i = 1; i < n; i++) {
//         a = a + d
//         pg.push(a)
//     }
//     console.log(pg);
// }
// Arr2(5, 1, 3)

// let ar = []

// function arr3(k) {
//     for (let i = 0; 1 < k; i++){

//     }
// }

// let Mass = []
// let Mass1 = []

// function ArrReverse(N) {
//     for (let i = 0; i <= N; i++) {
//         if (i % 2) {
//             Mass.push(i)
//         }
//         if (i % 3) {
//             Mass1.push(i)
//         }
//     }

//     console.log(`toq son massivi ${[Mass]}`)
//     console.log(`juft son massivi ${[Mass1]}`)
// }
// ArrReverse(5)

// let Arr = []

// function Massive(N) {
//     for (let i = 1; i <= N; i++) {
//         Arr.push(i)
//     }
//     console.log(Arr.reverse())
// }
// Massive(4)

// let decrement = []
// let counter = 0

// function Decrement (N) {
//     for (let i = 0; i <= N; i++) {

//         if (i % 2) {
//             decrement.push(i)
//             counter = counter + 1
//         }
//     }
//     console.log(counter);
//     console.log(decrement.reverse());
// }

// Decrement(10)

// let decrement = []
// let counter = 0

// function Decrement (N) {
//     for (let i = 0; i <= N; i++) {

//         if (i / 2) {
//             decrement.push(i)
//             counter = counter + 1
//         }
//     }
//     console.log(counter);
//     console.log(decrement.reverse());
// }

// Decrement(10)

// function Fibo(n, a, b) {
//     let m = [a, b, a + b]

//     for (let i = 3; i < n; i++){
//         let last = m.length - 1
//         let x = m[last] * 2
//         m.push(x)

//     }
//     console.log(m);
// }

// Fibo(10, 2, 3)

// function Odds(m) {
//     for (let i = m.length - 1; i >= 0; i--){
//         if (m[i] % 2 == 0) {
//             console.log(m[i]);
//         }
//     }
// }
// Odds([4, 5, 7, 8, 6, 9])

function masala18(m) {
    let x = m[m.length - 1]

    for (let i = 0; i < m.length; i++) {
        if (x > m[i]) {
            console.log(m[1])
            return
        }
    }
    console.log(0)
}
masala18([9, 8, 6, 13, 8])

function masala19(m) {
    for (let i = m.length - 1; i >= 0; i--) {
        let brinchi = m[0]
        let xozirgi = m[i]
        let oxirgi = m[m.length - 1]

        if (brinchi < xozirgi && xozirgi < oxirgi) {
            console.log(i)
            return
        }
    }
    console.log(0)
}
masala19([12, 64, 78, 82, 91, 10, 99])



function masala20(m, k, l) {
    let s = 0
    for (let i = m.length - 1; i >= 0; i--){
        
    }
}