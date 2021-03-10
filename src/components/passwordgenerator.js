import charSets from "../charSets" ;
import React, { Component } from 'react';
class PasswordGenerator extends Component {
  constructor(props){
    super(props);
    this.state = {
        passwordlength: 0,
        upperCaseChar: false,
        lowerCaseChar: false,
        NumbersChar: false,
        SymbolsChar: false,
    }
  }
  getCriteria = () => {
      alert("this is an alert")
         const passwordlength =prompt("How long is the password? 8-128");
         const upperCaseChar =window.confirm("Do you want uppercase letters?");
         const lowerCaseChar =window.confirm("Do you want lowercase letters?");
         const NumbersChar =window.confirm("Do you want numbers?");
         const SymbolsChar =window.confirm("Do you want symbols?");
      if(upperCaseChar){
        console.log("Success")
      }
      if(lowerCaseChar){
        console.log("Success")
      }
      if(NumbersChar){
        console.log("Success")
      }
      if(SymbolsChar){
        console.log("Success")
      }
       this.setState({
        passwordlength: 10,
        upperCaseChar: ("ABCDEFGHIJKLMNOPQRSTUVWXTZ"),
        lowerCaseChar: ("abcdefghijklmnopqrstuvwxyz"),
        NumbersChar: ("0123456789"),
        SymbolsChar: ("!'+,-./<>=?[]_{}|~@#$%^&*():;")
       })
       
  }
  // add all your methods for generating a password from the above state
  render() {
    // run all the above methods to calculate the password before rendering    
    return (
      <div>
         <button onClick={this.getCriteria}>Generate</button>
      </div>
    )
  }
}
export default PasswordGenerator
