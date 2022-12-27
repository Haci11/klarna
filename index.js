import express from "express";
const app = express();

const products = [
  { id: 1, price: 57, name: "house" },
  { id: 2, price: 567, name: "bob" },
  { id: 3, price: 7, name: "toy" },
];

app.get("/", (req, res) => {
  res.send(
    products
      .map((product) => `<a href="/p/${product.id}">${product.name}</a>`)
      .join("")
  );
});

app.listen(3000);
