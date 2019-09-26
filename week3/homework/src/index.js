'use strict';

// TODO: Write the homework code in this file

const Express = require('express');
const fs = require('fs');
const app = new Express();

// Use built-in JSON middleware to automatically parse JSON
app.use(Express.json());

   
         // app.get-readTodo
// readTodo (GET /todos/:id)
// Get a single to-do with ID :id
app.get('/todos/:id', (req, res) =>{
    let list = readList();
    let indexId = list[]
    res.send(req.params.id) //e.g. http://localhost:3000/todos/1 prints 1
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
    let list = fs.readFileSync('list.txt');
    return JSON.parse(list);
  }

  function writeList(list) {
    fs.writeFileSync ('list.txt', JSON.stringify(list))
  }
  writeList([{text: "todo 1", done: false}, {text: "todo 2", done: false}, {text: "todo 3", done: false}, {text: "todo 4", done: false}, {text: "todo 5", done: false}]);

const port = process.env.PORT || 3000;  
app.listen(port, () => console.log(`Server started listening on http://localhost:${port}`));
    


