// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(str1, str2) {
    let str3 = str1.replace(/[^\w]/g,"").toLowerCase();
    let str4 = str2.replace(/[^\w]/g,"").toLowerCase();
    let a = str3.split('').sort().join('');
    let b = str4.split('').sort().join('');
    return a === b
}

module.exports = anagrams;
