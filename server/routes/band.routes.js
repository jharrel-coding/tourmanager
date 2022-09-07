const BandController = require('../controllers/band.controller');

module.exports = (app) => {
    app.post('/api/band', BandController.createNewBand);
    app.get('/api/band', BandController.getAllBands);
    app.get('/api/band/:id', BandController.getOneBand);
    app.put('/api/band/:id', BandController.updateBand);
    app.delete('/api/band/:id', BandController.deleteBand);
};

// patch status