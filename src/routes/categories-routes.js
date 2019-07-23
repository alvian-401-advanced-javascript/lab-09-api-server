'use strict';

const express = require('express');
const router = express.Router();

const Categories = require('../models/categories/categories-model.js');
const categories = new Categories();


router.get('/api/v1/categories', getCategories);
router.post('/api/v1/categories', postCategories);
router.get('/api/v1/categories/:id', getCategory);
router.put('/api/v1/categories/:id', putCategories);
router.delete('/api/v1/categories/:id', deleteCategories);


// ROUTE HANDLER FUNCTIONS
/**
 *calls get() function imported from the
 extended categories model
 *sends response with requested data
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function getCategories(request, response, next) {
  console.log('inside get function');
  // expects an array of object to be returned from the model
  categories.get()
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
 extended categories model
 *sends response with requested data
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function getCategory(request, response, next) {
  // expects an array with the one matching record from the model
  categories.get(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function postCategories(request, response, next) {
  console.log('inside postCat function');

  // expects the record that was just added to the database
  categories.post(request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}


function putCategories(request, response, next) {
  // expects the record that was just updated in the database
  categories.put(request.params.id, request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function deleteCategories(request, response, next) {
  // Expects no return value (resource was deleted)
  categories.delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}

module.exports = router;