// let request = new XMLHttpRequest();

// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// request.onload = function () {
//     let data = JSON.parse(this.response);
//     console.log(data)
//     if (request.status >= 200 && request.status < 400) {
//     // Log each movie's title
//         data.forEach(movie => {
//             console.log(`${movie.title} (${movie.release_date})`);
//         });
//     } else {
//         console.log('error');
//     }

//   }

// // Send request
// request.send();

// const request = fetch('https://ghibliapi.herokuapp.com/films');

const request = fetch('https://swapi.co/api/films');
const app = document.getElementById('app');
const movies = document.createElement('div');
movies.setAttribute('class', 'movies');
app.appendChild(movies);

request
  .then(data => data.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((movie) => {
      // console.log(data);
      // console.log(`${movie.title} (${movie.release_date})`);
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const title = document.createElement('h2');
      title.textContent = `${movie.title} (${movie.release_date})`;

      const director = document.createElement('p');
      director.textContent = `Directed by: ${movie.director}`;

      const desc = document.createElement('p');
      // movie.description = movie.description.substring(0, 300);
      desc.textContent = `${movie.description}...`;

      movies.appendChild(card);
      card.appendChild(title);
      card.appendChild(director);
      card.appendChild(desc);
    });
  })
  .catch((err) => {
    console.error(err);
  });

