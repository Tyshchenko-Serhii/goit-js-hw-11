import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const myAPIkey = '32172730-28f23dbed0d71f248217882d5';
const perPages = 40;

const fetchPictures = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}?key=${myAPIkey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPages}&page=${page}`
  );
  return response.data;
};

export default fetchPictures;
