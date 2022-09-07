const mongoose = require('mongoose');

const BandSchema = new mongoose.Schema ({
    bandName: {
        type: String,
        required: [true, 'A band name is required'],
        minLength: [3, 'Campaign Title must be at least 3 characters'],
    },
    bandMembers: [
        {
            memberName: String,
            instrument: String,
        }
    ],
    description: {
        type: String,
    },
    tourDates: [
        {
            showDate: Date,
            venue: String,
            capcity: Number,
            city: String,
            state: String,
        }
    ],
}, {timestamps: true});

module.exports = mongoose.model('Band', BandSchema)