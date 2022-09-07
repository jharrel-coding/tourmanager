import './App.css';
import AllBands from './components/AllBands';
import CreateBand from './components/CreateBand';
import BandDetails from './components/BandDetails';
import UpdateBand from './components/UpdateBand';


import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AllBands />} path="/" />
          <Route element={<CreateBand />} path="/new" />
          <Route element={<BandDetails/>} path="/:id" />
          <Route element={<UpdateBand/>} path="/:id/update" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
