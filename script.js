const KEY1 = 'k_mye57d2o';
// Fazer função para alternar entre as chaves ou trocar manualmente?
// const KEY2 = 'k_24fzarfk';

// const KEY3 = 'k_xj52n88c';

const burgerBtn = document.querySelector('.burger-icon');

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const fetchAPI = async (groups, genres) => {
  try {
    const URL = `https://imdb-api.com/API/AdvancedSearch/${KEY1}/?genres=${genres}&groups=${groups}`;
    const response = await fetch(URL, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// imDbId: "tt1375666" - Exemplo ID do filme;
// Acessar "link": "https://www.imdb.com/video/vi2959588889" no mesmo objeto;
const fetchAPITrailer = async (filme) => {
  try {
    const URLTRAILER = `https://imdb-api.com/en/API/Trailer/k_24fzarfk/${filme}`;
    const response = await fetch(URLTRAILER, requestOptions);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('change');
})

const displayItems = (array) => {
  array.forEach((element, index) => {
    const movieSection = document.querySelector('#movies-section');
    const newSection = document.createElement('section');
    newSection.className = 'section movie-section';

    const image = document.createElement('img');
    image.className = 'movie-pic';
    image.src = element.image;
    image.alt = `${element.title} picture`;

    const movieName = document.createElement('h2');
    movieName.className = 'title';
    movieName.innerText = `${index+1}. ${element.title}`;

    const rating = document.createElement('h3');
    rating.className = 'imdb';
    rating.innerText = `IMDB: ${element.imDbRating}`;

    const synopsis = document.createElement('p');
    synopsis.className = 'plot';
    synopsis.innerText = element.plot;

    newSection.appendChild(image);
    newSection.appendChild(movieName);
    newSection.appendChild(rating);
    newSection.appendChild(synopsis);
    movieSection.appendChild(newSection);
  });

}

const top10 = async () => {
  const movieSection = document.querySelector('#movies-section');
  movieSection.innerHTML = '<h2 class="title-movies">Top 10</h2>';
  const { results } = await fetchAPI('top_100');
  const sortedArray = results.sort((a, b) => b.imDbRating - a.imDbRating);
  const top = sortedArray.filter((element, index) => {
    if (index <= 9) return element;
  })
  displayItems(top);
} 

const clearMovies = () => {
  const movieSection = document.querySelector('#movies-section');
  movieSection.innerHTML = '';
}

const filterResults = async (event) => {
  clearMovies();
  const genre = event.target.innerText;
  const movieSection = document.querySelector('#movies-section');
  const title = `The best of ${genre}`;
  movieSection.innerHTML = `<h2 class="title-movies">${title}</h2>`;
  const { results } = await fetchAPI( 'top_250', genre);
  const newArray = results.map(( {id, imDbRating, image, plot, title} ) => ({id, imDbRating, image, plot, title}));
  const sortedArray = newArray.sort((a, b) => b.imDbRating - a.imDbRating);
  displayItems(sortedArray);
}

const allItems = document.querySelector('#genre-list');
allItems.addEventListener('click', filterResults);

window.onload = async () => {
  await top10();
}