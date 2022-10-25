function fibonacci(n) {
  // type your code here

  if (n < 2){
    return n
  }


  return fibonacci(n - 1) + fibonacci(n-2)




  // let fib = [0,1]

  // for(let i = 2; i <= n; i++){
  //   fib[i] = fib[i - 2] + fib[i-1]
  // }
 
  // return fib[n]

  // fibonacci(4)
  //    fibonacci(3) + fib(2)
  //     fibonacci(2) + 1 + 1
  //    +3
  //     

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
// And a written explanation of your solution
