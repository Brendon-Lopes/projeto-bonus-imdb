const fetchAPI = async (groups, genres) => {
  try {
    const URL = `https://imdb-api.com/API/AdvancedSearch/${KEY1}/?genres=${genres}&groups=${groups}`;
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
    const link = data.link;
    return link;
  } catch (error) {
    console.log(error);
  }
}
