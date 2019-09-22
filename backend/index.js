const express = require ('express');
const morgan = require ('morgan');
const path = require ('path');
const {mongoose} = require('./database');
const cors = require('cors');


const app = express();

//settings

app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());


app.use(cors());

//Routes
app.use('/user/login',require('./routes/User.js'));
app.use('/user/signup',require('./routes/User.js'));


//static files
// app.use(express.static(path.join(__dirname, 'public')));

//Starting the server

app.listen(app.get('port'), ()=>{
    console.log(`server on  port ${app.get('port')}`);
});