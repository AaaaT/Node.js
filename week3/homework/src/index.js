'use strict';

// TODO: Write the homework code in this file

const Express = require('express');
const app = new Express();
// Use built-in JSON middleware to automatically parse JSON
app.use(Express.json());


   
app.get
readTodo
// readTodo (GET /todos/:id)
// Get a single to-do with ID :id

app.put
    updateTodo

app.delete
    deleteTodo
// clearTodos (DELETE /todos)
// Clears the list of to-dos

app.post
    createTodo
// markAsDone (POST /todos/:id/done)
// Sets the done flag of a single to-do to true

app.delete
    deleteTodo
// markAsNotDone (DELETE /todos/:id/done)
// Sets the done flag of a single to-do to false
    

    

    


