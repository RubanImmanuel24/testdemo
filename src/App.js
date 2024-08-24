import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import ManagedServices from './components/ManagedServices';
import Manpower from './components/Manpower';
import SoftwareTesting from './components/SoftwareTesting';
import Navbarheader from './components/Navbarheader';
import Footer from './components/Footer';
import About from './components/About';
import SRE from './components/SRE';
import CarouselComponent from './components/CarouselComponent';
import Contact from './components/Contact';
import CloudSecurity from './components/CloudSecurity';
function App() {
  return (
       <div className="App">
    <Navbarheader/>
    <Routes >
      <Route  path="/" element={<Home/>}/>
      <Route  path="/home" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/services" element={<Services/>}/>
      <Route  path="/24x7-sre" element={<SRE/>}/>
      <Route  path="/managed-services" element={<ManagedServices/>}/>
      <Route  path="/manpower-and-technology-consulting" element={<Manpower/>}/>
      <Route  path="/software-testing" element={<SoftwareTesting/>}/>
      <Route  path="/cloud-security" element={<CloudSecurity/>}/>
      <Route  path="/Contact" element={<Contact/>}/>
      </Routes>                        
    <Footer/>
  </div>
   
  );
}

export default App;
