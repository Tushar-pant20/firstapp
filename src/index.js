import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Featured from "./components/featured";
import Footer from './components/footer';
// import { Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Featured/>
    <Footer/>
  </React.StrictMode>
);
 

