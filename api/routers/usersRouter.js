const usersRouter= require ('express').Router();

const users = [{
    "id": 0,
    "name": "string",
    "email": "string",
    "birthDate": "string",
    "address": {
      "id": 0,
      "street": "string",
      "state": "string",
      "city": "string",
      "country": "string",
      "zip": "string"
      }
}];

const usersAdded = [{
    }];

usersRouter.get('/', (request, response) => {
    response.json(users);	
});

usersRouter.post('/', (request, response) => {
	const datos = request.body;
	console.log("Los datos son: ", datos);
        usersAdded.push(datos);
	response.json(usersAdded);
});

usersRouter.put('/', (request, response) => {
    response.json(users);
});

usersRouter.delete('/', (request, response) => {
    response.json(users);
});


//usersRouter.get('/:id', (request, response) => {
//usersRouter.get('/:id', (request, response) => {
//	response.json(usersAdded);
//});
module.exports = usersRouter;
