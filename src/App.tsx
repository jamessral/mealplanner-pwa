import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar'

class App extends React.Component {
  public render() {
    return (
      <div className="container">
       <Router>
         <Navbar />
       </Router>
      </div>
    );
  }
}

export default App;
