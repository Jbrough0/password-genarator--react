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
  componentDidMount() {
      alert("this is an alert")
         const passwordlength =prompt("How long is the password? 8-128");
         const upperCaseChar =confirm("Do you want uppercase letters?");
         const  lowerCaseChar =confirm("Do you want lowercase letters?");
         const  NumbersChar =confirm("Do you want numbers?");
         const  SymbolsChar =confirm("Do you want symbols?");
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
      // this.setState({}) all the values from above
  }
  render() {
    return (
      <div></div>
    )
  }
}
