import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count :0
        }
    }

    increment(){
        this.setState((prevState, props) => ({
            count : prevState.count + 1
        }), () => {console.log(this.state.count)})
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        
    }
  render() {
    return (
      <div>
        count : {this.state.count}
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
