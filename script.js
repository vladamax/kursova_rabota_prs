const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello, world")
})

app.post("/writehistory", async (req, res) => {
  const { searchTerm } = req.body
  await fs.writeFileSync(require('./searchHistory.csv'), `${searchTerm},`)
})

app.get("/gethistory", async (req, res) => {
  const data = await fs.readFileSync(require('./searchHistory.csv'))
  const arr = await data.split(",")
  return res.json({ data: arr })
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
