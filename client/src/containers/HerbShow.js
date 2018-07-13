import React from 'react';
import { connect } from 'react-redux';
import PanelWrapper from '../components/PanelWrapper';
import '../App.css';

class HerbShow extends React.Component {
  state = {
    showPanel: true,
  }

  hidePanel = () => {
    this.setState({ showPanel: false})
    
    switch (this.props.match.path) {
      case '/herbs/:herbId':
        return this.props.history.replace('/herbs')
      case '/favorite-herbs/:herbId':
        return this.props.history.replace('/favorite-herbs')
      default:
        return null
    }
  }

  render () {
    const herb = this.props.herb;
    const panel = <PanelWrapper key={herb.id} herb={herb} hidePanel={this.hidePanel}/>

    return (
      <div className='col-md-6'>
        <div className='Static'>
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
