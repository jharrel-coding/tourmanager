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
}, {timestamps: true});

module.exports = mongoose.model('Band', BandSchema)