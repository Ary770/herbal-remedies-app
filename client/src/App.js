import React, { Component } from 'react';
import HerbsPage from './containers/HerbsPage';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import MedicinalUses from './containers/MedicinalUses';
import Properties from './containers/Properties';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Navbar />
            <Route path="/herbs" component={HerbsPage}/>
            <Route exact path="/medicinal-uses" component={MedicinalUses}/>
            <Route exact path="/properties" component={Properties}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
