const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => {
    return film.title
  });
};

Cinema.prototype.filmByTitle = function (filmtitle) {
  return this.films.find((film) => {
    return film.title === filmtitle;
    });
};

Cinema.prototype.filmsByGenre = function (genre) {
  return this.films.filter((film) => {
    return genre === film.genre;
  });
};

Cinema.prototype.checkFilmsInYear = function (year) {
  return this.films.some((film) => {
    return film.year === year;
  });
};

module.exports = Cinema;
