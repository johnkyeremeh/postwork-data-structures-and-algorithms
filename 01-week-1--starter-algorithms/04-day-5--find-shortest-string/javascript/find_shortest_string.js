function findShortestString(arr) {

  let shortest = arr[0]

  for (i = 0; i < arr.length - 1;  i++){
    if (arr[i].length < shortest.length){
      shortest  = arr[i];
    }
  }
  console.log("output array", arr)
  return arr[0]

  /*

  for (i = 0; i < arr.length - 1;  i++){
    let shortest = i
    for (j = i+1; j < arr.length; j++){
      if (arr[j].length < arr[shortest].length) {
        shortest = j
      }
    }

        let temp = arr[i]
        arr[i] = arr[shortest]
        arr[shortest] = temp

  }
  console.log("output", arr)
  return arr[0]



  */
}






if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
