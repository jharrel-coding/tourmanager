import './App.css';
import NavBar from './components/NavBar';
import AllBands from './components/band/AllBands';
import CreateBand from './components/band/CreateBand';
import BandDetails from './components/band/BandDetails';
import UpdateBand from './components/band/UpdateBand';

import AllTours from './components/tour/AllTours';
import CreateTour from './components/tour/CreateTour';
import TourDetails from './components/tour/TourDetails';
import UpdateTour from './components/tour/UpdateTour';

import HomePage from './components/HomePage'

import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="masthead">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AllBands />} path="/band/" />
          <Route element={<CreateBand />} path="/band/new" />
          <Route element={<BandDetails/>} path="/band/:id" />
          <Route element={<UpdateBand/>} path="/band/:id/update" />
          
          <Route element={<AllTours/>} path="/tour" />
          <Route element={<CreateTour/>} path="/tour/new" />
          <Route element={<TourDetails/>} path="/tour/:id" />
          <Route element={<UpdateTour/>} path="/tour/:id/update" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
