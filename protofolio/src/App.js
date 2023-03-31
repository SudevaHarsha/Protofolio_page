import './App.css';
import React from 'react';

import {Route,Router,BrowserRouter, Routes} from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/projects" element={<ProjectsPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  )
}

export default App;