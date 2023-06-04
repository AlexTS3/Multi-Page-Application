const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: String,
    activity: String,
    description: String,
    imageUrl: String,
    vehicle: String
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;