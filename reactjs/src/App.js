import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InitialMessageNormal from './components/InitialMessageNormal';
import InitialMessageEC6 from './components/InitialMessageEC6';
import SimpleFormES6 from './components/SimpleFormES6';
import NotSoSimpleForm from './components/NotSoSimpleForm';


/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org"
            target="_blank" rel="noopener noreferrer">Learn React</a>
        </header>
      </div>
    );
  }
}
export default App;*/

// below we implement changes making the component class a functional component

/*function App() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org"
            target="_blank" rel="noopener noreferrer">Learn React</a>
        </header>
      </div>
    );
  }
export default App;*/

// With the use of ES6 (ECMAScript 6) this can be further simplified

const InitialMessage2 = (props) => <div>this is an introduction to props by {props.myName}.</div>;
const EC6Message2 = ({myName}) => <div>alternate version using EC6 shortcut by {myName}.</div>;

const App = () => (
    <div className="App">
      <header className="App-header">
        <div>
          <InitialMessageNormal myName="Efe"/>
          <InitialMessageEC6 myName="Efe"/>
        </div>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org"
           target="_blank" rel="noopener noreferrer">Learn React</a>
          <div>
              <SimpleFormES6 SimpleFormES6/>
              <br/>
              <NotSoSimpleForm NotSoSimpleForm/>

          </div>
      </header>
    </div>
  );
export default App;
