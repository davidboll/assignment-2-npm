import express from "express";
import { comedy } from "../data/movies.js";

const comedyRouter = express.Router();

comedyRouter.get("/", (req, res) => {
  res.render("pages/movies", {
    title: "Comedy",
    movies: comedy,
  });
});

comedyRouter.get("/:movieTitle", (req, res) => {
  const { movieTitle } = req.params;
  const movie = comedy.find(
    (m) =>
      m.title.toLowerCase().replace(/\s+/g, "-") === movieTitle.toLowerCase()
  );
  if (movie) {
    res.render("pages/movieDetail", {
      title: movie.title,
      movie,
    });
  } else {
    res.status(404).send("Haha, no more comedy for you!");
  }
});

export default comedyRouter;
