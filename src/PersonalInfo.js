import React from 'react';
import NavigationBar from './NavBar';
import RotatingPhotos from './photoGallery';

import linkedIn from './imgs/contact/linkedin.svg';
import email from './imgs/contact/email.png';
import github from './imgs/contact/github.png';
import spotify from './imgs/contact/spotify.png';

import fishermansTrail from './imgs/hiking/fishermans_trail.jpg'
import burtonHut from './imgs/hiking/burton_hut.jpg'
import chief from './imgs/hiking/chief.jpg'
import bakerLake from './imgs/hiking/baker_lake.jpg'
import capeCod from './imgs/hiking/cape_cod_sunset.jpg'
import capeCodMe from './imgs/hiking/cape_codNP.jpg'
import juanBridge from './imgs/hiking/juan_suspensionBridge.jpg'
import moose from './imgs/hiking/moose_and_me.jpg'
import robinLakes from './imgs/hiking/robin_lakes.jpg'
import robinLakesMe from './imgs/hiking/robin_lakes_me_film.jpg'
import robinLakesTrail from './imgs/hiking/trailWA.jpg'
import superiorSunset from './imgs/hiking/superior_sunset.jpg'
import table from './imgs/hiking/table_garibaldi.jpg'
import threeLakes1 from './imgs/hiking/three_lakes.jpg'
import threeLakes2 from './imgs/hiking/three_lakes2.jpg'
import yoho from './imgs/hiking/yoho.jpg'
import snowman from './imgs/hiking/snowman.jpg'
import deerDistrict from './imgs/hiking/deerDistrict.jpg'

import skiSunPeek from './imgs/skiing/sunpeeking.jpg';
import treesFilm from './imgs/skiing/trees_film.jpg';
import whiteout from './imgs/skiing/whiteout.jpg'
import bcridge from './imgs/skiing/mtn_views.jpg'

import greatTrek from './imgs/running/greatTrek.jpg'
import sooke from './imgs/running/sookePotholes.jpg'



function GeneralInfo() {
  return (
    <div>
      <NavigationBar />
      <h2>Introduction</h2>
      <p>I am in my final year of a Computer Science degree from the University of British Columbia, and will join Mastercard in Vancouver as a Software Engineer in August 2024.</p>
      <p>Some of my business interests include: payment systems; electrical infrastructure; and environmental sustainability.</p>
      <p> See my <ins><a href="/resume">resume page</a></ins> for more info on my work experiences.</p>
      <p>My personal passions include: running; the outdoors; the night sky; geography; music; art; puzzles; basketball; and breakfast.</p>
      <hr />
      <h2>Contact</h2>

      <p>
        <a href="https://www.linkedin.com/in/mark-browne-4419bb18a/" target='_blank' rel='noreferrer'><img src={linkedIn} alt="LinkedIn" width="75"/></a>
        <a href="https://github.com/mb1313" target='_blank' rel='noreferrer'><img src={github} alt="Github" width="75"/></a>
        <a href="mailto:markabrowne13@gmail.com" target='_blank' rel='noreferrer'><img src={email} alt="Email" width="75"/></a>
        <a href="https://open.spotify.com/user/markbrowne13" target='_blank' rel='noreferrer'><img src={spotify} alt="Spotify" width="75"/></a>
      </p>
      <hr/>
      <h2>Life in Photos</h2>
      <RotatingPhotos photos={[fishermansTrail, burtonHut, chief, bakerLake, capeCod, capeCodMe, juanBridge, moose, robinLakes, robinLakesMe, robinLakesTrail,
        table, superiorSunset, threeLakes1, threeLakes2, yoho, snowman, deerDistrict,
        skiSunPeek, treesFilm, whiteout, bcridge,
        greatTrek, sooke]} 
      captions={['In a hollowed-out behemoth in Lynn Valley', 'An epic night spent at a Garibaldi backcountry hut', 'View from the Chief on a spring day', 'Filling up water at Baker Lake', 'Beautiful sunset over Cape Cod', 'Golden hour at Cape Cod National Seashore',
      'Crossing a suspension bridge on the Juan de Fuca Trail', 'Me and a moose on Isle Royale in 2019', 'Incredible view at Robin Lakes in WA', 'Relaxing at Robin Lakes WA',
      'On the trail in WA', 'Campsite view of Table Mountain and Mount Garibaldi', 'Sunset over Lake Superior at our campsite in Isle Royale', 'Sunset at the lake in northern WI', 
      'Another stunning northern WI sunset', 'Emerald Lake in Yoho NP', 'Olaf and I in the Christmas spirit', '2021 NBA Championships Game 6 - I\'m a speck in the crowd at the Deer District',
      'Here Comes The Sun...over the mountains on a Whistler morning', 'Carving through the trees at Whistler', 'A low-visibilty day at Whistler', 'A much better visibility day in Whistler',
      'Breaking the tape at Great Trek 5k 2023', 'Workout on a gorgeous trail in Sooke BC']} />
    </div>
  );
}

export default GeneralInfo;