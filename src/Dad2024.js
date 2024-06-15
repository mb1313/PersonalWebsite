import React from 'react';
import NavigationBar from './NavBar';
import card from './imgs/dad/dad_card.png';
var smile = ":)";
var heart = "<3";

function Dad_day_2024() {

    return (
        <div>
            <NavigationBar/>
            <h1>Happy Father's Day!</h1>
            <p><img src={card} alt="card" width="90%"  /></p>
            <hr />
            <h5>You are the best dad ever! Thanks for always being so supportive and loving, I hope you have a wonderful day {smile}</h5>

            <br/>
            <h4>Love,</h4>
            <h4>&emsp; &emsp; Mark {heart} </h4>

        </div>
    );

}

export default Dad_day_2024;