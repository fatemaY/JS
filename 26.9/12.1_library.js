const library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

    function displayReadBooks(library) {
        const readBooks = library.filter(book => {
            return book.readingStatus === true;

        });
        readBooks.forEach(book => {
            console.log(`Book: ${book.title} ,Author: ${book.author} ,Reading Status: ${book.readingStatus ? "Read" : "Not Read"}`);

          })
    }

displayReadBooks(library);