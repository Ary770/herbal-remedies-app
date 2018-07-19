import React from 'react';
import { connect } from 'react-redux';
// import Herbs from '../components/Herbs';
// import HerbShow from './HerbShow';
import MedicinalUsesList from '../components/MedicinalUsesList';
import MedicinalUseShow from './MedicinalUseShow';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/medicinalUses';

class MedicinalUsesPage extends React.Component {

  componentDidMount() {
    this.props.actions.fetchMedicinalUses();
  }

  // handleSearch = (event) => {
  //   const input = event.target.value
  //   this.props.actions.medicinalUse(input)
  //
  //   if (input === "") {
  //     this.props.history.replace('/medicinal-uses')
  //   }
  // }

  render() {
    const { target, match } = this.props;
    let medicinalUses = null;

    if (target) {
      medicinalUses = <MedicinalUsesList url={this.props.match.url} medicinalUses={target}/>
    }

    return (
      <div className="row">
        <div className="col-lg-6">
          <h3>Search by Medicinal Uses</h3>
          <input
            type="text"
            className="form-control"
            onChange={(event) => this.handleSearch(event)}
            placeholder="Search for..."
            />
          <br></br>
          {medicinalUses}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    target: state.medicinalUses.target,
    herbs: state.herbs.target
  })
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicinalUsesPage)
