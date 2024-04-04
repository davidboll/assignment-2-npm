import express from "express";
import { action } from "../data/movies.js";

const actionRouter = express.Router();

actionRouter.get("/", (req, res) => {
  res.render("pages/movies", {
    title: "Action",
    movies: action,
  });
});

export default actionRouter;
