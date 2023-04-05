import axios from "axios";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await axios.get("https://swapi.dev/api/starships/");
    let datas = result.data["results"];
    res.render("./pages/starships", {
      title: "Express Project: Starhips",
      starship: datas,
    });
  } catch (err) {
    next(err);
  }
});
export default router;
