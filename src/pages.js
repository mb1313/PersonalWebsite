import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GeneralInfo from './PersonalInfo';
import Resume from './Resume';
import SideProjects from './SideProjects';
import GravityGreens from './GravityGreens';

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneralInfo/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/side-projects" element={<SideProjects/>} />
        <Route path="/gravity-greens" element={<GravityGreens/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;