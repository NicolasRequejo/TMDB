const axios = require("axios");

exports.movies = (req, res) => {
  axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=63aa754d735da83b25e4202e55b48f0d&language=es"
    )
    .then((data) => res.status(200).send(data.data.results));
};

exports.serie = (req, res) => {
  axios
    .get(
      "https://api.themoviedb.org/3/discover/tv?api_key=63aa754d735da83b25e4202e55b48f0d&language=es"
    )
    .then((data) => res.status(200).send(data.data.results));
};
