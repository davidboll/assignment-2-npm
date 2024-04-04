import express from "express";
import { comedy } from "../data/movies.js";

const comedyRouter = express.Router();

comedyRouter.get("/", (req, res) => {
  res.render("pages/movies", {
    title: "Comedy",
    movies: comedy,
  });
});

export default comedyRouter;
