import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : "Hello"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler.bind(this)}>Click1</button>
        <button onClick={() => this.clickHandler()}>Click2</button>
        <button onClick={this.clickHandler}>Click3</button>
      </div>
    )
  }

  clickHandler(){
      this.setState({
          message:"GoodBye...!"
      })
      console.log(this)
  }
}

export default EventBind
