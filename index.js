function isPalindrome(word) {
  // Write your algorithm here
  for (startIndex = 0; startIndex < word.length / 2; startIndex++) {
    let wordLastIndex = word.length - 1;
    let endIndex = wordLastIndex - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
   1.loop through character in string working our way from the start and end points of the string towards the center of the string.
  2.  loop proceeds until the start and end points of the string ,
  returns true when loop reaches center of string 
  3.  loop stops and returns false if the start index and end index are not equal
   
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
