import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="button is-white">White</a>
        <a className="button is-light">Light</a>
        <a className="button is-dark">Dark</a>
        <a className="button is-black">Black</a>
        <a className="button is-text">Text</a>
      </div>
    );
  }
}

export default App;
