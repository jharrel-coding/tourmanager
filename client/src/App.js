import './App.css';
import NavBar from './components/NavBar';
import AllBands from './components/AllBands';
import CreateBand from './components/CreateBand';
import BandDetails from './components/BandDetails';
import UpdateBand from './components/UpdateBand';

import AllTours from './components/tour/AllTours';
import CreateTour from './components/tour/CreateTour';
import TourDetails from './components/tour/TourDetails';
import UpdateTour from './components/tour/UpdateTour';


import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route element={<AllBands />} path="/" />
          <Route element={<CreateBand />} path="/new" />
          <Route element={<BandDetails/>} path="/:id" />
          <Route element={<UpdateBand/>} path="/:id/update" />
          
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
