const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Tile Cleaner",
      category: "Home Cleaning",
      price: 99,
      size: "1 L",
      description: "Tile cleaning liquid"
    },
    {
      id: 2,
      name: "Dish Wash Liquid",
      category: "Kitchen Cleaning",
      price: 79,
      size: "500 ml",
      description: "Dishwashing liquid"
    },
    {
      id: 3,
      name: "Car Wash Shampoo",
      category: "Car Care",
      price: 149,
      size: "1 L",
      description: "Car washing shampoo"
    }
  ]);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Sansha store running on port ${PORT}`);
});
