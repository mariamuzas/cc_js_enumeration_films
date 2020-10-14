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

module.exports = Cinema;
