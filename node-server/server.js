const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    const data = fs.readFileSync("data.json", "utf8");
    const jsonData = JSON.parse(data);
    const formattedJson = JSON.stringify(jsonData, null, 2);
    res.json(formattedJson);
  } catch (error) {
    console.error("Error reading or parsing data.json:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
