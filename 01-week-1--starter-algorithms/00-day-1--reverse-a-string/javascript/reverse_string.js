

function reverseString(str) {
  // type your code here

  let reversedString = ""

  for (let i = 0; i < str.length; i++){
    reversedString = str[i] + reversedString
  }

  return reversedString
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


//Input     Output
//-----------------
// hi          ih
// john        nhoj


// create a var called new_word
// Iterate each char in the given string 
    //for each character move to new_word


