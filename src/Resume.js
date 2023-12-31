import React from 'react';
import NavigationBar from './NavBar';
import mastercardLogo from './imgs/logos/mastercard-logo.jpg';
import ssiLogo from './imgs/logos/ssi.jpg';
import ubcLogo from './imgs/logos/ubc.png';
import codethewayLogo from './imgs/logos/codeTheWay.jpeg';
import './index.css';

function Resume() {
  return (
    <div>
      <NavigationBar />
      <h1>Resume</h1>
      <h2 id="work-experience"><u>Work Experience</u></h2>
      <p><a href="https://www.mastercard.ca/en-ca.html" target='_blank' rel='noreferrer'><img src={mastercardLogo} alt="Mastercard Logo" width="150" /></a></p>
        <ins><h3>Summer 2023</h3></ins> <p>I returned for a summer internship at <a href="https://www.mastercard.ca/en-ca.html" target='_blank' rel='noreferrer'><strong><u>Mastercard</u></strong></a> in Vancouver with the Data Science Services team. I enjoyed working with an amazing team on projects in the following areas:</p>
          <ul>
            <li>Monolithic & Microservice Architectures</li>
            <li>REST APIs</li>
            <li>Springboot Development</li>
            <li>Automated Release Process</li>
            <li>API Smoke Tests via Jenkins</li>
          </ul>
        <h3><ins>May-Dec 2022</ins></h3> <p>I was fortunate to land a 7 month co-op at <a href="https://www.mastercard.ca/en-ca.html" target='_blank' rel='noreferrer'><strong><u>Mastercard</u></strong></a> in Vancouver on the Decision Management Platform. During this mostly remote experience, I gained skills in the following areas:</p>
          <ul>
            <li>Maven Framework</li>
            <li>Oracle SQL</li>
            <li>Jenkins Automated Pipelines</li>
            <li>CHEF Habitat</li>
            <li>Selenium</li>
            <li>Agile Methodology Experience</li>
          </ul>
      <hr/>
      <p><a href="https://www.spacescience.org/index.php" target='_blank' rel='noreferrer'><img src={ssiLogo}alt="SSI Logo" width="150" /></a></p>
        <h3><ins>Summer 2020 and Summer 2021</ins></h3><p> I worked for the <a href="https://www.spacescience.org/index.php" target='_blank' rel='noreferrer'><strong><u>Space Science Institute</u></strong></a>, starting from scratch to build a database and a web-based query interface for data from the NASA Mars Reconnaisance Orbiter. I learned valuable skills in the following areas:</p>
          <ul>
            <li>PHP</li>
            <li>HTML / CSS</li>
            <li>PostgreSQL</li>
            <li>Python</li>
            <li>Shell scripting</li>
          </ul>
      <hr/>
      <p><a href="https://www.codetheway.org/" target='_blank' rel='noreferrer'><img src={codethewayLogo} alt="Code The Way Logo" width="150" /></a></p>
        <h3><ins>Summer 2019</ins></h3><p> I worked for <a href="https://www.codetheway.org/" target='_blank' rel='noreferrer'><strong><u>Code the Way</u></strong></a>, where myself and my high school peers worked to build a full-stack application for a local nonprofit. This experience gave me an intro to the following skills:</p>
          <ul>
            <li>Full-stack Development in C#</li>
            <li>Agile Methodologies</li>
            <li>Meeting with Clients to Receive Feedback</li>
          </ul>
      <hr/>
      <h2 id="school-experience"><u>Education</u></h2>
      <p><a href="https://www.ubc.ca/" target='_blank' rel='noreferrer'><img src={ubcLogo} alt="UBC Logo" width="150" /></a></p>
      <p>In my education at the <a href="https://www.ubc.ca/" target='_blank' rel='noreferrer'><strong><u>University of British Columbia</u></strong></a>, I grew from a first-year who (sort of) knew how to code into a graduate with robust knowledge of many different aspects of computer science, including:</p>
      <ul>
        <li>Machine Learning</li>
        <li>Computer Operating Systems and Memory Management</li>
        <li>Various Algorithms and their Implementations</li>
        <li>Data Structures</li>
        <li>Databases</li>
        <li>Software Development</li>
        <li>Computer Networking / Internet Design</li>
        <li>Video Game Development (<strong><ins>check out our game <a href="https://andrewting.itch.io/gravity-greens" target='_blank' rel='noreferrer'>HERE</a>!</ins></strong>)</li>
      </ul>
      <p>I was lucky to attend such a high-quality institution where I got to learn from some truly remarkable instructors.</p>

    </div>
  );
}

export default Resume;