var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/todo-app-demo');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var Todo = require('./models/todo');
var app = express();

var db = require('./models')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

////////////////////
//  ROUTES
///////////////////

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api/toDoList', function (req, res) {
  // send all books as JSON response
  db.Todo.find(function(err, toDoList){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(toDoList);
  });
});


app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  console.log('books create', req.body);
  var newBook = req.body;
  newBook._id = newBookUUID++;
  books.push(newBook);
  res.json(newBook);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};




  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
