const BandController = require('../controllers/band.controller');

module.exports = (app) => {
    app.get('/api/band', BandController.getAllBands);
    app.get('/api/band/:id', BandController.getOneBand);
    app.post('/api/band/create', BandController.createNewBand);
    app.put('/api/band/:id', BandController.updateBand);
    app.delete('/api/band/:id', BandController.deleteBand);
};