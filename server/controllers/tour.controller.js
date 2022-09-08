const Tour = require('../models/tour.model');

// CRUD Below -------------------------------------------------------------

// Create
const createNewTour = (req, res) => {
    Tour.create(req.body)
        .then((newTour) => {
            res.json({ newTour });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

// Get / Read All
const getAllTours = (req, res) => {
    Tour.find()
        .then((allTours) => {
            res.json(allTours);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

// Get / Read One
const getOneTour = (req, res) => {
    Tour.findOne({ _id: req.params.id })
        .then((queriedTour) => {
            res.json(queriedTour);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

// Update - with validators so we can capture and display errors on front end
const updateTour = (req, res) => {
    Tour.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedTour) => {
            res.json({ updatedTour });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

// Delete
const deleteTour = (req, res) => {
    Tour.deleteOne({ _id: req.params.id })
        .then((deletedResponse) => {
            res.json({ deletedResponse });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

// --------------------------------------------------------------------------

const updateStatusTour = (req, res) => {
    Tour.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedAd) => {
            res.json({ updatedAd });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};


module.exports = {
    createNewTour,
    getOneTour,
    getAllTours,
    updateTour,
    deleteTour,
    updateStatusTour,
};