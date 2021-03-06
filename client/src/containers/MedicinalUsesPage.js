import React from 'react';
import { connect } from 'react-redux';
import MedicinalUsesList from './MedicinalUsesList';
import HerbShow from './HerbShow';
// import Alert from '../components/Alert'
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/medicinalUses';
import ReactLoading from 'react-loading';

class MedicinalUsesPage extends React.Component {

  componentDidMount() {
    this.props.actions.fetchMedicinalUses();
  }

  handleSearch = (event) => {
    const muInput = event.target.value
    this.props.actions.searchMedicinalUse(muInput)
  }

  fetchHerbsHandler = (event, muId) => {
    event.preventDefault();
    this.props.history.replace('/medicinal_uses')
    this.props.actions.fetchMedicinalUseHerbs(muId)
  }

  render() {
    const target = this.props.target;

    return (
      <div className="row">
        <div className="col-lg-6">
          <h3>Medicinal Uses</h3>
          <input
            type="text"
            className="form-control"
            onChange={(event) => this.handleSearch(event)}
            placeholder="Search for..."
            />
          <br></br>

          { target.length !== 0 ?
            <MedicinalUsesList
              fetchHerbsHandler={this.fetchHerbsHandler}
              url={this.props.match.url}
              medicinalUses={target}/>
            :
            <div>
              <ReactLoading type='bubbles' color='#047800'/>
              <p className='text-muted flicker-animation'>Preparing Hebal Remedies...</p>
            </div>
          }

          <Route path={`${this.props.match.url}/herbs/:herbId`} component={HerbShow}></Route>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    target: state.medicinalUses.target,
    error: state.herbs.error
  })
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicinalUsesPage)
