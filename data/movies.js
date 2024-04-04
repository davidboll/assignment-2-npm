function Movie(title, year, genre, director, cover) {
  (this.title = title),
    (this.year = year),
    (this.genre = genre),
    (this.director = director),
    (this.cover = cover);
}

export const action = [
  new Movie(
    "Terminator",
    "1984",
    "Action",
    "James Cameron",
    "./images/cover-terminator.jpg"
  ),
  new Movie(
    "The Matrix",
    "1999",
    "Action",
    "Lana Wachowski",
    "./images/cover-the-matrix.jpg"
  ),
  new Movie(
    "Armageddon",
    "1998",
    "Action",
    "Michael Bay",
    "./images/cover-armageddon.jpg"
  ),
];

export const comedy = [
  new Movie(
    "Dumb and Dumber",
    "1994",
    "Comedy",
    "Peter Farrelly",
    "./images/cover-dumb-and-dumber.jpg"
  ),
  new Movie(
    "The Hangover",
    "2009",
    "Comedy",
    "Todd Phillips",
    "./images/cover-the-hangover.jpg"
  ),
  new Movie(
    "The Mask",
    "1994",
    "Comedy",
    "Chuck Russell",
    "./images/cover-the-mask.jpg"
  ),
];
