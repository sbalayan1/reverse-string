function reverseString(str) {
  let i = str.length - 1, reversedString = []
  while (i>=0) {
    reversedString.push(str[i])
    i--
  }

  return reversedString.join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
