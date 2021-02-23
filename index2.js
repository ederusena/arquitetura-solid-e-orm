const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const booksController = require("/controllers/booksController");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/books", booksController.getAll);
app.get("/book/:id", booksController.getById);
app.post("/book", booksController.createNew);
app.post("/book/:id", booksController.updateById);
app.delete("/book/:id", booksController.deleteById());

app.listen(3000);