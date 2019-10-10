import React    from "react";
import template from "./Header.jsx";

class Header extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Header;
// template.call(this)
// we are importing Header.jsx  cuurent object 
// therefore using this

// if i am using template.bind(this)()
// it return one more function