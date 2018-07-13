import React from 'react';
import { connect } from 'react-redux';
import Herbs from '../components/Herbs';
import { Route } from 'react-router-dom';
import HerbShow from './HerbShow';
import Alert from '../components/Alert'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/herbs';

class HerbsPage extends React.Component {

  handleSearch = (event) => {
    const input = event.target.value
    this.props.actions.searchHerb(input)

    if (input === "") {
      this.props.history.replace('/herbs')
    }
  };

  likesHandler = (event) => {
    const herbId = event.target.dataset.id;

    if (this.props.liked.includes(herbId)) {
      return null
    } else {
      this.props.actions.likeHerb(herbId);
      this.props.history.replace('/herbs');
      this.props.actions.postLike(herbId);
    }
  };

  render() {
    const {match, herbs} = this.props;

    return (
      <div className='row'>
        <div className="col-lg-6">
          <h3>Herbal Remedies</h3>
          <input
            type="text"
            onChange={event => this.handleSearch(event)}
            className="form-control"
            placeholder="Search by Medicinal Uses, Herbal Properties or Herb Name..."
          />
          <br/>
          { herbs.length === 0 ? null : <Herbs likesHandler={this.likesHandler} url={match.url } herbs={herbs}/> }
          { this.props.error ? <Alert error={this.props.error}/> :
            <Route path={`${match.url}/:herbId`} component={HerbShow}/> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    herbs: state.herbs.target,
    error: state.herbs.error,
    liked: state.likes.liked
  })
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HerbsPage);
