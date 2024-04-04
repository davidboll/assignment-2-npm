import express from "express";
import { action } from "../data/movies.js";

const actionRouter = express.Router();

actionRouter.get("/", (req, res) => {
  res.render("pages/movies", {
    title: "Action",
    movies: action,
  });
});

actionRouter.get("/:movieTitle", (req, res) => {
  const { movieTitle } = req.params;
  const movie = action.find(
    (m) =>
      m.title.toLowerCase().replace(/\s+/g, "-") === movieTitle.toLowerCase()
  );
  if (movie) {
    res.render("pages/movieDetail", {
      title: movie.title,
      movie,
    });
  } else {
    res.status(404).send("No more action for you!");
  }
});

export default actionRouter;
