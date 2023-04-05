import axios from "axios";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await axios.get("https://swapi.dev/api/films/");
    let datas = result.data["results"];
    res.render("./pages/films", {
      title: "Express Project: Films",
      film: datas,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
