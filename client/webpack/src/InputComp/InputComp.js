import React    from "react";
import template from "./InputComp.jsx";

class InputComp extends React.Component {
  render() {
    return template.call(this);
  }
  fnChange(e){
    // debugger;
    const {id,value} =e.target;
    this.props.fnPrepareData11(id,value);

  }
}

export default InputComp;
