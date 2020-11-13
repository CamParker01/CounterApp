import React, {Component} from 'react';
import Minus from "./CountDown"
import Plus from "./CountUp"

class App extends Component{
    state = {
      count: 0
    
  }

  customInput = (number) =>{
    let value = parseInt(number)
    this.setState({
      count: this.state.count + value
    })
      
  }

      countUp = () => {
      this.setState({
        count: this.state.count + 1
      })
  }

  countDown=() =>{
    this.setState(
      {count: this.state.count -1}
    )
  }

  
  render() {
    return(
      <div>
        <div>{this.state.count}</div>
        <Plus countUp = {this.countUp} />
        <Minus countDown = {this.countDown} />

       
      </div>
    )
  }
}
export default App