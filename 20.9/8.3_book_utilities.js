const book1 ={
    bookName :"appleSeeds",
    authorName : "shhady",
    publishingYear : "1/09/2023",
    pageCount : 180
}
const book2 ={
    bookName :"Student",
    authorName : "Fatema",
    publishingYear : "1/09/2023",
    pageCount : 180,
    publisher: { name: 'Joun', location: 'London' }
}
const bookUtils = {
    getFirstPublished: function(book1, book2) {
        if (book1.publishingYear < book2.publishingYear) {
           console.log(" book1: " + book1.bookName + " Published first. "); 
        } 
        if (book1.publishingYear < book2.publishingYear) {
            console.log(" book2: " + book2.bookName + " Published first. ");         
        }
        else
        console.log(" book1: " + book1.bookName + " AND book2: " + book2.bookName + " have published in the same year :" ); 

    },
    setNewEdition: function(book , editionYear) {
        book.latestEdition=editionYear;
        console.log(" Book's edion year is : " + book.latestEdition );
    },
    setLanguage: function(book , language ){
        book.language= language;
        console.log(" Book's new language is : " + book.language );

    },
    setTranslation: function (book, language, translator) {
        book.translation = {
          language: language,
          translator: translator
        };
        console.log(" Book's Translator is: " + book.translation.translator + " AND Book's translation's language is: " + book.translation.language );
    },
    setPublisher: function(book, name, location){
        book.publisher = {
            name: name,
            location: location
        };
        console.log(" Book's publisher is: " + book.publisher.name + " that located in: " + book.publisher.location );
    },
    isSamePublisher: function(book1,book2){
        if(book1.publisher &&
            book2.publisher &&
            book1.publisher.name===book2.publisher.name && book1.publisher.location=== book1.publisher.location){
            console.log("The two books are the same!")
        }
        else{
            console.log("The two books are not the same!")

        }
    }
};

bookUtils.getFirstPublished(book1, book2);
bookUtils.setNewEdition(book1, 2000);
bookUtils.setLanguage(book1,"English");
bookUtils.setTranslation(book1,"English","Elad");
bookUtils.setPublisher(book1, "Tom", "London");
bookUtils.isSamePublisher(book1,book2);
console.log(book1);
