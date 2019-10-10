import "./User.css";
import React from "react";
import InputComp from "../InputComp"
import Table from "../Table/Table";

function template() {
    const {name,rno,email,loc} =this.state.dataObj;
    const {headers,data,rows,isUpdate} =this.state;

  return (
    <div className="user">
      <h1>User</h1>
      <InputComp label="Name" type='text' id="name" val={name} fnPrepareData11={this.fnPrepareData} />
      <InputComp label="Rno" type='text' id="rno" val={rno} fnPrepareData11={this.fnPrepareData} />
      <InputComp label="Email" type='text' id="email" val={email} fnPrepareData11={this.fnPrepareData} />
      <InputComp label="Location" type='text' id="loc" val={loc} fnPrepareData11={this.fnPrepareData} />
   
   {  
        isUpdate ? <input type='button' value='update' onClick={this.fnUpdate.bind(this)}  />:
        <input type='button' value='Register' onClick={this.fnReg.bind(this)} />
}
      <p>
        {this.state.msg}
      </p>
      <h1>users</h1>
      <Table headers={headers} data={data} rows={rows} fnEdit={this.fnEditData} fnDelete={this.fnDeleteData} />
    
    
    </div>
  );
};

export default template;
