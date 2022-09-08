const prompt = require('prompt-sync')()

let N = +prompt('sonlar toplami')
let math_min = 999
let math_max = -999

// let i = prompt('I sonlar toplami :')
for (let i = 1; i <= N; i++) {
    let A = prompt('A burchakni kiriting :')
    let B = prompt('B burchakni kiriting :')
    if (A < math_min) {
        math_min = A
    }
    if (A > math_max) {
        math_max = A
    }
    if (B < math_min) {
        math_min = B
    }
    if (B > math_max) {
        math_max = B
    }
}
