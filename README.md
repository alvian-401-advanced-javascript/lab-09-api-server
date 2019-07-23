# LAB - 09

## Documentation (Jsdoc/swagger)

### Author: Alvian Joseph

### Links and Resources
* [submission PR](https://github.com/alvian-401-advanced-javascript/lab-09-api-server)  
[![Build Status](https://www.travis-ci.com/alvian-401-advanced-javascript/lab-09-api-server.svg?branch=master)](https://www.travis-ci.com/alvian-401-advanced-javascript/lab-09-api-server)
### Command to add data to server  
```echo '{"name": "AJ", "description":"software dev"}' | http post :3000/api/v1/categories```

#### Modules
1) Models
    * model-main.js - exports single model with 4 REST methods
    * categories-model.js, products-model.js - both import and extend `Model()`
2) Schemas
    * categories-schema.js
    * products-schema.js
3) Routes
    * categories-routes.js
    * products.routes.js  
    Both export their routes and route handler functions
4) Error handlers
    * 404.js
    * error.js     

#### REST methods used
* GET
* POST
* PUT
* Delete


### Documentation
* n/a


#### Running the app
* nodemon index.js

#### Tests
npm test api.test.js
