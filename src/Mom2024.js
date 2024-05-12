import React from 'react';
import NavigationBar from './NavBar';
import card from './imgs/mom/mom_card.png';
var heart = "<3";

function Mama() {

    return (
        <div>
            <NavigationBar/>
            <h1>Happy Mother's Day!</h1>
            <h2>O Wonderful Mother of Mine...</h2>
            <p><img src={card} alt="card" width="90%"  /></p>
            <hr />
            <h5>You are the greatest mom I could ever ask for! I miss you a bunch and I can't wait to see you again soon ... have a great day! I love you! </h5>

            <br/>
            <h4>Love,</h4>
            <h4>&emsp; &emsp; Mark {heart} </h4>

        </div>
    );

}

export default Mama;