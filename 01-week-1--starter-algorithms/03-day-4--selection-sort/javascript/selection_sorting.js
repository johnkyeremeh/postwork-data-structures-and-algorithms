function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++){
        let min = i  //1
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]){ // 2 <  
                min = j   //1
            }

            let temp = arr[i]  //temp = 
            arr[i] = arr[min]  //arr[0] = arr[1]  = -1
            arr[min] = temp   //arr[1] = 3
        }
    }
    return arr    
}







console.log(selectionSort([3, -1, 5, 2]) )



/*
Find out where the min is
    Start a loop with the goes from i...arr.length
        initialize the min = i
    Start a loop with the goes from j...arr.length where j=i+1
        If arr[j] < arr[i]
            min = j
        end 

Create a temp variable that holds value of arr[i]
temp = arr[i]
Set arr[i] = arr[min]
arr[min] = temp 


*/

