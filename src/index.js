import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const block = (
    <div>
        <div className="topContainer">
            <div className="navbar">
            <img src="/images/ironhack-logo.svg" alt="ironhack logo"/>
            <img src="/images/menu-top.svg" alt="ironhack logo"/>
            </div>
            <div>
            <h1>Say hello to <br/> ReactJS</h1>
            <p>You will learn how to use <br/> the most popular frontend library, <br/> and become a super Ninja developer.</p>
            <button className="btn">Awesome!</button>
            </div>
        </div>
        
        <div className="bottomContainer">
            <div>
            <img className="icon-img" src="images/icon1.png" alt="" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
            </div>
            <div>
            <img className="icon-img" src="images/icon2.png" alt=""/>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
            <img className="icon-img" src="images/icon3.png" alt=""/>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components.</p>
            </div>
            <div>
            <img className="icon-img" src="images/icon4.png" alt=""/>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>


    </div>

)

ReactDOM.render(block, document.getElementById('root'));
