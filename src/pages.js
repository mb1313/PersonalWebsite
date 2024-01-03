import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import GeneralInfo from './PersonalInfo';
import Resume from './Resume';
import SideProjects from './SideProjects';
import GravityGreens from './project-pages/GravityGreens';
import PersonalSite from './project-pages/PersonalSite';

function Pages() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<GeneralInfo/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/side-projects" element={<SideProjects/>} />
        <Route path="/gravity-greens" element={<GravityGreens/>} />
        <Route path="/website-creation" element={<PersonalSite/>} />
      </Routes>
    </HashRouter>
  );
}

export default Pages;