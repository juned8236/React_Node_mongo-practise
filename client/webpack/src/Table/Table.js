import React    from "react";
import template from "./Table.jsx";

class Table extends React.Component {
  constructor(){
    // debugger;
    super();
    this.state={
      id:"",
      isShowMask:false
    }
    this.fnConfirm=this.fnConfirm.bind(this);
  }
  
  render() {
    return template.call(this);
  }
  fnEdit(rowData){
    debugger;
    this.props.fnEdit(rowData);

  }
  fnDelete(rowData){
    // debugger;
    this.setState({
      id:rowData.id,
      isShowMask:true
    });
    
  }
  fnConfirm(msg){
    debugger;
    this.setState({
      isShowMask:false
    })
    if(msg=='ok'){
      this.props.fnDelete(this.state.id)
    }
  }



}

export default Table;
