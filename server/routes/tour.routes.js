const TourController = require('../controllers/tour.controller');

module.exports = (app) => {
    app.get('/api/tour', TourController.getAllTours);
    app.get('/api/tour/:id', TourController.getOneTour);
    app.post('/api/tour/create', TourController.createNewTour);
    app.put('/api/tour/:id', TourController.updateTour);
    app.delete('/api/tour/:id', TourController.deleteTour);
};