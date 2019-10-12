import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';


class App extends React.Component {
  render(){
    return(
      <div className="App">
        {/* <h1>App Component </h1>
        <Greet name="Narayana"/>
        <Greet name="Ram"/>
        <Greet name="Vasmi">
        <p>This is Greet tag</p>
        </Greet>
        <Hello name="Narayana"/> */}
        {/* <Message/> */}
        <Counter />
        </div>
    );
  }
}

export default App;
