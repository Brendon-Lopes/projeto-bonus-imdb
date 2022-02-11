const KEY1 = 'k_mye57d2o';
// Fazer função para alternar entre as chaves ou trocar manualmente?
const KEY2 = 'k_24fzarfk';

const burgerBtn = document.querySelector('.burger-icon');

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const fetchAPI = async (genres, count) => {
  try {
    const URL = `https://imdb-api.com/API/AdvancedSearch/${KEY1}/?genres=${genres}&count=${count}`;
    const response = await fetch(URL, requestOptions);
    const data = await response.json();
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
