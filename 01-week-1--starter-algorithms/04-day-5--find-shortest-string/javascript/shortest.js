function findShortestString(arr) {

 
    let shortest = arr[0]

    for(let i = 0; i < arr.length; i++){
        if (arr[i].length < shortest.length){
            shortest = arr[i]
        }
    }

    console.log(shortest)
    return shortest
}

console.log(findShortestString(['aaa', 'a', 'bb', 'ccc']))


/*
1. Iterate through each element in array => i...arr.length
2. initialize a variable called shortest which holds shortest ele assign it to value i
    3. Compare i with i + 1
        if arr[i].length is greather arr[i + 1].length then assign shortest to arr[i+1]
4. return value of shortest
*/

// Input: ['aaa', 'a', 'bb', 'ccc']
// Output: 'a'

// Input: ['cat', 'hi', 'dog', 'an']
// Output: 'hi'

// Input: ['flower', 'juniper', 'lily', 'dandelion']
// Output: 'lily'

