function fibonacci(num) {

    let numIndex = num 
 
    let sequence = [0, 1]


    for (let i = 2; i <= num; i++){
        sequence[i] = sequence[i - 2] + sequence[i  - 1]
    }

    return sequence[numIndex]

}

console.log(fibonacci(10) )



//iterate from 2 to number since 0, 1 are given
//next value is value - 2 + value - 1 added together

// Input: 0
// Output: 0

// Input: 2
// Output: 1

// Input: 10
// Output: 55

// 7
// Output: 8

//0, 1, 1, 2, 3, 5, 8.