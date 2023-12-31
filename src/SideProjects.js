import React from 'react';
import NavigationBar from './NavBar';

import gravityGreens from './imgs/GravityGreens/gravityGreens.png'

const projects = [
  { id: 1, title: 'Gravity Greens', photo: gravityGreens, caption: 'CPSC427 Video Game: Gravity Greens', date: 'Dec 30, 2023', link: "/gravity-greens"},
  { id: 2, title: 'Project 2', photo: '/path/to/project2.jpg', caption: 'Project 2 caption' },
];

const Box = ({ project }) => {
  return (
    <div className="box">
      <img src={project.photo} alt={project.title}/>
      <p>{project.caption}</p>
      <p><small>{project.date}</small></p>
      <button onClick={() => navigateToProjectPage(project.link)}>Learn More</button>
    </div>
  );
};

function navigateToProjectPage(link) {
  window.location.assign(link);
  // Replace with your navigation logic
  console.log(`Navigating to project ${link}`);
}

const BoxGrid = () => {
  return (
    <div className="grid">
      {projects.map((project) => (
        <Box key={project.id} project={project} />
      ))}
    </div>
  );
};

function SideProjects() {
  return (
    <div>
      <NavigationBar />
      <h1>Personal Side Projects</h1>
      <BoxGrid projects={projects} />
    </div>
  );
}

export default SideProjects;