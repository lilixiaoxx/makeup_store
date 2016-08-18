var mongoose =  require('mongoose');



var productSchema = new mongoose.Schema({
  category: {type: String, required: true},
  name: {type: String, required: true},
  effect: {type: String, required: true},
  url: {type: [String], required: true},
  ingredient: {type: String, required: true},
  goodfor_typeofpeople: {type: String, required: true},
});

module.exports = mongoose.model('products', productSchema);

