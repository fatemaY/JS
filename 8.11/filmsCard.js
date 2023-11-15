const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        genre: "Drama",
        director: "Frank Darabont",
        releaseYear: 1994,
        rating: 9.3,
        votes: 2345890,
        cover: "https://m.media-amazon.com/images/I/51rXi2SXCXL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 2,
        title: "The Godfather",
        genre: "Crime, Drama",
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        rating: 9.2,
        votes: 1620360,
        cover: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        id: 3,
        title: "The Godfather: Part II",
        genre: "Crime, Drama",
        director: "Francis Ford Coppola",
        releaseYear: 1974,
        rating: 9.0,
        votes: 1133175,
        cover: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        id: 4,
        title: "The Dark Knight",
        genre: "Action, Crime, Drama",
        director: "Christopher Nolan",
        releaseYear: 2008,
        rating: 9.0,
        votes: 2303232,
        cover: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
    },
    {
        id: 5,
        title: "12 Angry Men",
        genre: "Crime, Drama",
        director: "Sidney Lumet",
        releaseYear: 1957,
        rating: 9.0,
        votes: 689845,
        cover: "https://ih1.redbubble.net/image.1856219220.0238/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    }
];

const movieContainer = document.getElementById("movieContainer");

movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    
    const movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.title;

    const movieGenre = document.createElement("p");
    movieGenre.textContent = `Genre: ${movie.genre}`;

    const movieDirector = document.createElement("p");
    movieDirector.textContent = `Director: ${movie.director}`;

    const movieRating = document.createElement("p");
    movieRating.textContent = `Rating: ${movie.rating}`;

    const movieCover = document.createElement("img");
    movieCover.className = "movie-cover";
    movieCover.src = movie.cover;
    movieCover.style.width= "100%";
    movieCover.style.height= "300px";
    movieCover.style.border= "1px solid #ddd";
    movieCover.style.borderRadius= "5px";
    movieCover.style.marginBottom= "10px";

    movieCard.style.width= "500px";
    movieCard.style.height= "600px";
    movieCard.style.background = "#ffffff";
    movieCard.style.borderRadius= "5px";
    movieCard.style.border= "1px solid #ddd";
    movieCard.style.textAlign= "center";
    movieCard.style.padding= "10px";
    movieCard.style.display= "inliine-block";
    movieCard.style.margin= "25px";
   


    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieGenre);
    movieCard.appendChild(movieDirector);
    movieCard.appendChild(movieRating);
    movieCard.appendChild(movieCover);

    movieContainer.appendChild(movieCard);
});
// export { movies };
