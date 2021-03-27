import charSets from "../charSets" ;
import React, { Component } from 'react';
const upperCaseChar= "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        const lowerCaseChar="abcdefghijklmnopqrstuvwxyz";
        const  NumbersChar= "0123456789";
        const SymbolsChar= "!'+,-./<>=?[]_{}|~@#$%^&*():;"
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
        passwordlength, 
        upperCaseChar,
        lowerCaseChar,
        NumbersChar,
        SymbolsChar,
       })
       
  }
  // add all your methods for generating a password from the above state
  render() {
    // run all the above methods to calculate the password before rendering    
    var lowerChar = (lowerCaseChar) ? "abcdefghijklmnopqrstuvwxyz" : "";
   var upperChar = (upperCaseChar) ? "ABCDEFGHIJKLMNOPQRSTUVWXTZ" : "";
    var numChars = (NumbersChar) ? "0123456789" : "";
    var specialChar = (SymbolsChar) ? "!'+,-./<>=?[]_{}|~@#$%^&*():;" : "" ;



    var char = upperChar + lowerChar + numChars + specialChar;

    const generatePassword=() =>{
      var passwd = '';
      
  
      for ( let i=0;i<this.state.passwordlength;i++) {
       
        var x = Math.floor(Math.random() * char.length);
        passwd = passwd + (char[x]);
  
      }
    
      return passwd;
    
    }
  

    return (
      <div>
        <div>{generatePassword()}</div>
         <button onClick={this.getCriteria}>Generate</button>
      </div>
    )
  }
}
export default PasswordGenerator
