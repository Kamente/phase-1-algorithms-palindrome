
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;


function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("robot"));
console.log(isPalindrome("hello"));
// console.log(isPalindrome(prompt("String:")));    
