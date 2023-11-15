function removeDuplicates(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  
  var inputArray = [1, 2, 2, 3, 4, 4, 5];
  var resultArray = removeDuplicates(inputArray);
  console.log(resultArray);
  