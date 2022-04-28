"use strict";

var _require = require("../models"),
    Users = _require.Users,
    UserBook = _require.UserBook,
    Book = _require.Book;

var bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken");

var sendMail = require("./sendMail");

var moment = require("moment");

var _require2 = require("googleapis"),
    google = _require2.google;

var OAuth2 = google.auth.OAuth2;

var fetch = require("node-fetch");

var client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);
var CLIENT_URL = process.env.CLIENT_URL;
var userCtrl = {
  register: function register(req, res) {
    var _req$body, name, email, password, idStudent, classUser, birthday, gender, address, user, passwordHash, newUser;

    return regeneratorRuntime.async(function register$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, idStudent = _req$body.idStudent, classUser = _req$body.classUser, birthday = _req$body.birthday, gender = _req$body.gender, address = _req$body.address;

            if (!(!name || !email || !password)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: "Please fill in all fields."
            }));

          case 4:
            if (validateEmail(email)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: "Invalid emails."
            }));

          case 6:
            _context.next = 8;
            return regeneratorRuntime.awrap(Users.findOne({
              email: email
            }));

          case 8:
            user = _context.sent;

            if (!user) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: "This email already exists."
            }));

          case 11:
            if (!(password.length < 6)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: "Password must be at least 6 characters."
            }));

          case 13:
            _context.next = 15;
            return regeneratorRuntime.awrap(bcrypt.hash(password, 12));

          case 15:
            passwordHash = _context.sent;
            newUser = new Users({
              name: name,
              email: email,
              idStudent: idStudent,
              classUser: classUser,
              birthday: birthday,
              gender: gender,
              address: address,
              password: passwordHash
            });
            _context.next = 19;
            return regeneratorRuntime.awrap(newUser.save());

          case 19:
            res.json({
              msg: "Account has been created!"
            });
            _context.next = 25;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              msg: _context.t0.message
            }));

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 22]]);
  },
  login: function login(req, res) {
    var _req$body2, email, password, user, isMatch, access_token;

    return regeneratorRuntime.async(function login$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 4;
            return regeneratorRuntime.awrap(Users.findOne({
              email: email
            }));

          case 4:
            user = _context2.sent;

            if (user) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: "This email does not exist."
            }));

          case 7:
            _context2.next = 9;
            return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

          case 9:
            isMatch = _context2.sent;

            if (isMatch) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: "Password is incorrect."
            }));

          case 12:
            if (!(user.status === false)) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: "Your account was blocked"
            }));

          case 14:
            // const refresh_token = createRefreshToken({ id: user._id });
            // res.cookie("refreshtoken", refresh_token, {
            //   httpOnly: true,
            //   path: "/api/v1/auth/refresh_token",
            //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            // });
            access_token = createAccessToken({
              id: user.id
            });
            res.json({
              msg: "Login success!",
              access_token: access_token
            });
            _context2.next = 21;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              msg: _context2.t0.message
            }));

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 18]]);
  },
  getAccessToken: function getAccessToken(req, res) {
    try {
      var rf_token = req.cookies.refreshtoken;
      if (!rf_token) return res.status(400).json({
        msg: "Please login now!"
      });
      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, function (err, user) {
        if (err) return res.status(400).json({
          msg: "Please login now!"
        });
        var access_token = createAccessToken({
          id: user.id
        });
        res.json({
          access_token: access_token
        });
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message
      });
    }
  },
  forgotPassword: function forgotPassword(req, res) {
    var email, user, access_token, url;
    return regeneratorRuntime.async(function forgotPassword$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            email = req.body.email;
            _context3.next = 4;
            return regeneratorRuntime.awrap(Users.findOne({
              email: email
            }));

          case 4:
            user = _context3.sent;

            if (user) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              msg: "This email does not exist."
            }));

          case 7:
            access_token = createAccessToken({
              id: user._id
            });
            url = "".concat(CLIENT_URL, "/user/reset/").concat(access_token);
            sendMail(email, url, "Reset your password");
            res.json({
              msg: "Re-send the password, please check your email."
            });
            _context3.next = 16;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json({
              msg: _context3.t0.message
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 13]]);
  },
  resetPassword: function resetPassword(req, res) {
    var password, passwordHash;
    return regeneratorRuntime.async(function resetPassword$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            password = req.body.password;
            console.log(password);
            _context4.next = 5;
            return regeneratorRuntime.awrap(bcrypt.hash(password, 12));

          case 5:
            passwordHash = _context4.sent;
            _context4.next = 8;
            return regeneratorRuntime.awrap(Users.findOneAndUpdate({
              _id: req.user.id
            }, {
              password: passwordHash
            }));

          case 8:
            res.json({
              msg: "Password successfully changed!"
            });
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).json({
              msg: _context4.t0.message
            }));

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 11]]);
  },
  getUserInfor: function getUserInfor(req, res) {
    var user;
    return regeneratorRuntime.async(function getUserInfor$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(Users.findById(req.user.id).select("-password"));

          case 3:
            user = _context5.sent;
            res.json(user);
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
  getUsersAllInfor: function getUsersAllInfor(req, res) {
    var users;
    return regeneratorRuntime.async(function getUsersAllInfor$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(Users.find().select("-password"));

          case 3:
            users = _context6.sent;
            res.json(users);
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", res.status(500).json({
              msg: _context6.t0.message
            }));

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  logout: function logout(req, res) {
    return regeneratorRuntime.async(function logout$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            res.clearCookie("refreshtoken", {
              path: "/api/v1/auth/refresh-token"
            });
            return _context7.abrupt("return", res.json({
              msg: "Logged out."
            }));

          case 5:
            _context7.prev = 5;
            _context7.t0 = _context7["catch"](0);
            return _context7.abrupt("return", res.status(500).json({
              msg: _context7.t0.message
            }));

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 5]]);
  },
  updateUser: function updateUser(req, res) {
    var _req$body3, name, avatar, birthday, gender, address;

    return regeneratorRuntime.async(function updateUser$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _req$body3 = req.body, name = _req$body3.name, avatar = _req$body3.avatar, birthday = _req$body3.birthday, gender = _req$body3.gender, address = _req$body3.address;
            _context8.next = 4;
            return regeneratorRuntime.awrap(Users.findOneAndUpdate({
              _id: req.user.id
            }, {
              name: name,
              avatar: avatar,
              birthday: birthday,
              gender: gender,
              address: address
            }));

          case 4:
            res.json({
              msg: "Update Success!"
            });
            _context8.next = 10;
            break;

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            return _context8.abrupt("return", res.status(500).json({
              msg: _context8.t0.message
            }));

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  updateUsersRole: function updateUsersRole(req, res) {
    var role;
    return regeneratorRuntime.async(function updateUsersRole$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            role = req.body.role;
            _context9.next = 4;
            return regeneratorRuntime.awrap(Users.findOneAndUpdate({
              _id: req.params.id
            }, {
              role: role
            }));

          case 4:
            res.json({
              msg: "Update Success!"
            });
            _context9.next = 10;
            break;

          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](0);
            return _context9.abrupt("return", res.status(500).json({
              msg: _context9.t0.message
            }));

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  deleteUser: function deleteUser(req, res) {
    return regeneratorRuntime.async(function deleteUser$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return regeneratorRuntime.awrap(Users.findByIdAndDelete(req.params.id));

          case 3:
            res.json({
              msg: "Deleted Success!"
            });
            _context10.next = 9;
            break;

          case 6:
            _context10.prev = 6;
            _context10.t0 = _context10["catch"](0);
            return _context10.abrupt("return", res.status(500).json({
              msg: _context10.t0.message
            }));

          case 9:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, [[0, 6]]);
  },
  googleLogin: function googleLogin(req, res) {
    var tokenId, verify, _verify$payload, email_verified, email, name, picture, password, passwordHash, user, isMatch, refresh_token, newUser, _refresh_token;

    return regeneratorRuntime.async(function googleLogin$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            tokenId = req.body.tokenId;
            _context11.next = 4;
            return regeneratorRuntime.awrap(client.verifyIdToken({
              idToken: tokenId,
              audience: process.env.MAILING_SERVICE_CLIENT_ID
            }));

          case 4:
            verify = _context11.sent;
            _verify$payload = verify.payload, email_verified = _verify$payload.email_verified, email = _verify$payload.email, name = _verify$payload.name, picture = _verify$payload.picture;
            password = email + process.env.GOOGLE_SECRET;
            _context11.next = 9;
            return regeneratorRuntime.awrap(bcrypt.hash(password, 12));

          case 9:
            passwordHash = _context11.sent;

            if (email_verified) {
              _context11.next = 12;
              break;
            }

            return _context11.abrupt("return", res.status(400).json({
              msg: "Email verification failed."
            }));

          case 12:
            _context11.next = 14;
            return regeneratorRuntime.awrap(Users.findOne({
              email: email
            }));

          case 14:
            user = _context11.sent;

            if (!user) {
              _context11.next = 26;
              break;
            }

            _context11.next = 18;
            return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

          case 18:
            isMatch = _context11.sent;

            if (isMatch) {
              _context11.next = 21;
              break;
            }

            return _context11.abrupt("return", res.status(400).json({
              msg: "Password is incorrect."
            }));

          case 21:
            refresh_token = createRefreshToken({
              id: user._id
            });
            res.cookie("refreshtoken", refresh_token, {
              httpOnly: true,
              path: "/user/refresh_token",
              maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days

            });
            res.json({
              msg: "Login success!"
            });
            _context11.next = 32;
            break;

          case 26:
            newUser = new Users({
              name: name,
              email: email,
              password: passwordHash,
              avatar: picture
            });
            _context11.next = 29;
            return regeneratorRuntime.awrap(newUser.save());

          case 29:
            _refresh_token = createRefreshToken({
              id: newUser._id
            });
            res.cookie("refreshtoken", _refresh_token, {
              httpOnly: true,
              path: "/user/refresh_token",
              maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days

            });
            res.json({
              msg: "Login success!"
            });

          case 32:
            _context11.next = 37;
            break;

          case 34:
            _context11.prev = 34;
            _context11.t0 = _context11["catch"](0);
            return _context11.abrupt("return", res.status(500).json({
              msg: _context11.t0.message
            }));

          case 37:
          case "end":
            return _context11.stop();
        }
      }
    }, null, null, [[0, 34]]);
  },
  facebookLogin: function facebookLogin(req, res) {
    var _req$body4, accessToken, userID, URL, data, email, name, picture, password, passwordHash, user, isMatch, refresh_token, newUser, _refresh_token2;

    return regeneratorRuntime.async(function facebookLogin$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _req$body4 = req.body, accessToken = _req$body4.accessToken, userID = _req$body4.userID;
            URL = "https://graph.facebook.com/v2.9/".concat(userID, "/?fields=id,name,email,picture&access_token=").concat(accessToken);
            _context12.next = 5;
            return regeneratorRuntime.awrap(fetch(URL).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 5:
            data = _context12.sent;
            email = data.email, name = data.name, picture = data.picture;
            password = email + process.env.FACEBOOK_SECRET;
            _context12.next = 10;
            return regeneratorRuntime.awrap(bcrypt.hash(password, 12));

          case 10:
            passwordHash = _context12.sent;
            _context12.next = 13;
            return regeneratorRuntime.awrap(Users.findOne({
              email: email
            }));

          case 13:
            user = _context12.sent;

            if (!user) {
              _context12.next = 25;
              break;
            }

            _context12.next = 17;
            return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

          case 17:
            isMatch = _context12.sent;

            if (isMatch) {
              _context12.next = 20;
              break;
            }

            return _context12.abrupt("return", res.status(400).json({
              msg: "Password is incorrect."
            }));

          case 20:
            refresh_token = createRefreshToken({
              id: user._id
            });
            res.cookie("refreshtoken", refresh_token, {
              httpOnly: true,
              path: "/user/refresh_token",
              maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days

            });
            res.json({
              msg: "Login success!"
            });
            _context12.next = 31;
            break;

          case 25:
            newUser = new Users({
              name: name,
              email: email,
              password: passwordHash,
              avatar: picture.data.url
            });
            _context12.next = 28;
            return regeneratorRuntime.awrap(newUser.save());

          case 28:
            _refresh_token2 = createRefreshToken({
              id: newUser._id
            });
            res.cookie("refreshtoken", _refresh_token2, {
              httpOnly: true,
              path: "/user/refresh_token",
              maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days

            });
            res.json({
              msg: "Login success!"
            });

          case 31:
            _context12.next = 36;
            break;

          case 33:
            _context12.prev = 33;
            _context12.t0 = _context12["catch"](0);
            return _context12.abrupt("return", res.status(500).json({
              msg: _context12.t0.message
            }));

          case 36:
          case "end":
            return _context12.stop();
        }
      }
    }, null, null, [[0, 33]]);
  },
  // ------------------borrow book
  borrowBook: function borrowBook(req, res) {
    var _req$body5, book, startDate, endDate, user, isExist, newBorrow;

    return regeneratorRuntime.async(function borrowBook$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _req$body5 = req.body, book = _req$body5.book, startDate = _req$body5.startDate, endDate = _req$body5.endDate;
            user = req.user.id;

            if (!(!book || !startDate || !endDate)) {
              _context13.next = 5;
              break;
            }

            return _context13.abrupt("return", res.status(400).json({
              msg: "Please fill in all fields."
            }));

          case 5:
            _context13.next = 7;
            return regeneratorRuntime.awrap(UserBook.findOne({
              user: user,
              startDate: startDate
            }));

          case 7:
            isExist = _context13.sent;

            if (!isExist) {
              _context13.next = 10;
              break;
            }

            return _context13.abrupt("return", res.status(400).json({
              msg: "Bạn đã mượn sách vào hôm nay"
            }));

          case 10:
            newBorrow = new UserBook({
              user: user,
              book: book,
              startDate: startDate,
              endDate: endDate
            });
            _context13.next = 13;
            return regeneratorRuntime.awrap(newBorrow.save());

          case 13:
            res.json({
              msg: "Bạn đã đăng ký thuê sách thành công!"
            });
            _context13.next = 19;
            break;

          case 16:
            _context13.prev = 16;
            _context13.t0 = _context13["catch"](0);
            return _context13.abrupt("return", res.status(500).json({
              msg: _context13.t0.message
            }));

          case 19:
          case "end":
            return _context13.stop();
        }
      }
    }, null, null, [[0, 16]]);
  },
  acceptBorrowBook: function acceptBorrowBook(req, res) {
    var books, i;
    return regeneratorRuntime.async(function acceptBorrowBook$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return regeneratorRuntime.awrap(UserBook.findOneAndUpdate({
              _id: req.params.id
            }, {
              status: "borrowing"
            }));

          case 3:
            _context14.next = 5;
            return regeneratorRuntime.awrap(UserBook.find({
              _id: req.params.id
            }).select("book"));

          case 5:
            books = _context14.sent;
            books = books[0].book;
            i = 0;

          case 8:
            if (!(i < books.length)) {
              _context14.next = 14;
              break;
            }

            _context14.next = 11;
            return regeneratorRuntime.awrap(Book.findOneAndUpdate({
              _id: books[i]
            }, {
              status: false
            }));

          case 11:
            i++;
            _context14.next = 8;
            break;

          case 14:
            res.json({
              msg: "Accept Success!"
            });
            _context14.next = 20;
            break;

          case 17:
            _context14.prev = 17;
            _context14.t0 = _context14["catch"](0);
            return _context14.abrupt("return", res.status(500).json({
              msg: _context14.t0.message
            }));

          case 20:
          case "end":
            return _context14.stop();
        }
      }
    }, null, null, [[0, 17]]);
  },
  cancelBorrowBook: function cancelBorrowBook(req, res) {
    return regeneratorRuntime.async(function cancelBorrowBook$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return regeneratorRuntime.awrap(UserBook.findOneAndUpdate({
              _id: req.params.id
            }, {
              status: "cancel"
            }));

          case 3:
            res.json({
              msg: "Cancel Success!"
            });
            _context15.next = 9;
            break;

          case 6:
            _context15.prev = 6;
            _context15.t0 = _context15["catch"](0);
            return _context15.abrupt("return", res.status(500).json({
              msg: _context15.t0.message
            }));

          case 9:
          case "end":
            return _context15.stop();
        }
      }
    }, null, null, [[0, 6]]);
  },
  giveBookBack: function giveBookBack(req, res) {
    var books, i;
    return regeneratorRuntime.async(function giveBookBack$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return regeneratorRuntime.awrap(UserBook.findOneAndUpdate({
              _id: req.params.id
            }, {
              status: "gived"
            }));

          case 3:
            _context16.next = 5;
            return regeneratorRuntime.awrap(UserBook.find({
              _id: req.params.id
            }).select("book"));

          case 5:
            books = _context16.sent;
            books = books[0].book;
            i = 0;

          case 8:
            if (!(i < books.length)) {
              _context16.next = 14;
              break;
            }

            _context16.next = 11;
            return regeneratorRuntime.awrap(Book.findOneAndUpdate({
              _id: books[i]
            }, {
              status: true
            }));

          case 11:
            i++;
            _context16.next = 8;
            break;

          case 14:
            res.json({
              msg: "Gived Success!"
            });
            _context16.next = 20;
            break;

          case 17:
            _context16.prev = 17;
            _context16.t0 = _context16["catch"](0);
            return _context16.abrupt("return", res.status(500).json({
              msg: _context16.t0.message
            }));

          case 20:
          case "end":
            return _context16.stop();
        }
      }
    }, null, null, [[0, 17]]);
  },
  getAllOrder: function getAllOrder(req, res) {
    var orders;
    return regeneratorRuntime.async(function getAllOrder$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return regeneratorRuntime.awrap(UserBook.find().populate("user").populate("book"));

          case 3:
            orders = _context17.sent;
            res.json(orders);
            _context17.next = 10;
            break;

          case 7:
            _context17.prev = 7;
            _context17.t0 = _context17["catch"](0);
            return _context17.abrupt("return", res.status(500).json({
              msg: _context17.t0.message
            }));

          case 10:
          case "end":
            return _context17.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  getOrderByUser: function getOrderByUser(req, res) {
    var orders;
    return regeneratorRuntime.async(function getOrderByUser$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _context18.next = 3;
            return regeneratorRuntime.awrap(UserBook.find({
              user: req.params.id
            }).populate("user").populate("book"));

          case 3:
            orders = _context18.sent;
            res.json(orders);
            _context18.next = 10;
            break;

          case 7:
            _context18.prev = 7;
            _context18.t0 = _context18["catch"](0);
            return _context18.abrupt("return", res.status(500).json({
              msg: _context18.t0.message
            }));

          case 10:
          case "end":
            return _context18.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  checkDateBorrow: function checkDateBorrow(req, res) {
    var date, now, books, user, i, endDate;
    return regeneratorRuntime.async(function checkDateBorrow$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            // await UserBook.findOneAndUpdate(
            //   { _id: req.params.id },
            //   {
            //     status: "borrowing",
            //   }
            // );
            date = moment(new Date()).format("DD/MM/YYYY");
            now = new Date(date).getTime();
            _context19.next = 5;
            return regeneratorRuntime.awrap(UserBook.find({
              status: "borrowing"
            }).populate("user").select("endDate user"));

          case 5:
            books = _context19.sent;
            console.log(books);
            user = "";
            i = 0;

          case 9:
            if (!(i < books.length)) {
              _context19.next = 18;
              break;
            }

            endDate = new Date(books[i].endDate).getTime();

            if (!(endDate < now)) {
              _context19.next = 15;
              break;
            }

            _context19.next = 14;
            return regeneratorRuntime.awrap(Users.findOneAndUpdate({
              _id: books[i].user._id
            }, {
              status: false
            }));

          case 14:
            if (user.length == 0) {
              user += books[i].user.name;
            } else {
              user += ", " + books[i].user.name;
            }

          case 15:
            i++;
            _context19.next = 9;
            break;

          case 18:
            if (!(user.length > 0)) {
              _context19.next = 22;
              break;
            }

            return _context19.abrupt("return", res.status(200).json({
              msg: "".concat(user, " was blocked")
            }));

          case 22:
            res.json({
              msg: "Checked Success!"
            });

          case 23:
            _context19.next = 28;
            break;

          case 25:
            _context19.prev = 25;
            _context19.t0 = _context19["catch"](0);
            return _context19.abrupt("return", res.status(500).json({
              msg: _context19.t0.message
            }));

          case 28:
          case "end":
            return _context19.stop();
        }
      }
    }, null, null, [[0, 25]]);
  },
  toggleUser: function toggleUser(req, res) {
    var id, statusCurrent;
    return regeneratorRuntime.async(function toggleUser$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            id = req.params.id;
            _context20.next = 4;
            return regeneratorRuntime.awrap(Users.find({
              _id: id
            }).select("status"));

          case 4:
            statusCurrent = _context20.sent;
            statusCurrent = statusCurrent[0].status;
            console.log(statusCurrent);
            _context20.next = 9;
            return regeneratorRuntime.awrap(Users.findByIdAndUpdate({
              _id: id
            }, {
              status: !statusCurrent
            }));

          case 9:
            if (statusCurrent) {
              res.json({
                msg: "Blocked user Success!"
              });
            } else {
              res.json({
                msg: "Unblock user Success!"
              });
            }

            _context20.next = 15;
            break;

          case 12:
            _context20.prev = 12;
            _context20.t0 = _context20["catch"](0);
            return _context20.abrupt("return", res.status(500).json({
              msg: _context20.t0.message
            }));

          case 15:
          case "end":
            return _context20.stop();
        }
      }
    }, null, null, [[0, 12]]);
  }
};

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
} // const createActivationToken = (payload) => {
//     return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
// }


var createAccessToken = function createAccessToken(payload) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h"
  });
};

var createRefreshToken = function createRefreshToken(payload) {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d"
  });
};

module.exports = userCtrl;