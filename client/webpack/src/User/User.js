import React    from "react";
import template from "./User.jsx";
import ServerCall from "../services/serverCall";

class User extends React.Component {
  constructor(){
    debugger;
    super();
    this.state={
      'dataObj':{
        name: '',
        rno: '',
        email: '',
        loc: ''
      },
      'msg':'',
      'headers': ['ID', 'STD NAME', 'STD RNO', 'EMAIL', 'LOC'],
      'rows': ['id', 'name', 'rno', 'email', 'loc'],
      'data': [],
      'isUpdate': false


    }
    this.fnPrepareData=this.fnPrepareData.bind(this);
    this.fnReg=this.fnReg.bind(this);
    this.fnGetStudetns=this.fnGetStudetns.bind(this);
    this.fnEditData=this.fnEditData.bind(this);
    this.fnUpdate=this.fnUpdate.bind(this);
    this.fnGetStudetns();  
    this.fnDeleteData=this.fnDeleteData.bind(this);  


  }
  render() {
    return template.call(this);
  }

  fnPrepareData(key,value){
    // debugger;
    this.setState({
      dataObj:{
        ...this.state.dataObj,
           [key]:value
      }
    })
  }

  fnReg(){
    // debugger;
    ServerCall.fnPostReg('http://localhost:2020/web/std-reg',this.state.dataObj)
   .then(
     (res)=>{
      //  debugger;
      if (res.data && res.data.rowCount){
        this.fnGetStudetns();
        this.setState({
          'msg':'Registered Sucessfully',
          'dataObj': {
            name: '',
        rno: '',
        email: '',
        loc: ''
          }
        })
      }else {
        this.setState({
          'msg':'fail'
        })
      }
      }
   )
   .catch(
     ()=>{
       debugger;
     }
   )
  }
  fnGetStudetns() {
    debugger;
    ServerCall.fnGetReg('http://localhost:2020/web/std-list')
      .then(
        (res) => {
          this.setState({
            data: res.data.rows
          })
        }
      )
      .catch((res) => {
        this.setState({
          data: []
        })
      })
    }

    fnEditData(userData) {
     debugger;
     this.setState({
      dataObj: userData,
       isUpdate:true,
     })
    }
   fnUpdate(){
       // debugger;
    ServerCall.fnPostReg('http://localhost:2020/web/std-update',this.state.dataObj)
    .then(
      (res)=>{
       //  debugger;
       if (res.data && res.data.rowCount){
         this.fnGetStudetns();
         this.setState ({
           'msg':'Update Sucessfully',
           isUpdate:false,
           'dataObj': {
             name: '',
         rno: '',
         email: '',
         loc: ''
           }
         })
       }else {
         this.setState({
           'msg':'fail'
         })
       }
       }
    )
    .catch(
      ()=>{
        debugger;
      }
    )
   }
   fnDeleteData(id){
     debugger;
     ServerCall.fnGetReg(
      'http://localhost:2020/web/delete?id='+id
    )
    .then((res)=>{
      if (res.data && res.data.rowCount) {
        this.fnGetStudetns();
        this.setState({
          'msg': 'DElete Sucessfully',
        })
      } else {
        this.setState({
          'msg': 'fail'
        })
      }
    })
    .catch((res)=>{
      
    })
  }




  
}

export default User;
