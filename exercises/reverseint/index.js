// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let result = ''
    let sign = Math.sign(n)
    let num = Math.abs(n)
    let numStr = num.toString()
    if (n === 0){
        return 0
    } else {
        for (let i = numStr.length-1; i >= 0; i--){ 
            result += numStr[i]
    }}
    return parseInt(result) * sign
}

module.exports = reverseInt;
