function selectionSortRecursive(arr) {
  // type your code here

  if (arr.length === 0){
    return []
  }

  const min = Math.min(...arr)          //-1, 2, 3,5
  const idx = arr.indexOf(min)          // 1, 2, 0 ,0
  arr.splice(idx, 1)                    //[3,5,2]  [3,5], [5], []

  const result =  selectionSortRecursive(arr)  //selection([3,5,2]) => selection[3,5] => selection[5] => selection[5]
  result.unshift(min)
  return result 






}


/*
Find Min value of array => -1 
Add min value to front of array 

Recursve through each element


*/

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
