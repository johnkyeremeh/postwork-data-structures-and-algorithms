function selectionSort(arr) {

  for (let i = 0 ; i < arr.length ; i++){
    let min = i 
    for (let j = i+1 ; j < arr.length ; j++){
      if (arr[j] < arr[min]){
        min = j
      }
    }

    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }


  return arr
}

//loop thrugh each variable with 
// loop through eac i + 1 with j
// if arr[j] < arr[min] then min = j   4 > 10 = true 
    //switch arr[i] with min           min = 1
      //init a temp variable equal to arr[i]    temp  = arr[0] = 10 
      //arr[i] = arr[min]                        arr[0] = 4
      //arr[min] = temp                        arr[1] =  10

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

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


     
