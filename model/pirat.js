const restful = require('node-restful');
const mongoose = restful.mongoose;
const Schema = mongoose.Schema;

//create pirat Schema & model

const PiratSchema = new mongoose.Schema({
	name:{
		type:String,
	    required:true
  },
    age:{
    	type: Number,
        //required:true

  },
    isCaptured:{
    	type: Boolean,
    	default:false

    }
});



module.exports = restful.model('pirat',PiratSchema);
