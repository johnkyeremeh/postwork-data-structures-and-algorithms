function fibonacci(num) {
  // type your code here

  // 0,1,1,2,3
  //2
  //fib[2] = 1
  //fib[4] = 3
  if (num <=1){
    return num;
  }
  
  const fib = [0, 1]

  for (let i = 2; i <= num; i++){
    fib[i] = fib[i - 2] + fib[i - 1]
  }
  //return the index of last digit of fib
  return fib[fib.length - 1]

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

