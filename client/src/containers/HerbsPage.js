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
  }

  return (
    <div className='row'>
      <h2>Herbal Remedies</h2>
          <input
            type="text"
            onChange={e => handleSearch(e)}
            placeholder="Search for..."
            />
          <br></br>

      {herbs.length === 0 ? null: <Herbs url={match.url} herbs={herbs}/>}

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
