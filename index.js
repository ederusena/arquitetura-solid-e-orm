const express = require('express');
const bodyParser = require('body-parser');

const booksController = require('./controllers/booksController');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books/', booksController);

app.listen(3000, () => {
	console.log('App ouvindo a porta 3000!');
});
