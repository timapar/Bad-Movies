const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

const API = axios.create({
  baseURL: `https://api.themoviedb.org/3`
});
// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

module.exports.getGenreList = () => {
  api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);
}
module.exports.getMovieListByGenre = (genre) => {
  api.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&with_genres=${genre}`);
}
