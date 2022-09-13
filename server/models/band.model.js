const mongoose = require('mongoose');

const BandSchema = new mongoose.Schema ({
    bandName: {
        type: String
    },
    singer: {
        type: String
    },
    guitarist: {
        type: String
    },
    bass: {
        type: String
    },
    drummer: {
        type: String
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