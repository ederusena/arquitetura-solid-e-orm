const express = require('express');
const { Book } = require('../models');
const router = express.Router();

// GET /books - lista todos os livros;
router.get('/', (req, res, next) => {
  Book.findAll()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

// GET /book/:id - pega o livro com o id especificado;
router.get('/:id', (req, res, next) => {
  Book.findByPk(req.params.id)
    .then((book) => {
      if (book === null) {
        return res.status(404).send({ message: 'Livro não encontrado' });
      }
      return res.status(200).json(book);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });

});

// POST /book - cria um novo livro;
router.post('/', (req, res) => {
  const { title, author, pageQuantity = 0 } = req.body;
  console.log(title, author, pageQuantity);
  Book.create({ title, author, pageQuantity })
    .then((book) => res.status(200).json(book))
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

// POST /book/:id - sobrescreve o livro com ID selecionado;
router.put('/:id', (req, res) => {
  const { title, author, pageQuantity = 0 } = req.body;
  Book.update(
    { title, author, pageQuantity },
    {
      where: { id: req.params.id },
    }
  ).then((result) => {
    res.status(200).send({ message: 'Livro atualizado com sucesso!' });
  })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

// DELETE /book/:id - deleta um livro;
router.delete('/:id', (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      res.status(200).send({ message: `Livro excluído com sucesso.` });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

module.exports = router;