const wordsArray = ['banana', 'apple', 'orange'];
const mixedArray = ['hello', 'world', 42];



const makeAllCaps = (words) => {
	return new Promise((resolve, reject) => {
        const capitalizedWords = words.map(word => {
            if (typeof word === 'string') {
                return word.toUpperCase();
            } else {
                reject('Array contains non-string elements');
            }
        });
        resolve(capitalizedWords);
    });
};

makeAllCaps(mixedArray)
	.then((words) => {
		console.log(words);
        const sortWords= words.sort();
        console.log(sortWords);
	})
	.catch(() => {
		console.log(':( The Array contains non-string elements');
	});
    makeAllCaps(wordsArray)
	.then((words) => {
		console.log(words);
        const sortWords= words.sort();
        console.log(sortWords);
	})
	.catch(() => {
		console.log(':( The Array contains non-string elements');
	});
 
