import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
// import PanelWrapper from '../components/PanelWrapper';
import Herbs from '../components/Herbs'
import { updatePath } from '../utilities/functions'
import Aux from '../HOC/Aux'

class MedicinalUseShow extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.medicinalUse === nextProps.medicinalUse) {
      updatePath(this.props);
    }
  }

  hidePanel = () => {
    updatePath(this.props);
  }

  render () {
    const medicinalUse = this.props.medicinalUse
    // const panel = <PanelWrapper key={herb.id} herb={herb} hidePanel={this.hidePanel}/>
    return (
      <div className='col-md-6'>
        <div className='Static'>

        </div>
      </div>
    )
  }
}
// <Herbs url={this.props.match.url} herbs={herbs}/>

const mapStateToProps = (state, ownProps) => {
  const medicinalUse = state.medicinalUses.medicinalUses.find(mu =>
    mu.id.toString() === ownProps.match.params.medicinalUseId
  )
  if (medicinalUse) {
    return { medicinalUse }
  } else {
    return { medicinalUse: {} }
  }
}

export default connect(mapStateToProps)(MedicinalUseShow);
