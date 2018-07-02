import React from 'react';
import { connect } from 'react-redux';
import Herbs from '../components/Herbs';
import HerbShow from '../components/HerbShow';
import { Route } from 'react-router-dom';

class MedicinalUses extends React.Component {
  state = {
    text: '',
    showHerbs: null,
  }

  handleChange = (event) => {
    const text = event.target.value
    if (text !== "") {

      const medicinalUse = text.split(' ').map(
        w => w.charAt(0).toUpperCase() + w.substr(1)
      ).join(' ');

      const herbs = this.props.herbs;

      const matchingHerbs = herbs.filter(herb => herb.medicinal_uses && herb.medicinal_uses.includes(medicinalUse.trim()));

      if (matchingHerbs) {
        this.setState({
          showHerbs: matchingHerbs
        })
      }
    } else {
      this.setState({ showHerbs: null })
      this.props.history.replace('/medicinal-uses')
    }
  }

  render() {
    const results = this.state.showHerbs;
    let herbs = null;

    if (results) {
      herbs = <Herbs url={this.props.match.url} herbs={results}/>
    }

    return (
      <div className="row">
        <h1>Search by Medicinal Uses</h1>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            onChange={(event) => this.handleChange(event)}
            placeholder="Search for..."
            />
          <br></br>
          {herbs}
          <Route path={`${this.props.match.url}/:herbId`} component={HerbShow}/>
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

export default connect(mapStateToProps)(MedicinalUses);
