import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/herbs';
import { bindActionCreators } from 'redux';
import Herbs from '../components/Herbs';

class HerbsPage extends React.Component {
  componentDidMount() {
    if (this.props.herbs.length === 0) {
      this.props.actions.fetchHerbs();
    }
  }

  render() {
    return (
      <div>
        {this.props.herbs.length === 0 ? null: <Herbs herbs={this.props.herbs}/>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    herbs: state.herbs.herbs
  })
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HerbsPage);
