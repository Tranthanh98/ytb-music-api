import ytdl from "@distube/ytdl-core";
import cors from "cors";
import express from "express";
import YTMusic from "ytmusic-api";

const app = express();
app.use(cors());

const ytmusic = new YTMusic();
await ytmusic.initialize();

// Search API
app.get("/search", async (req, res) => {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: "Missing query" });

  const results = await ytmusic.searchSongs(q);
  res.json(results);
});

// Get audio URL API
app.get("/play/:id", async (req, res) => {
  const videoId = req.params.id;
  const info = await ytdl.getInfo(`https://www.youtube.com/watch?v=${videoId}`);
  const audioFormats = ytdl.filterFormats(info.formats, "audioonly");
  res.json({ url: audioFormats[0].url });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
