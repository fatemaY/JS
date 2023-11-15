const book1 ={
    bookName :"appleSeeds",
    authorName : "shhady",
    publishingYear : "1/09/2023",
    pageCount : 180
}
console.log(book1.authorName);

function detBook(book){
  console.log (" The book " + book.bookName + " was written by " + book.authorName + " in the year " + book.publishingYear + ".");
}
detBook(book1);