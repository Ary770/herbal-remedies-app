import React from 'react';
import { connect } from 'react-redux';
import Herbs from '../components/Herbs';
import HerbShow from './HerbShow';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/herbs';

class FavoriteHerbs extends React.Component {

  componentDidMount() {
    if (this.props.favoriteHerbs.length === 0) {
      this.props.actions.fetchLikes();
    }
  }

  render() {
    const favoriteHerbs = this.props.favoriteHerbs;
    let herbsList = null;

    if (favoriteHerbs) {
      herbsList = <Herbs url={this.props.match.url} herbs={favoriteHerbs}/>
    }

    return (
      <div className="row">
        <div className="col-lg-6">
          <h3>Favorite Herbs</h3>
          {herbsList}
          <Route path={`${this.props.match.url}/:herbId`} component={HerbShow}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    favoriteHerbs: state.likes.favoriteHerbs
  })
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteHerbs)
