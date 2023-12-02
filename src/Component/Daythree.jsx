import React, { Component } from "react";

class Daythree extends Component{

constructor(){
    super()
    console.log("sup suresh");
}

render(){
    console.log("render");
}

componentDidMount(){
    console.log("componentDidMount");
    const resorce= fetch('https://jsonplaceholder.typicode.com/todos')
}


}