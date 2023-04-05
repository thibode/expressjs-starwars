import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import peopleData from "./data-folder/peopleData.js";
import planetData from "./data-folder/planetData.js";
import apiStarships from "./data-folder/callApiStarships.js";
import apiVehicles from "./data-folder/callApiVehicles.js";
import apiFilms from "./data-folder/callApiFilms.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8080;

app.get("/", function (req, res, next) {
  res.render("./pages/home", { title: "Express Procject : Home" });
});

app.get("/home", function (req, res, next) {
  res.render("./pages/home", { title: "Express Procject : Home" });
});

app.use("/people", peopleData);
app.use(express.static(path.join(__dirname, "public")));

app.use("/planets", planetData);
app.use(express.static(path.join(__dirname, "public")));

app.use("/starships", apiStarships);
app.use(express.static(path.join(__dirname, "public")));

app.use("/vehicles", apiVehicles);
app.use(express.static(path.join(__dirname, "public")));

app.use("/films", apiFilms);
app.use(express.static(path.join(__dirname, "public")));

app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log("Serveur lancé");
});
