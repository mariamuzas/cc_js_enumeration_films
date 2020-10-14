const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return titles = this.films.map((film) => {
    return film.title
  });
};

Cinema.prototype.filmByTitle = function (filmtitle) {
  return film = this.films.find((film) => {
    return film.title === filmtitle;
    });
};

Cinema.prototype.filmsByGenre = function (genre) {
  return filmsOfGenre = this.films.filter((film) => {
    return genre === film.genre;
  });
};

module.exports = Cinema;
