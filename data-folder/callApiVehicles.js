import axios from "axios";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await axios.get("https://swapi.dev/api/vehicles/");
    let datas = result.data["results"];
    res.render("./pages/vehicles", {
      title: "Express Project: Vehicles",
      vehicle: datas,
    });
  } catch (err) {
    next(err);
  }
});
export default router;
