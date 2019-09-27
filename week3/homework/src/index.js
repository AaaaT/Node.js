'use strict';

// TODO: Write the homework code in this file

const Express = require('express');
const fs = require('fs');
const app = new Express();
// Use built-in JSON middleware to automatically parse JSON
app.use(Express.json());


app.get('/todos', (req, res) =>{
    res.send(readList()); //prints what is in todos.json
});

         // app.get-readTodo
// readTodo (GET /todos/:id)
// Get a single to-do with ID :id
app.get('/todos/:id', (req, res) =>{
    res.send(req.param.id); //e.g. http://localhost:3000/todos/1 prints 1
    
})

// app.put- updateTodo

// app.delete-deleteTodo
// // clearTodos (DELETE /todos)
// // Clears the list of to-dos

// app.post-createTodo
// // markAsDone (POST /todos/:id/done)
// // Sets the done flag of a single to-do to true
app.post('/todos/:id/done', (req, res) =>{
    
})

// app.delete-deleteTodo
// // markAsNotDone (DELETE /todos/:id/done)
// // Sets the done flag of a single to-do to false


function readList() {
  let list = fs.readFileSync('todos.json');
  return list;
}

const port = process.env.PORT || 3000;  
app.listen(port, () => console.log(`Server started listening on http://localhost:${port}`));
