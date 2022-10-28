
function findFirstDuplicate(arr){
    
    let unique = []

    for (i = 0; i < arr.length ; i++){
        if (unique.includes(arr[i])) {
            return arr[i]
        } else {
            unique.unshift(arr[i])
        }
    }
}


// console.log(findFirstDuplicate([1,2,3,4,4]))

//iterate through each element 

    //if element is not in array then add to arr
    // if element is in arr return arr 









// function findFirstDuplicate(arr) {


//     let unique = []

//     for(let i = 0; i < arr.length ; i++){
//         if (unique.includes(arr[i])){
//             return arr[i]
//         } 
//             unique.push(arr[i])
    
       
//     }

//     return -1 

// }

console.log(findFirstDuplicate([1,2,3,4,4]))



//iterate through each ele 
// if arr[i] is in newarray return array[i]
// else add arr[i] to new array



