import React, { Component } from 'react';
import HerbsPage from './containers/HerbsPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import MedicinalUses from './containers/MedicinalUses';
import Properties from './containers/Properties';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/herbs';
import Welcome from './components/Welcome';
import Aux from './HOC/Aux';

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
          <Aux>
            <Navbar />
            <Route exact path ='/' component={Welcome}/>
            <Route path="/herbs" component={HerbsPage}/>
            <Route path="/medicinal-uses" component={MedicinalUses}/>
            <Route path="/properties" component={Properties}/>
          </Aux>
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
