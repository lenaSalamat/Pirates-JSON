const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

global.Promise = require('bluebird')

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://Pirates:Lena12345l*@ds119765.mlab.com:19765/pirates');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//initialize routes
app.use('/api',require('../routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
	//console.log(err)
	res.status(422).send({error:err.message});
})


//listen to requests

 const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.info(`listening on port ${PORT}`);
});