function findFirstDuplicate(arr) {
  // type your code here

  //Set object does not allow duplicates so if you add a number to set that exit it would fail
  const uniques = new Set()

  for (let i = 0; i < arr.length; i++){
    if (uniques.has(arr[i])) {
      return arr[i];
    }
    uniques.add(arr[i])
  }

  return -1
}


// const uniques = new Set()

// for (const value of arr){
//   if (uniques.has(value)) {
//     return value;
//   }
//   uniques.add(value)
// }

// return -1
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file

//1. Loop through each item in array
  // 2. Hold value of the loop and compare to against it

// And a written explanation of your solution
