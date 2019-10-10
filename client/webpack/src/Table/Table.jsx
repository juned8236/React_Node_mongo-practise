import "./Table.css";
import React from "react";
import Mask from "../Mask/Mask";

function template() {
  const {headers,data,rows} = this.props;

  return (
    <div className="table">
   <table border='1px'>
           <tr>
              {
                headers.map((v,i)=>{
                    return <th>{v}</th>
                })
              }
               <th>Edit</th>
              <th>Delete</th>
              
           </tr>
           {data.map((o,i)=>{
             return <tr>
               {
                 rows.map((k,i)=>{
                   return <td>{o[k]}</td>
                 })
               }
               <td><input type='button' value='edit' onClick={this.fnEdit.bind(this,o)} /></td>
                      <td><input type='button' value='delete' onClick={this.fnDelete.bind(this,o)} /></td>
              
               
             </tr>
           })}

           

        </table>
        { 
          this.state.isShowMask && < Mask fnConfirm ={this.fnConfirm} />
        }
    </div>
  );
};

export default template;
