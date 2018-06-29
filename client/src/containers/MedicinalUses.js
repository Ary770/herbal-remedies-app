import React from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/herbs';
// import { bindActionCreators } from 'redux';
// import Herbs from '../components/Herbs';
// import HerbShow from '../components/HerbShow';
import PanelWrapper from '../components/PanelWrapper'

class MedicinalUses extends React.Component {
  state = {
    text: '',
    showHerbs: null,
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleClick = () => {
    const medicinalUse = this.state.text.charAt(0).toUpperCase() + this.state.text.substr(1);
    const herbs = this.props.herbs;

    const matchingHerbs = herbs.filter(herb => herb.medicinal_uses && herb.medicinal_uses.includes(medicinalUse));

    if (matchingHerbs) {
      this.setState({
        showHerbs: matchingHerbs
      })
    }
  }

  render() {
    const results = this.state.showHerbs;
    let herbs = null;

    // if (results) {
    //   herbs = <Herbs herbs={results}/>
    // }

    if (results) {
      herbs = results.map(herb =>
        <PanelWrapper key={herb.id} herb={herb}/>
      )
    }

    return (
      <div>
        <h1>Search by Medicinal Uses</h1>
        {console.log('Herbs: ', this.props.herbs)}
        <div className="col-lg-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              onChange={(event) => this.handleChange(event)}
              placeholder="Search for..."
              />
            <span className="input-group-btn">
              <button
                onClick={this.handleClick}
                className="btn btn-default"
                type="button">Search!
              </button>
            </span>
          </div>
          <br></br>
          {herbs}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    herbs: state.herbs.herbs
  })
}

// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

export default connect(mapStateToProps)(MedicinalUses);
