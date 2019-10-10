import "./MenuList.css";
import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from "../Home/index";
import AboutUs from "../AboutUs/index";
import Contact from "../Contact/index"
import User from "../User/index"

function template() {
  return (
    <div className="menu-list">
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to ='/home'>Home</Link></li>
            <li><Link to ='/AboutUs'>AboutUs</Link></li>
            <li><Link to ='/Contact'>Contact</Link></li>
            <li><Link to ='/User'>User</Link></li>

          </ul>
          <Route path="/" exact component={Home} />
          <Route path="/home"  component={Home} />

          <Route path="/AboutUs"  component={AboutUs} />
          <Route path="/Contact"  component={Contact} />
          <Route path="/User"  component={User} />


        </div>
      </BrowserRouter>

    </div>
  );
};

export default template;


