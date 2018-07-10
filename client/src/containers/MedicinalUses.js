import React from 'react';
import { connect } from 'react-redux';
import Herbs from '../components/Herbs';
import HerbShow from './HerbShow';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/herbs';

class MedicinalUses extends React.Component {

  handleSearch = (event) => {
    const input = event.target.value
    this.props.actions.medicinalUse(input)

    if (input === "") {
      this.props.history.replace('/medicinal-uses')
    }
  }

  render() {
    const target = this.props.herbs;
    let herbsList = null;

    if (target) {
      herbsList = <Herbs url={this.props.match.url} herbs={target}/>
    }

    return (
      <div className="row">
        <h2>Search by Medicinal Uses</h2>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            onChange={(event) => this.handleSearch(event)}
            placeholder="Search for..."
            />
          <br></br>
          {herbsList}
          <Route path={`${this.props.match.url}/:herbId`} component={HerbShow}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    herbs: state.herbs.target
  })
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicinalUses)
