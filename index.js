import express from "express";
const app = express();
import { createOrder } from "./klarna.js";
import { config } from "dotenv";
config();

const products = [
  { id: "1", price: 57, name: "house" },
  { id: "2", price: 567, name: "bob" },
  { id: "3", price: 7, name: "toy" },
];

app.get("/", (req, res) => {
  res.send(
    products
      .map((product) => `<a href="/p/${product.id}">${product.name}</a>`)
      .join("")
  );
});

app.get("/p/:id", async (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  const data = await createOrder(product);
  console.log(data);
  res.send(data.html_snippet);
});

app.listen(3000);
