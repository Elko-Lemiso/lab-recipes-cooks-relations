const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title : String,
  level : String,
  ingredients : [String],
  cuisine : String,
  dishType : String,
  image : String,
  duration : Number,
  creator : {type : mongoose.Schema.ObjectId, ref : 'Cook'},
  review: [{type : mongoose.Schema.ObjectId, ref : 'Review'}],
  created : Date
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;