const array = ["Hello", "Good Day","Your Welcome", "hotdog", "hamburgers"];
function countChars(arr){
    let mostCommonLetter = "";
    let maxCount = 0;    
    const countarr = {};
        for(const str of arr){
        if(str){
            const lowerStr = str.toLowerCase().replace(/[^a-z]/g, ''); 
            for(const letter of lowerStr){
                if(countarr[letter]){
                    countarr[letter]++;
                }
                else {
                    countarr[letter] = 1;
                }
                if (countarr[letter] > maxCount) {
                    mostCommonLetter = letter;
                    maxCount = countarr[letter];
                  }
            
            }


                // if(countarr[char]> maxCount){
                // maxCount=countarr[char];
                // }
            }
        }
               
         return { countarr, mostCommonLetter };
 
     }
        // console.log(countarr);
//    for (let i=0 ; i<27 ;i++){
//     if(countarr[i]!=0){

//     }
//    }

const result = countChars(array);
console.log(result.countarr);
console.log("Most Common Letter:", result.mostCommonLetter);
  