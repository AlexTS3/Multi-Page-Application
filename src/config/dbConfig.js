const mongoose = require('mongoose');

const uri = 'mongodb://0.0.0.0:27017/holidays';

async function dbConnect() {
    await mongoose.connect(uri);
}

module.exports = dbConnect;