const { Book } = require("../models");

const getAll = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200);
    res.json(books);
  } catch (e) {
    res.status(500).send({ message: "Algo deu errado" });
  }
};

const getById = async (req, res) => {
  try {
    const books = await Book.findByPk(req.params.id);
    res.status(200);
    res.json(books);
  } catch (e) {
    res.status(500).send({ message: "Algo deu errado" });
  }
};

const createNew = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const book = await Book.create({
      title,
      author,
      pageQuantity,
    });
    res.status(200);
    res.json(book);
  } catch (e) {
    res.status(500).send({ message: "Algo deu errado" });
  }
};

const updateById = async (req, res) => {
  const { title, author, pageQuantity = 0 } = req.body;
  try {
    const result = await Book.update(
      {
        title,
        author,
        pageQuantity,
      },
      { where: { id: req.params.id } }
    );
    res.status(200);
    res.json(result);
  } catch (err) {
    res.status(500).send({ message: "Algo deu errado" });
  }
};

const deleteById = async (req, res) => {
  try {
    const bookToDelete = await Book.findByPk(req.params.id);
    await bookToDelete.destroy();
    res.status(200);
    res.json(bookToDelete);
  } catch (e) {
    res.status(500).send({ message: "Algo deu errado" });
  }
};

module.exports = {
  deleteById,
  getAll,
  getById,
  updateById,
  createNew,
};