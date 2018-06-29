import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/herbs';
import { bindActionCreators } from 'redux';
import Herbs from '../components/Herbs'

class MedicinalUses extends React.Component {
  state = {
    text: '',
    showHerbs: null,
  }

  componentDidMount() {
    if (this.props.herbs.length === 0) {
      this.props.actions.fetchHerbs();
    }
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

    if (results) {
      herbs = <Herbs herbs={results}/>
    }

    return (
      <div>
        <h1>Search by Medicinal Uses</h1>
        {console.log(this.state)}
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

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicinalUses);
