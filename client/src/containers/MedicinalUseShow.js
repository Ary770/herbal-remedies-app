import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
// import PanelWrapper from '../components/PanelWrapper';
import Herbs from '../components/Herbs'
import { updatePath } from '../utilities/functions'
import Aux from '../HOC/Aux'
// import { bindActionCreators } from 'redux';
// import * as actions from '../actions/medicinalUses';

class MedicinalUseShow extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.herbs === nextProps.herbs) {
      updatePath(this.props);
    }
  }

  render () {
    let displayHerbs = null;

    if (this.props.herbs.length !== 0 ) {
      displayHerbs = <Herbs herbs={this.props.herbs} />
    }

    return (
      <div >
        {displayHerbs}
      </div>
    )
  }
}
// <Herbs url={this.props.match.url} herbs={herbs}/>

const mapStateToProps = (state, ownProps) => {
  const medicinalUse = state.medicinalUses.target.find(mu =>
    mu.id.toString() === ownProps.match.params.medicinalUseId
  )
  // const herbs = state.medicinalUses.herbs
  //
  // if (medicinalUse && herbs != [] ) {
  //   return {
  //     medicinalUse,
  //     herbs
  //    }
  // } else {
  //   return { medicinalUse: {} }
  // }
  return({
    medicinalUse: medicinalUse,
    herbs: state.medicinalUses.herbs
  })
}

export default connect(mapStateToProps)(MedicinalUseShow);
