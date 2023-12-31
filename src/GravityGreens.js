import React from "react";
import RotatingPhotos from "./photoGallery";
import NavigationBar from "./NavBar";

import gravityGreens1 from './imgs/GravityGreens/gravityGreens.png'
import gravityGreens2 from './imgs/GravityGreens/gravityGreens2.png'
import gravityGreens3 from './imgs/GravityGreens/gravityGreens3.png'
import gravityGreens4 from './imgs/GravityGreens/gravityGreens4.png'

function GravityGreens() {
    return (
        <div>
            <NavigationBar />
                <h1>Gravity Greens</h1>
                <h2>Download for Windows <a href="https://andrewting.itch.io/gravity-greens" target='_blank' rel='noreferrer'><u>here</u></a></h2>
                <hr/>
                <h5>During the 2023 fall term, I took CPCS427 at UBC: Video Game Development. In this course, I had a great experience designing a video game with my team using C++ and OpenGL.</h5>
                <h5>Our game, Gravity Greens, is a golf roguelike - players need to leverage the gravity of the planets to get the ball into the black hole before running out of fuel.</h5>
                <RotatingPhotos photos={[gravityGreens2, gravityGreens1, gravityGreens3, gravityGreens4]}
                captions={["Tutorial level", "Level 2 featuring the ball trajectory", "Level 9 is a doozy", "Camera zoom as the ball is in motion"]} />
                <h2>Learned Skills</h2>
                <h3>Entity-Component Systems</h3>
                <p>This class was my first time ever coding in the Entity-Component framework. It was a great experience that opened my eyes to different ways of designing large-scale applications.
                    Because of this framework, we were able to efficiently render components and perform complex physical calculations many times every second. This allowed us to scale our levels to become more complex and difficult.
                </p>
                <h3>OpenGL Rendering</h3>
                <p>Personally, rendering was brand new to me before this class. I learned the basics of openGL, and was responsible for many parts of our rendering code, including writing vertex and fragment shaders.
                    Further, I wrote our function to render text on the screen, integrating our code with the FreeType library. I also used instanced rendering to create a particle effect when the player makes the ball into the hole.
                    I also wrote the spritesheets that animate the spinning planets, randomly changing their colors at a set time interval.
                    Finally, I wrote code that allows the player to toggle the game between windowed and fullscreen.
                </p>
                <h3>Random Function</h3>
                <p>One of the difficulties we faced is that we were randomly generating many values in each of our levels, but when the player exited and reloaded a level, we wanted those random values to be the same
                    (we didn't want to allow the user to keep regenerating the level until it was easy). Thus, I found a trick on stack overflow and added it to our game, essentially writing our own private
                    random generator that ensured the player could not manipulate our game this way. This gave me further insight into how typical random() functions operate, and how to ensure a consistent game experience for players.
                </p>
                <h3>Level Design</h3>
                <p>When we were scaling this game to add more levels, I helped write the code to design new levels. This gave me a new appreciation for this skill, because it was actually quite difficult.
                    It was a cool challenge to strike the right balance between level difficulty, complexity, and player enjoyment.
                </p>
                <h3>Reloadability</h3>
                <p>Of course, what would a video game be if you had to restart from nothing everytime you played it. For this game, I implemented our save/load system, allowing the player to save their progress.
                    To do this, I created a function that took the vital game fields and saved them to a json file, and another function to load these json values into the game. I enjoyed doing this, because it was fun
                    to think through which fields were necessary to save and how to efficiently store them.
                </p>

        </div>
    );
}

export default GravityGreens;