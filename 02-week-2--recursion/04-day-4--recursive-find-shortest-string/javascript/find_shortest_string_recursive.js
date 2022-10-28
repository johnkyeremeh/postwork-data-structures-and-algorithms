function findShortestStringRecursive(arr) {
  // type your code here
  console.log("tes t result")
  if (arr.length === 1) {
    return arr[0];
  }

  console.log("tes t result")
  const result = findShortestStringRecursive(arr.slice(1));
  console.log("after esult")
  return arr[0].length <= result.length ? arr[0] : result;
}


// (['flower', 'juniper', 'lily', 'dandelion'])

// Base: findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion'])
// f('juniper', 'lily', 'dandelion'
// f('lily', 'dandelion']
// f(dandelion'] 
// Dand
//





//find the min of each iteration 
  // assign min as arr[0]          //first iteration flower 
  // let result = findShortestStringRecursive(arr.slice(1))

    // if array[i+1] < array[min]  
    
    //flower
        // min is now array[i]
if (require.main === module) {
  // add your own tests in here
  
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

 
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
