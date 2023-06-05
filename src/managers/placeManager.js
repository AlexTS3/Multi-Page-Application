const Place = require('../models/Place');

exports.getAll = async (name, activity, vehicle) => {
    let result = await Place.find().lean();

    if (name) {
        result = result.filter(place => place.typeActivity.includes(typeActivity));
    }

    if (activity) {
        result = result.filter(place => place.activity.includes(activity));
    }

    if (vehicle) {
        result = result.filter(place => place.vehicle.includes(vehicle));
    }

    return result;
};

exports.getOne = (placeId) => Place.findById(placeId);

exports.create = async (placeData) => {

    const place = new Place(placeData);
    await place.save();

    return place;
}