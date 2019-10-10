import "./InputComp.css";
import React from "react";

function template() {
  const {label,type,id,val}=this.props
  return (
    <p className="input-comp">
        <b>{label}</b>: <input  id={id} type={type} value={val} onChange={this.fnChange.bind(this)} />
    </p>
  );
};

export default template;
