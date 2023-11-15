const numSiblings =prompt('How many siblings do you have?');
console.log(numSiblings);

// switch (numSiblings) {
//     case (numSiblings == 1):
//       console.log('1 sibling!');
//     case numSiblings > 1:
//       console.log('More than 1 sibling');
//       break;
//     default:
//       console.log('No siblings');
//   }
  
if (numSiblings === 1) {
    console.log('1 sibling!');
  } else if (numSiblings > 1) {
    console.log('More than 1 sibling');
  } else {
    console.log('No siblings');
  }