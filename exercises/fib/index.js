// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let begin = [0,1]
    for (let i = 1; i < n; i++) {
        let j = begin.slice(-1)[0] + begin.slice(-2)[0]
        begin.push(j)
    }
    return begin.slice(-1)[0]
}

module.exports = fib;
