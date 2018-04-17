var db = require('./models');


// task: String,
// description: String

var toDoList = [
  {
    task: 'Wash dishes',
    description: 'wash all the dirty dishes before the wife gets home'
  },
  {
    task: 'Make the bed',
    description: 'Maybe I can leave a hint for her ;)'
  },
  {
    task: 'Pre dinner',
    description: 'Defrost the chicken, chop the potatoes and carrots.'
  }
];
console.log(toDoList[0]);

  db.Todo.remove({}, function(err, toDoList){
    if(err) {
      console.log('Error occurred in remove', err);
    } else {
      console.log('removed all Todo items');

      // create new records based on the array toDoList
      db.Todo.create(toDoList, function(err, toDoList){
        if (err) { return console.log('err', err); }
        console.log("created", toDoList.length, "toDoList");
        process.exit();
      });
    }
  });
