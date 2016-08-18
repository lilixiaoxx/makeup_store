var mongoose =  require('mongoose');


var questionSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  question: {type: String, required: true},

});

module.exports = mongoose.model('questions', questionSchema);

