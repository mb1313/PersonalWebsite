import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import GeneralInfo from './PersonalInfo';
import Resume from './Resume';
import SideProjects from './SideProjects';
import GravityGreens from './project-pages/GravityGreens';
import PersonalSite from './project-pages/PersonalSite';
import Mama from './Mom2024';

function Pages() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<GeneralInfo/>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/side-projects" element={<SideProjects/>} />
        <Route path="/gravity-greens" element={<GravityGreens/>} />
        <Route path="/website-creation" element={<PersonalSite/>} />
        <Route path="/mothers_day_2024" element={<Mama/>} />
      </Routes>
      </HashRouter>
  );
}

export default Pages;