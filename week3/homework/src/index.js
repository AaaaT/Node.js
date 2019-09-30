'use strict';

const Express = require('express');
const fs = require('fs');
const app = new Express();
app.use(Express.json());


function readList() {
  let list = fs.readFileSync('todos.json');
  return JSON.parse(list);
};

function writeList(list) {
  fs.writeFileSync ('todos.json', JSON.stringify(list))
};



app.get('/todos', (req, res) =>{
    res.send(readList());
});


app.get('/todos/:id', (req, res) =>{
  const todos = readList();
  let myTodo = "";
  for ( const todo of todos) {
    if (req.params.id == todo.id) {
      myTodo = JSON.stringify(todo)
    }
  }
  res.send(myTodo)  
});


app.delete ('/todos', (req, res) =>{
  writeList([]);
  res.send();
});


app.put('/todos/:id/done', (req, res) =>{
  const todos = readList();
  for ( let todo of todos) {
    if (req.params.id == todo.id) {
      todo.done = true
      writeList(todos)
    }
  }
  res.send() 
});

app.put('/todos/:id/notdone', (req, res) =>{
  const todos = readList();
  for ( let todo of todos) {
    if (req.params.id == todo.id) {
      todo.done = false
      writeList(todos)
    }
  }
  res.send() 
});


const port = process.env.PORT || 3000;  
app.listen(port, () => console.log(`Server started listening on http://localhost:${port}`));