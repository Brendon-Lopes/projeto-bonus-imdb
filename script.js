const KEY = 'k_mye57d2o';

const burgerBtn = document.querySelector('.burger-icon');

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const fetchAPI = async (genres, count) => {
  try {
    const URL = `https://imdb-api.com/API/AdvancedSearch/${KEY}/?genres=${genres}&count=${count}`;
    const response = await fetch(URL, requestOptions);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('change');
})
