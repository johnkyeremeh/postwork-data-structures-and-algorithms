
//Method 1
// function reverseString(str) {
//   // type your code here
//   let sorted = ""
//   for (let i = 0; i < str.length ; i++){
//     sorted = str[i] + sorted
//   }

//   return sorted
// }

//method 2 
function reverseString(str){

  let reverse = ""
  for (i = str.length - 1; i >= 0 ; i--){
    reverse += str[i]
  }

  return reverse
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

