const Band = require('../models/band.model');

// CRUD Below -------------------------------------------------------------

// Create
const createNewBand = (req, res) => {
    Band.create(req.body)
        .then((newBand) => {
            res.json({ newBand });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

// Get / Read All
const getAllBands = (req, res) => {
    Band.find()
        .then((allBands) => {
            res.json(allBands);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

// Get / Read One
const getOneBand = (req, res) => {
    Band.findOne({ _id: req.params.id })
        .then((queriedBand) => {
            res.json(queriedBand);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

// Update - with validators so we can capture and display errors on front end
const updateBand = (req, res) => {
    Band.findOneAndUpdate({ _id: req.params.id }, req.body, {
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

// Delete
const deleteBand = (req, res) => {
    Band.deleteOne({ _id: req.params.id })
        .then((deletedResponse) => {
            res.json({ deletedResponse });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

// --------------------------------------------------------------------------

const updateStatusBand = (req, res) => {
    Band.findOneAndUpdate({ _id: req.params.id }, req.body, {
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
    createNewBand,
    getOneBand,
    getAllBands,
    updateBand,
    deleteBand,
    updateStatusBand,
};