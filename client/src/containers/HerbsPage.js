import React from 'react';
import { connect } from 'react-redux';
import Herbs from '../components/Herbs';
import { Route } from 'react-router-dom';
import HerbShow from './HerbShow';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/herbs';

const HerbsPage = (props) => {
  const {match, herbs} = props;

  const handleSearch = (e) => {
    const herb = e.target.value
    props.actions.searchHerb(herb)

    if (herb === "") {
      props.history.replace('/herbs')
    }
  }

  return (
    <div className='row'>
      <h2>Herbal Remedies</h2>
      <div className='col-sm-4'>
        <p>Search by medicinal uses, herbal properties or name:</p>
        <input
          type="text"
          onChange={e => handleSearch(e)}
          className="form-control"
          placeholder="Search for..."
          />

        {herbs.length === 0 ? null: <Herbs url={match.url} herbs={herbs}/>}
      </div>
      <Route path={`${match.url}/:herbId`} component={HerbShow}/>
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    herbs: state.herbs.target
  })
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HerbsPage);
