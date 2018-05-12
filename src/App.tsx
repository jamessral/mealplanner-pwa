import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Ingredients from './Ingredients';
import Navbar from './Navbar';
import Recipes from './Recipes';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Navbar />
            <Route path="/ingredients" component={Ingredients} />
            <Route path="/recipes" component={Recipes} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
