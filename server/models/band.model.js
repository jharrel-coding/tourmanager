const mongoose = require('mongoose');

const BandSchema = new mongoose.Schema ({
    bandName: {
        type: String,
        required: [true, "You must enter a band name"],
    },
    singer: {
        type: String,
        required: [true, "You must enter a singers name"],
    },
    guitarist: {
        type: String,
        required: [true, "You must enter a guitarists name"],
    },
    bass: {
        type: String,
        required: [true, "You must enter a bassists name"],
    },
    drummer: {
        type: String,
        required: [true, "You must enter a drummers name"],
    },
    secondGuitarist: {
        type: String
    },
    thirdGuitarist: {
        type: String
    },
    hometown: {
        type: String
    },
    bandImage: {
        type: String
    },
    description: {
        type: String
    },
    photo1: {
        type: String
    },
    photo2: {
        type: String
    },
    photo3: {
        type: String
    },
    photo4: {
        type: String
    },
}, {timestamps: true});

module.exports = mongoose.model('Band', BandSchema)