function findShortestStringRecursive(arr) {
  // type your code here

   
  if (arr.length === 1){
    return arr[0]
  }

  let min = arr[0]
  let result = findShortestStringRecursive(arr.slice(1)) 

  if (min.length <= result.length){
      return min
  } else {
    return result 
  }

}

if (require.main === module) {
  // add your own tests in here
  
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

 
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
