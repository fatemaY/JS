document.getElementById('movieForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const movieInput = document.getElementById('movieInput').value;
  
    // Call function to fetch movie data
    fetchMovieData(movieInput);
  });
  
  async function fetchMovieData(movieName) {
    const apiKey = '199e903f';
    const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=199e903f`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.Response === 'True') {
        displayMovieInfo(data);
      } else {
        console.error('Movie not found');
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  }
  
  function displayMovieInfo(movieData) {
    const movieInfoContainer = document.getElementById('movieInfo');
    movieInfoContainer.innerHTML = ''; // Clear previous movie information
  
    const poster = document.createElement('img');
    poster.src = movieData.Poster;
    poster.alt = 'Movie Poster';
    movieInfoContainer.appendChild(poster);
  
    const title = document.createElement('h2');
    title.textContent = movieData.Title;
    movieInfoContainer.appendChild(title);
  
    const genre = document.createElement('p');
    genre.textContent = `Genre: ${movieData.Genre}`;
    movieInfoContainer.appendChild(genre);
  
    const year = document.createElement('p');
    year.textContent = `Year: ${movieData.Year}`;
    movieInfoContainer.appendChild(year);
  
    const plot = document.createElement('p');
    plot.textContent = `Plot: ${movieData.Plot}`;
    movieInfoContainer.appendChild(plot);
  
    const director = document.createElement('p');
    director.textContent = `Director: ${movieData.Director}`;
    movieInfoContainer.appendChild(director);
  
    const actors = document.createElement('p');
    actors.textContent = `Actors: ${movieData.Actors}`;
    movieInfoContainer.appendChild(actors);
  
    const ratings = document.createElement('p');
    ratings.textContent = `Ratings: IMDB - ${movieData.Ratings[0].Value}, Rotten Tomatoes - ${movieData.Ratings[1]?.Value || 'N/A'}, Metacritic - ${movieData.Ratings[2]?.Value || 'N/A'}`;
    movieInfoContainer.appendChild(ratings);
  
    // Show the movie information container
    movieInfoContainer.classList.remove('hidden');
  }
  