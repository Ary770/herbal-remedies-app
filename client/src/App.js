import React, { Component } from 'react';
import HerbsPage from './containers/HerbsPage';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Navbar />
            <Route path="/herbs" component={HerbsPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
