'use strict';

const express = require('express');
const router = express.Router();

const Todo = require('../models/todo/todo-model.js');
const todo = new Todo();


router.get('/api/v1/todo', getAllTodo);
router.post('/api/v1/todo', postTodo);
router.get('/api/v1/todo/:id', getOneTodo);
router.put('/api/v1/todo/:id', putTodo);
router.delete('/api/v1/todo/:id', deleteTodo);


// ROUTE HANDLER FUNCTIONS
/**
 *calls get() function imported from the
 extended todo model
 *sends response with requested data
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function getAllTodo(request, response, next) {
  console.log('inside get function');
  // expects an array of object to be returned from the model
  todo.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
}
/**
 *calls get() function imported from the
 extended todo model
 *sends response with requested data
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function getOneTodo(request, response, next) {
  // expects an array with the one matching record from the model
  todo.get(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function postTodo(request, response, next) {
  console.log('inside postTodo function');

  // expects the record that was just added to the database
  todo.post(request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}


function putTodo(request, response, next) {
  // expects the record that was just updated in the database
  todo.put(request.params.id, request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function deleteTodo(request, response, next) {
  // Expects no return value (resource was deleted)
  todo.delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}

module.exports = router;