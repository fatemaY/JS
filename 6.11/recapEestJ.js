let movies = [
    {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 9.3,
    votes: 2345890,
    },
    {
    id: 2,
    title: "The Godfather",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    rating: 9.2,
    votes: 1620360,
    },
    {
    id: 3,
    title: "The Godfather: Part II",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1974,
    rating: 9.0,
    votes: 1133175,
    },
    {
    id: 4,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan",
    releaseYear: 2008,
    rating: 9.0,
    votes: 2303232,
    },
    {
    id: 5,
    title: "12 Angry Men",
    genre: "Crime, Drama",
    director: "Sidney Lumet",
    releaseYear: 1957,
    rating: 9.0,
    votes: 689845,
    },
   ];
// *********************Strings***********************************************
// ************************-1-************************


   function getMovieInitials(title) {
      const words = title.split(' ');
      let initials ='';
      for (const word of words) {
      if (word.length > 0) {
        initials += word[0].toUpperCase();
      }
    }
    return initials;
  }

  for (const movie of movies) {
    const initial = getMovieInitials(movie.title);
    console.log(initial); 
  }
// ************************-2-************************

  function splitGenres(genres) {
    return genres.split(", ");
  }
  
  const genresString = "Action, Adventure, Sci-Fi";
  const genresArray = splitGenres(genresString);
  console.log(genresArray);
  
//  **************************Arrow Functions-3***********************************************

const getTotalMovieLength = (movies) => {
    let totalLength = movies.reduce((total, movie) => total + movie.length, 0);
    return `Total movie length is `+ totalLength +  `minutes`;
  };
  
  console.log(getTotalMovieLength(movies));
  
// ***************************Array Methods**************************************************
// ************************-1-************************

function getMovieTitles(movies) {
    const titles = movies.map((movie) => movie.title);
    return titles;
}
const titles = getMovieTitles(movies);
console.log(titles);

// **********************-2-****************************
function getHighlyRatedMovies(minRating) {
    return movies.filter((movie) => movie.rating >= minRating);
  }
const highlyRatedMovies = getHighlyRatedMovies(9.1);
console.log(highlyRatedMovies);

// **********************-3-****************************

function calculateAverageRating(movies) {
    const totalRating = movies.reduce((accumulator, movie) => accumulator + movie.rating, 0);
    return totalRating / movies.length;
  }

console.log(calculateAverageRating(movies));


// **********************-4-****************************

function sortMoviesByVotesDescending(movies) {
    return movies.slice().sort((a, b) => b.votes - a.votes);
  }
console.log(sortMoviesByVotesDescending(movies));



//  **************************Objects**************************************************
// ****************Exercise 1: Creating the Movie Database
// ****************Exercise 2: Adding and Removing Ratings
// ****************Exercise 3: Searching Movies


const movieDatabase = {
    movies: [],

    addMovie: function (title) {
      const newMovie = {
        title: title,
        ratings: [],
        averageRating: 0,
      };
      this.movies.push(newMovie);
    },
  
    removeMovie: function (title) {
      const index = this.movies.findIndex((movie) => movie.title === title);
      if (index !== -1) {
        this.movies.splice(index, 1);
      }
    },

    addRating: function (title, rating) {
        const movie = this.movies.find((movie) => movie.title === title);
        if (movie) {
          movie.ratings.push(rating);
          movie.averageRating = calculateAverage(movie.ratings);

        }
      },

    removeRating: function (title, rating) {
        const movie = this.movies.find((movie) => movie.title === title);
        if (movie) {
          const index = movie.ratings.indexOf(rating);
          if (index !== -1) {
            movie.ratings.splice(index, 1);
            movie.averageRating = calculateAverage(movie.ratings);
          }
        }
      },
      searchMovie: function (string) {
        string = string.toLowerCase(); 
        return this.movies.filter((movie) => movie.title.toLowerCase().includes(string));
      },
  };

  function calculateAverage(ratings) {
    if (ratings.length === 0) {
      return 0;
    }
    const sum = ratings.reduce((total, r) => total + r, 0);
    return sum / ratings.length;
  }

  movieDatabase.addMovie("The Shawshank Redemption");
  movieDatabase.addMovie("The Godfather");
  movieDatabase.addMovie("The Dark Knight");
  movieDatabase.addMovie("Sindrella");
  movieDatabase.addMovie("MickeyMouse");
  movieDatabase.addRating("Sindrella", 9.3);
  movieDatabase.addRating("Sindrella", 9.4);
  movieDatabase.removeRating("Sindrella", 9.3);  
  movieDatabase.removeMovie("The Shawshank Redemption");
console.log("Movies in the database:", movieDatabase.movies);
console.log("Search results:", movieDatabase.searchMovie("the"))


