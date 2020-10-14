const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(({title}) => title);
};

// Cinema.prototype.filmTitles = function () {
//   return this.films.map(film => film.title);
// };

Cinema.prototype.filmByTitle = function (filmtitle) {
  return this.films.find(({title}) => title === filmtitle);
};

// Cinema.prototype.filmsByGenre = function (genre) {
//   return this.films.filter((film) => {
//     return genre === film.genre;
//   });
// };

Cinema.prototype.checkFilmsInYear = function (filmyear) {
  return this.films.some(({year}) => year === filmyear);
};

Cinema.prototype.checkFilmsOverLength = function(filmlength) {
  return this.films.every(({length}) => length >= filmlength);
}

Cinema.prototype.totalRunningTime = function() {
  return this.films.reduce((total, {length}) => total + length, 0);
}

Cinema.prototype.filmsByProperty = function (key, value) {
  return this.films.filter(film => value === film[key]);
};
module.exports = Cinema;
