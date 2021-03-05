const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const env = require("dotenv").config();
const port = process.env.PORT || 3001;
const axios = require("axios");
const cors = require("cors");
app.use(cors());

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
const token = "6b62be346efafb380dd1297e6a12cbf825d65953";
//getting overview products
app.get("/overview/api/products", async (req, res) => {
  try {
    const data = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    res.send(data.data.results[0].photos);
  } catch (err) {
    console.log(err);
  }
});

//get product catsegory
app.get("/overview/api/category", async (req, res) => {
  try {
    const data = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    res.send(data.data.category);
  } catch (err) {
    console.log(err);
  }
});

//get product name
app.get("/overview/api/name", async (req, res) => {
  try {
    const data = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    res.send(data.data.name);
  } catch (err) {
    console.log(err);
  }
});

//get product price:
app.get("/overview/api/price", async (req, res) => {
  try {
    const data = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    res.send(data.data.results[0].original_price);
  } catch (err) {
    console.log(err);
  }
});

//get product rating:
app.get("/overview/api/rating", async (req, res) => {
  try {
    const data = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11003`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    res.json(data.data.results[0].rating);
  } catch (err) {
    console.log(err);
  }
});

//get product styles:
app.get("/overview/api/styles", async (req, res) => {
  try {
    const data = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    res.send(data.data.results);
  } catch (err) {
    console.log(err);
  }
});

// get product quantity and size
app.get("/overview/api/q", async (req, res) => {
  try {
    const data = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    var q = data.data.results.map((elem) => {
      return Object.values(elem.skus);
    });
    res.json(q);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
