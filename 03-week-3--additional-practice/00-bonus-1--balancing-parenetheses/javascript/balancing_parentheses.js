function balancingParentheses(string) {
  // type your code here

  let countA = 0
  let countB = 0 

  for (let i = 0 ; i < string.length ; i++){
    if (string[i] === `(`){
      countA++
      continue
    }
    
    if (countA > 0){
      countA-- 
    } else {
      countB++
    }
  }


    return countA + countB
  


}

/*
iterate through array and count the number of ( and )
if count ( is greather than count )
  return count ( - )
else count ) is greather than count (
  return count ) - ()
)
*/

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
