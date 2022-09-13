const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema ({
    tourDate: {
        type: Date,
        default: () => Date.now(),
        required: [true, "You must enter a show date"],
    },
    venueName: {
        type: String,
        required: [true, "You must enter a venues name"],
    },
    city: {
        type: String,
        required: [true, "You must enter what city the show will be in"],
    },
    state: {
        type: String,
        required: [true, "You must enter what state the show will be in"],
        enum: [
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming",
        ]
    },
    capacity: {
        type: Number
    },
    venueImage: {
        type: String
    },
}, {timestamps: true});

module.exports = mongoose.model('Tour', TourSchema)