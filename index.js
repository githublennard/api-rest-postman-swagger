const express = require('express');
const path = require('path');
const app = express();
const port = 3300;
const bodyParser = require('body-parser')
const server= require ('http').createServer(app);
const usersRouter = require ('./api/routers/usersRouter') 
const morgan = require('morgan');

app.use(morgan('dev'));
app.get ('/', (request, response)=> {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());

app.use('/getusers',usersRouter);

app.use('/createUsers',usersRouter);

app.use('/getusersById/:id',usersRouter);//excluyente path
//app.use('/getusersById',usersRouter);

app.use('/updateUsersById/:id',usersRouter);//excluyente path

app.use('/deleteUsersById/:id',usersRouter);//excluyente path

//app.use('/createUsers',usersRouter);
//app.use('/createUsers',usersRouter);

server.listen(port, () => {
   console.log("servidor running en puerto: ", port);	
});
