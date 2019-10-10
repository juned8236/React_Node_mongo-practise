import React    from "react";
import template from "./Mask.jsx";

class Mask extends React.Component {
  render() {
    return template.call(this);
  }
  fnConfirm(msg){
    debugger;
    this.props.fnConfirm(msg);
  }
}

export default Mask;
