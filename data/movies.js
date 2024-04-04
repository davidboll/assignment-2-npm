function Movie(title, year, genre, director, cover, description) {
  (this.title = title),
    (this.year = year),
    (this.genre = genre),
    (this.director = director),
    (this.cover = cover);
  this.description = description || "Hi Rob :)";
}

export const action = [
  new Movie(
    "Terminator",
    "1984",
    "Action",
    "James Cameron",
    "./images/cover-terminator.jpg",
    "A cyborg assassin is sent back in time to kill Sarah Connor, whose son will one day become a savior against machines in a post-apocalyptic future."
  ),
  new Movie(
    "The Matrix",
    "1999",
    "Action",
    "Lana Wachowski",
    "./images/cover-the-matrix.jpg",
    "A computer hacker learns about the true nature of reality and his role in the war against its controllers."
  ),
  new Movie(
    "Armageddon",
    "1998",
    "Action",
    "Michael Bay",
    "./images/cover-armageddon.jpg",
    "After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, NASA recruits a misfit team of deep-core drillers to save the planet."
  ),
];

export const comedy = [
  new Movie(
    "Dumb and Dumber",
    "1994",
    "Comedy",
    "Peter Farrelly",
    "./images/cover-dumb-and-dumber.jpg",
    "Two dim-witted friends set out on a cross-country trip to return a briefcase full of money to its rightful owner."
  ),
  new Movie(
    "The Hangover",
    "2009",
    "Comedy",
    "Todd Phillips",
    "./images/cover-the-hangover.jpg",
    "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing."
  ),
  new Movie(
    "The Mask",
    "1994",
    "Comedy",
    "Chuck Russell",
    "./images/cover-the-mask.jpg"
  ),
];
