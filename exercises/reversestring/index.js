// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let newStr = [];
    for (let i = str.length-1; i >= 0; i--) {
        newStr.push(str[i])
    }
    return newStr.join().replace(/,/g,'')
}

module.exports = reverse;
