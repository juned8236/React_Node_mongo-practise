import "./Menu.css";
import React from "react";
import { HashRouter, Route } from 'react-router-dom';
// here from HashRouter we are importing Route

import AboutUs from '../AboutUs/index';
import Home from '../Home/index';
import Contact from '../Contact/index'
function template() {
  return (
    <div>
      <HashRouter>
        <div>
          <div className="menu">
            <a href="#/home">Home</a>
            <a href="#/AboutUs">AboutUs</a>
            <a href="#/Contact">Contact</a>
          </div>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/Contact' component={Contact} />
        </div>
      </HashRouter>
    </div>
  );
};

export default template;

// a means anchor tag 
// i need  these things in one block so can apply css in that block
// <a href="#/home">Home</a>
//         <a href="#/home">AboutUs</a>
//         <a href="#/home">Contact</a>
// therefore using div