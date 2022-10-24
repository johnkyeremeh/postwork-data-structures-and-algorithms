function findFirstDuplicate(arr) {

    let unique = []

    for (let i = 0; i < arr.length ; i++){
        if (unique.includes(arr[i])){
            return arr[i]
        } else {
            unique.push(arr[i])
        }
  
    }
    return - 1

}

console.log(findFirstDuplicate([1,2,3,4,5]))


// iterate through each value in array
    // if value does not exist in put in new array of numbers 
    // if value does exist then return that value as first duplicate
    // if no values are found return -1 



// Input: [2, 1, 3, 3, 2]
// Output: 3

// Input: [1, 2, 3, 4, 4]
// Output: 4

// Input: [1, 2, 3, 4]
// Output: -1



