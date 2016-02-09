import querystring from 'querystring';

const API_HOST = 'http://api.giphy.com/v1/gifs';
const API_KEY = 'dc6zaTOxFJmzC';

const search = async (q, params) => {
  return await get('/search', { q, ...params });
};

const get = async (endpoint, params) => {
  const query = querystring.stringify(params);
  try {
    const response = await fetch(`${API_HOST}${endpoint}?${query}&api_key=${API_KEY}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default {
  search,
  get
};
