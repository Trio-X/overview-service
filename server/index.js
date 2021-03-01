const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const env = require("dotenv").config();
const port = process.env.PORT || 3001;
const axios = require("axios");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/products", async (req, res) => {
  try {
    // var data = [];
    const token = process.env.TOKEN;
    const data = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.log(data.data.results[0].photos);
    res.send(data.data.results[0].photos);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
