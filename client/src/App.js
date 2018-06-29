import React, { Component } from 'react';
import HerbsPage from './containers/HerbsPage';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import MedicinalUses from './containers/MedicinalUses';
import Properties from './containers/Properties';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/herbs';

class App extends Component {
  componentDidMount() {
    if (this.props.herbs.length === 0) {
      this.props.actions.fetchHerbs();
    }
  }

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

const mapStateToProps = state => {
  return ({
    herbs: state.herbs.herbs
  })
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
