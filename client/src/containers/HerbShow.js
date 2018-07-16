import React from 'react';
import { connect } from 'react-redux';
import PanelWrapper from '../components/PanelWrapper';
import '../App.css';
import { updatePath } from '../utilities/handlers'

class HerbShow extends React.Component {
  state = {
    showPanel: true,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.herb === nextProps.herb) {
      updatePath(this.props);
    }
  }

  hidePanel = () => {
    this.setState({ showPanel: false})
    updatePath(this.props);
  }

  render () {
    const herb = this.props.herb;
    const panel = <PanelWrapper key={herb.id} herb={herb} hidePanel={this.hidePanel}/>

    return (
      <div className='col-md-6'>
        <div className='Static'>
          {console.log(this.state.showPanel)}
          {this.state.showPanel ? panel : null}
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
