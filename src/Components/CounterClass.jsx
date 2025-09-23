import React from 'react'

class CounterClass extends React.Component  {
  constructor(){
    super();
    this.state = {count : 0};

  }
// first way
// React calls it via onClick={this.increment}, the value of this may become undefined
//     this.increment = this.increment.bind(this);
//   this.decrement = this.decrement.bind(this);
//   this.reset = this.reset.bind(this);
//   }
//     increment(){
//         this.setState({count: this.state.count +1});
//     }
//     decrement(){
//         this.setState({count: this.state.count -1});
//     }
//    reset(){
//         this.setState({count: 0});
//     }



// ----------------------------------------
// 2nd way of accesing the functon by using function expression
increment = () => {
  this.setState({count: this.state.count +1});
}

decrement = () => {
  this.setState({count: this.state.count -1});
}

reset = () => {
  this.setState({count: 0});
}


    render(){
        return(
            <>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
            </>
        )
    }
  
}

export default CounterClass