import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.get("/api/most-popular", (req, res) => {
  res.json({
    results: [
      {
        id: "naruto",
        title: "Naruto",
        poster: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
        episodes: "220"
      }
    ]
  });
});

export default app;
