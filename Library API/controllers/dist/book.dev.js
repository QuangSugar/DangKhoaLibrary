"use strict";

var _require = require("../models"),
    Book = _require.Book;

var book = {
  createBook: function createBook(req, res) {
    var _req$body, name, idBook, category, author, company, dateImport, publicYear, image, price, quantity, _book, newBook;

    return regeneratorRuntime.async(function createBook$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, idBook = _req$body.idBook, category = _req$body.category, author = _req$body.author, company = _req$body.company, dateImport = _req$body.dateImport, publicYear = _req$body.publicYear, image = _req$body.image, price = _req$body.price, quantity = _req$body.quantity;

            if (!(!name || !idBook || !category || !author || !company || !dateImport || !publicYear || !price || !image || !quantity)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: "Please fill in all fields."
            }));

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap(Book.findOne({
              idBook: idBook,
              name: name
            }));

          case 6:
            _book = _context.sent;

            if (!_book) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: "This book already exists."
            }));

          case 9:
            newBook = new Book({
              name: name,
              idBook: idBook,
              category: category,
              author: author,
              company: company,
              dateImport: dateImport,
              publicYear: publicYear,
              price: price,
              image: image,
              quantity: quantity
            });
            _context.next = 12;
            return regeneratorRuntime.awrap(newBook.save());

          case 12:
            res.json({
              msg: "Book has been created!"
            });
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              msg: _context.t0.message
            }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 15]]);
  },
  getBook: function getBook(req, res) {
    var _book2;

    return regeneratorRuntime.async(function getBook$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(Book.findById(req.params.id).populate("author").populate("company").populate("category"));

          case 3:
            _book2 = _context2.sent;
            res.json(_book2);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              msg: _context2.t0.message
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  getAllBook: function getAllBook(req, res) {
    var Books;
    return regeneratorRuntime.async(function getAllBook$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(Book.find().populate("author").populate("company").populate("category"));

          case 3:
            Books = _context3.sent;
            res.status(200).json(Books);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json({
              msg: _context3.t0.message
            }));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  getLatestBook: function getLatestBook(req, res) {
    var Books;
    return regeneratorRuntime.async(function getLatestBook$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(Book.find().populate("author").populate("company").populate("category").sort("createdAt").limit(7));

          case 3:
            Books = _context4.sent;
            res.status(200).json(Books);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).json({
              msg: _context4.t0.message
            }));

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  updateBook: function updateBook(req, res) {
    var _req$body2, name, idBook, category, author, company, dateImport, publicYear, image, price, quantity;

    return regeneratorRuntime.async(function updateBook$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$body2 = req.body, name = _req$body2.name, idBook = _req$body2.idBook, category = _req$body2.category, author = _req$body2.author, company = _req$body2.company, dateImport = _req$body2.dateImport, publicYear = _req$body2.publicYear, image = _req$body2.image, price = _req$body2.price, quantity = _req$body2.quantity;
            _context5.next = 4;
            return regeneratorRuntime.awrap(Book.findOneAndUpdate({
              _id: req.params.id
            }, {
              name: name,
              idBook: idBook,
              category: category,
              author: author,
              company: company,
              dateImport: dateImport,
              publicYear: publicYear,
              image: image,
              price: price,
              quantity: quantity
            }));

          case 4:
            res.status(200).json({
              msg: "Update Success!"
            });
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(500).json({
              msg: _context5.t0.message
            }));

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  deleteBook: function deleteBook(req, res) {
    return regeneratorRuntime.async(function deleteBook$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(Book.findByIdAndDelete(req.params.id));

          case 3:
            res.staus(200).json({
              msg: "Deleted Success!"
            });
            _context6.next = 9;
            break;

          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", res.status(500).json({
              msg: _context6.t0.message
            }));

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 6]]);
  }
};
module.exports = book;