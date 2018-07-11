import React from 'react';
import { connect } from 'react-redux';
import Herbs from '../components/Herbs';
import { Route } from 'react-router-dom';
import HerbShow from './HerbShow';
import Alert from '../components/Alert'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/herbs';

const HerbsPage = (props) => {
  const {match, herbs} = props;

  const handleSearch = (event) => {
    const input = event.target.value
    props.actions.searchHerb(input)

    if (input === "") {
      props.history.replace('/herbs')
    }
  }

  return (
    <div className='row'>
      <div className="col-lg-6">
        <h3>Top 65 Most Commonly Used Herbs</h3>
        <input
          type="text"
          onChange={e => handleSearch(e)}
          className="form-control"
          placeholder="Search by Medicinal Uses, Herbal Properties or Herb Name..."
        />
        <br/>
        { herbs.length === 0 ? null : <Herbs url={match.url} herbs={herbs}/> }
        { props.error ? <Alert error={props.error}/> :
          <Route path={`${match.url}/:herbId`} component={HerbShow}/> }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    herbs: state.herbs.target,
    error: state.herbs.error
  })
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HerbsPage);
