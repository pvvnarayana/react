import React, { Component } from 'react'

class ClassClick extends Component {
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>CLick</button>
      </div>
    )
  }

  clickHandler(){
      console.log("Click button")
  }
}

export default ClassClick