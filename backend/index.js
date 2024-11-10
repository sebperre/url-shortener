const PORT = 4000;
const BASE_URL = "http://localhost:4000/"

// const ws = require('ws');
const express = require('express');
const cors = require('cors');
const { get_all_urls, to_short_url, to_long_url } = require('./database');
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200)
  res.send("Ok");
});

app.get("/getAllURLs", async (req, res) => {
  let output = await get_all_urls()
  res.send(output)
})

app.get("/:code", async (req, res) => {
  let long_url = await to_long_url(req.params.code)

  if (long_url === "No Record Found") {
    res.status(400)
    res.send("INVALID URL")
  } else {
    res.redirect(long_url)
  }
})

app.post("/submitURL", async (req, res) => {
  const {url} = req.body;

  let output = await to_short_url(url)

  res.send(output)
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
});
