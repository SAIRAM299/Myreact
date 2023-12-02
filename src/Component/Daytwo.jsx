import React, { Component } from "react";


class Daytwo extends Component{
    state={
      count:0
    };
    handletickets=()=>{
      this.setState({count:this.state.count+1})
    };
        render(){
          return(
            <>
            <h1>moviename:{this.props.name}</h1>
            <h1>count:{this.state.count}</h1>
            <button onClick={this.handletickets} >add</button>
            <button onClick={this.props.function1}>total</button>
            </>
          )
        }
      }
  export default Daytwo