// // function getSum(arr1, arr2){
// //     const sum = 0;
// //     for (let i=0; i < arr1.length; i++){
// //     sum += arr1[i];
// //     }
// //     for (let i=0; i < arr2.length; i++){
// //     sum += arr2[i];
// //     }
// //     }
// //     getSum([1,2,3][5,66,23]);

//     (1)
//     const sum = 0; ===> let sum=0; // sum is be updated inside the loops to
//     return sum; //return statement was added to the getSum function to ensure it returns the computed sum.
//     getSum([1,2,3],[5,66,23]); // we have to use commas to separate inputs.

    function getSum(arr1, arr2) {
        let sum = 0;
      
        for (let i = 0; i < arr1.length; i++) {
          sum += arr1[i];
        }
      
        for (let i = 0; i < arr2.length; i++) {
          sum += arr2[i];
        }
      
        return sum; // Added a return statement to return the computed sum
      }
      
      const result = getSum([1, 2, 3], [5, 66, 23]); // Fixed the input arrays by using commas to separate them
      console.log(result);