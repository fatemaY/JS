const greaterThan = (num) => {
	return new Promise((resolve, reject) => {
			if (num > 10) {
				resolve();
			}
			else {
				reject();
			}
	});
};
greaterThan(5)
	.then(() => {
		console.log('YAY THE NUMBER IS GREATYER THAN 10!!!!');
	})
	.catch(() => {
		console.log(':( NO IT IS LESS THAN 10');
	});