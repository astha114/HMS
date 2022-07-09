import './App.css';
import React, { Component } from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Features from './components/Features';
import Reminder from './components/Reminder';
import FindMedicine from './components/FindMedicine';
import MedicalRecords from './components/MedicalRecords';
import DiseasePrediction from './components/DiseasePrediction';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <div>
      
        <BrowserRouter>
        <Navbar />
        <Intro />
        <Home />
          <Routes>
            <Route path='/Reminder' element={<Reminder />} /> 
            <Route path='/FindMedicine' element={<FindMedicine />} /> 
            <Route path='/MedicalRecords' element={<MedicalRecords />} /> 
            <Route path='/DiseasePrediction' element={<DiseasePrediction />} /> 
            {/* <Route path='/' element={<App />} />  */}
            
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}