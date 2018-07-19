import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import PanelWrapper from '../components/PanelWrapper';
import { updatePath } from '../utilities/handlers'

class HerbShow extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.herb === nextProps.herb) {
      updatePath(this.props);
    }
  }

  hidePanel = () => {
    updatePath(this.props);
  }

  render () {
    const herb = this.props.herb;
    const panel = <PanelWrapper key={herb.id} herb={herb} hidePanel={this.hidePanel}/>

    return (
      <div className='col-md-6'>
        <div className='Static'>
          {panel}
        </div>
      </div>
    )
  }
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
