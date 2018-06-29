import React from 'react';
import { connect } from 'react-redux';
import Herbs from '../components/Herbs';
import { Route } from 'react-router-dom';
import HerbShow from '../components/HerbShow'

class HerbsPage extends React.Component {
  render() {
    const {match, herbs} = this.props;

    return (
      <div className='row'>
        <h2>Healing Herbs</h2>
        {herbs.length === 0 ? null: <Herbs url={match.url} herbs={herbs}/>}

        <Route path={`${match.url}/:herbId`} component={HerbShow}/>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    herbs: state.herbs.herbs
  })
}

export default connect(mapStateToProps)(HerbsPage);
