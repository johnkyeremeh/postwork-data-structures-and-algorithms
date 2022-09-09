function selectionSort(arr) {
  // type your code here

  //[10, 4, 3, 2, 1, 5]
  console.log("original value", arr)
  for (i = 0; i < arr.length - 1; i++){
    let minIndex = i
    for (j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[minIndex]){      
          minIndex = j            
      }
    }
    let temp = arr[i]             
    arr[i] = arr[minIndex]        
    arr[minIndex] = temp 
  }

  console.log("updated", arr)
  return arr

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([10, 4, 3, 2, 1, 5]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution


//Iterate through each element 
  //create a min variable to hold min element and set it to
  //compare element i with element element[i + 1]
  //if elem > i + 1
  // //create a variable to store as placeholder
     //set the first element value to the value of the second element 
     //set the second element index equal to the value of the first elmenent


     
