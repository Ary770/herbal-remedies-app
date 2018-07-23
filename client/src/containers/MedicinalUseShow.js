import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import PanelWrapper from '../components/PanelWrapper';
// import Herbs from '../components/Herbs'
// import { updatePath } from '../utilities/functions'
// import Aux from '../HOC/Aux'
// import { bindActionCreators } from 'redux';
// import * as actions from '../actions/medicinalUses';

class MedicinalUseShow extends React.Component {
  displayPanelHandler(event, herb) {
    console.log(herb)
  }

  render () {
    let displayHerbs = null;
    
    if (this.props.herbs.length !== 0 ) {
      //when user clicks on link, bring up Herb Panel with all herb properties, medicinal uses etc. Don't worry about routing at this point, just get it to work.
      displayHerbs = this.props.herbs.map(herb =>
        <li key={herb.id}>
          <Link to={`${this.props.url}/herbs/${herb.id}`} className='li-16px-style'>{herb.name}</Link>
        </li>
      )
    }
    //display bigger herb list
    return (
      <ul>
        {displayHerbs}
      </ul>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    herbs: state.medicinalUses.herbs
  })
}

export default connect(mapStateToProps)(MedicinalUseShow);
