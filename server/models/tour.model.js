const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema ({
    tourDate: {
        type: Date
    },
    venueName: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    capacity: {
        type: Number
    },
}, {timestamps: true});

module.exports = mongoose.model('Tour', TourSchema)