// function getSumOfEven(arr){
//     return arr[2] + arr[4] + arr[6] + arr[8] +
//     arr[10];
//     }
//     getSumOfEven([1,2,3,4,5,6,7,8,9,10]);

// 1- The original code attempted to directly access even-indexed elements of the array using [2], [4], [6], [8], and [10]. However, JavaScript arrays are zero-indexed, so those indices were incorrect.
// 2- The corrected code properly iterates through the array and accumulates the sum of even-indexed elements.

function getSumOfEven(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(i%2==1){
            sum += arr[i];
        }
    }
    return sum;

}

const result = getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);