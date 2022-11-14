const { handler } = require('@hapi/hapi/lib/cors');
const books = require('./books');
const {
  addBook,
  getAllBook,
  getDetailOfBook,
  editBook,
  deleteBook,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllBook,
  },

  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailOfBook,
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBook,
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook,
  },
];

module.exports = routes;
