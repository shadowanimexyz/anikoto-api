import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const animeData = [
  {
    title: "Solo Leveling",
    image: "https://cdn.myanimelist.net/images/anime/1170/124312.jpg",
    episodes: 12,
    rating: 9.1
  },
  {
    title: "Attack on Titan",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    episodes: 87,
    rating: 9.0
  }
];

app.get("/", (req, res) => {
  res.json({
    message: "Shadow Anime API Running"
  });
});

app.get("/api/most-popular", (req, res) => {
  res.json(animeData);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
