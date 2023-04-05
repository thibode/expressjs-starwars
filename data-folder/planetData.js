import axios from "axios";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let planetImg = [];

    planetImg.push("./images/planet/tatooine.jpeg");
    planetImg.push("./images/planet/alderaan.jpeg");
    planetImg.push("./images/planet/yavin.jpeg");
    planetImg.push("./images/planet/hoth.jpeg");
    planetImg.push("./images/planet/dagobah.jpeg");
    planetImg.push("./images/planet/bespin.jpg");
    planetImg.push("./images/planet/endor.jpeg");
    planetImg.push("./images/planet/naboo.jpeg");
    planetImg.push("./images/planet/coruscant.jpeg");
    planetImg.push("./images/planet/kamino.jpeg");

    const result = await axios.get("https://swapi.dev/api/planets/");
    let datas = result.data["results"];
    res.render("./pages/planets", {
      title: "Express Project: Planets",
      planet: datas,
      image: planetImg,
    });
  } catch (err) {
    next(err);
  }
});
export default router;
