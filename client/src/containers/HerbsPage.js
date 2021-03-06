import React from 'react';
import { connect } from 'react-redux';
import Herbs from '../components/Herbs';
import { Route } from 'react-router-dom';
import HerbShow from './HerbShow';
import Alert from '../components/Alert'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/herbs';
import ReactLoading from 'react-loading';

class HerbsPage extends React.Component {
  state = {
    likeAnimation: false,
    herbClicked: ''
  }

  handleSearch = (event) => {
    const input = event.target.value;
    this.props.actions.searchHerb(input);

    if (input === "") {
      this.props.history.replace('/herbs');
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

  resetHerbs = () => {
    this.props.actions.resetHerbs();
    this.props.history.replace('/herbs');
  }

  render() {
    const {match, herbs} = this.props;

    return (
      <div className='row'>
        <div className="col-lg-6">
          <h3>Herbal Remedies</h3>

          <div className='input-group'>
            <input
              type="text"
              onChange={event => this.handleSearch(event)}
              className="form-control"
              placeholder="Search by Medicinal Uses, Herbal Properties or Herb Name..."
            />
            <span className="input-group-btn">
                <button
                  onClick={this.resetHerbs}
                  className="btn btn-default"
                  type="button">
                    Reset Filter
                </button>
            </span>
          </div>

          <br/>
          { herbs.length === 0 ?
            <div>
              <ReactLoading type='bubbles' color='#047800'/>
              <p className='text-muted flicker-animation'>Preparing Herbal Remedies...</p>
            </div>
            :
            <Herbs
              likesHandler={this.likesHandler}
              url={match.url }
              herbs={herbs}
              likedHerbs={this.props.liked}
              />
          }
          { this.props.error ?
            <Alert error={this.props.error}/>
            :
            <Route path={`${match.url}/:herbId`} component={HerbShow}/>
          }
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
