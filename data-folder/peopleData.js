import axios from "axios";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let peopleImg = [];

    peopleImg.push("./images/people/lukeskywalker.jpeg");
    peopleImg.push("./images/people/c-3po.jpeg");
    peopleImg.push("./images/people/r2.jpg");
    peopleImg.push("./images/people/darthvader.jpeg");
    peopleImg.push("./images/people/leia.jpeg");
    peopleImg.push("./images/people/owen.jpeg");
    peopleImg.push("./images/people/beru.jpg");
    peopleImg.push("./images/people/r5d4.jpeg");
    peopleImg.push("./images/people/biggs.jpeg");
    peopleImg.push("./images/people/obiwan.jpeg");

    const result = await axios.get("https://swapi.dev/api/people/");
    let datas = result.data["results"];

    res.render("./pages/people", {
      title: "Express Project: People",
      people: datas,
      image: peopleImg,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
