import React from "react";
import RotatingPhotos from "../photoGallery";
import NavigationBar from "../NavBar";

import site1 from '../imgs/website/main_page.png'
import site2 from '../imgs/website/photo_gallery.png'
import site3 from '../imgs/website/resume_page.png'
import site4 from '../imgs/website/projects_page.png'

function PersonalSite() {
    return (
        <div>
            <NavigationBar />
                <h1>Personal Website</h1>
                <hr/>
                <h5>During the 2023 holiday break, I decided to face my fears of front-end development and write a modest, personal webpage from scratch.</h5>
                <h5>With the help of LLMs, I built the website you're currently looking at using the React.js Framework.</h5>
                <RotatingPhotos photos={[site1, site2, site3, site4]}
                captions={["Landing Page", "Rotating Phtoto Gallery", "Resume Page", "Projects Page"]} />
                <h2>Learned Skills</h2>
                <h3>React Framework</h3>
                <p>One of my primary goals in this project was to become more familiar with one of the prominent web development frameworks, and for this purpose I chose
                    to use React. Although most of the code on this website is still written in HTMl / CSS, I gained the knowledge of how React projects are structured and
                    how easy it is to run and test your website in this framework. All the different packages available make React a powerful and relatively easy-to-use tool.
                </p>
                <h3>CSS Styling</h3>
                <p>Although I have had to code websites here and there in my education, I never really understood how CSS works. This project served as a good refresher, reminding
                    me on the layers (divs, spans, classes, etc) of a website and the numerous different styling options available for each one. I had fun testing out different styling
                    effects, and although I am no graphic designer, I reached a design that I am happy with.
                </p>
                <h3>Future Plans</h3>
                <p>Over the past week, I have enjoyed sharpening my web development skills and am glad that I did this project. However, I am aware there is a lot of room for improvement.
                    Somewhere down the line, perhaps a future winter break, I plan to update the styling with the new and hot web design style. Stay tuned!
                </p>
        </div>
    );
}

export default PersonalSite;