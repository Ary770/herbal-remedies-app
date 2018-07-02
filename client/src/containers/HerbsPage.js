import React from 'react';
import { connect } from 'react-redux';
import Herbs from '../components/Herbs';
import { Route } from 'react-router-dom';
import HerbShow from './HerbShow';


const HerbsPage = (props) => {
  const {match, herbs} = props;

  return (
    <div className='row'>
      <h2>Herbal Remedies</h2>

      {herbs.length === 0 ? null: <Herbs url={match.url} herbs={herbs}/>}

      <Route path={`${match.url}/:herbId`} component={HerbShow}/>

    </div>
  )
}

const mapStateToProps = state => {
  return ({
    herbs: state.herbs.herbs
  })
}

export default connect(mapStateToProps)(HerbsPage);
