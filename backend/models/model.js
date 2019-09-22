const mongoose = require('mongoose');
const {Schema} = mongoose;

const ModelSchema = new Schema ({
    user: {type: String, required: true},
    password: {type: String, required: true}
});


module.exports=mongoose.model('Model', ModelSchema);