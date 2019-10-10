import "./Mask.css";
import React from "react";

function template() {
  return (
    <div>
    <div className="mask"></div>

      <div>
        <h1> Are You Sure want to Delete</h1>
        <div>
          <input type='button' value='ok' onClick={this.fnConfirm.bind(this,'ok')} />
          <input type='button' value='No' onClick={this.fnConfirm.bind(this,'no')} />

        </div>
      </div>

    </div>
  );
};

export default template;
