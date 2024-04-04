import express from "express";
import * as path from "path";
import actionRouter from "./routes/action.js";
import comedyRouter from "./routes/comedy.js";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.render("pages/home", {
    title: "Welcome!",
  });
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/action", actionRouter);
app.use("/comedy", comedyRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
