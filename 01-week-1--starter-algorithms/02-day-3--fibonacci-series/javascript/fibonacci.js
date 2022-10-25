function fibonacci(num) {
  // type your code here

  if (num < 2){
    return num
  }

  return fibonacci(num - 1) + fibonacci(num - 2)
}

 

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file

// iterates through an array with Num elements where Num is the length of the array
// create new index of array with each iteration equal to two indexes and 1 index
// And a written explanation of your solution

