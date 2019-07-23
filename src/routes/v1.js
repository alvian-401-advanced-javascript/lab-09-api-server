'use strict';

const cwd = process.cwd();

const express = require('express');

const modelFinder = require(`${cwd}/src/middleware/model-finder.js`);

const router = express.Router();

router.param('model', modelFinder.load);

router.get('/api/v1/models', (request, response) => {
  modelFinder.list()
    .then(models => response.status(200).json(models));
});

router.get('/api/v1/:model/schema', (request, response) => {
  response.status(200).json(request.model.jsonSchema());
});

// Route Definitions
router.get('/api/v1/:model', handleGetAll);
router.get('/api/v1/:model/:id', handleGetOne);
router.post('/api/v1/:model', handlePost);
router.delete('/api/v1/:model/:id', handleDelete);
router.put('/api/v1/:model/:id', handlePut);


// ROUTE HANDLER FUNCTIONS
/**
 *runs get() function imported from model-main
 *creates new output object with requested data
 sends response with data if req is good
 other wise error
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function handleGetAll(request, response, next) {
  console.log('inside get function');
  request.model.get()
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
 **runs get() function imported from model-main
 *creates new output object with requested data
 sends response with data if req is good
 other wise error
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function handleGetOne(request, response, next) {
  // expects an array with the one matching record from the model
  request.model.get(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}
/**
 *runs post() method from imported from model-main
 *sends response back
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function handlePost(request, response, next) {
  console.log('inside postCat function');

  // expects the record that was just added to the database
  request.model.post(request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

/**
 *runs put() method imported from model-main
 *sends response with requested data
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function handlePut(request, response, next) {
  // expects the record that was just updated in the database
  request.model.put(request.params.id, request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}
/**
 *runs delete() method imported from model-main
 *sends response with requested data
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
function handleDelete(request, response, next) {
  // Expects no return value (resource was deleted)
  request.model.delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}

module.exports = router;