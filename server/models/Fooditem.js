const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodItemSchema = new Schema({}, { strict: false });
const foodData = mongoose.model('FoodItem', foodItemSchema, 'FoodItem');

const foodcategorySchema = new Schema({}, { strict: false });
const FoodCategory = mongoose.model('FoodCategory', foodcategorySchema, 'FoodCategory');

module.exports = {foodData,FoodCategory} ;