import React from 'react';
import { connect } from 'react-redux';
import PanelWrapper from './PanelWrapper';
import '../App.css';

const HerbShow = ({ herb }) => {
  const panel = <PanelWrapper key={herb.id} herb={herb}/>

  return (
    <div className='col-md-8'>
      <div className='Static'>
        {panel}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const herb = state.herbs.herbs.find(herb =>
    herb.id.toString() === ownProps.match.params.herbId
  )

  if (herb) {
    return { herb }
  } else {
    return { herb: {} }
  }
}

export default connect(mapStateToProps)(HerbShow);
