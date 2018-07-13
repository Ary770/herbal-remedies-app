import React from 'react';
import { connect } from 'react-redux';
import Herbs from '../components/Herbs';
import { Route } from 'react-router-dom';
import HerbShow from './HerbShow';
import Alert from '../components/Alert'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/herbs';

class HerbsPage extends React.Component {
  state = {
    likes: []
  }

  handleSearch = (event) => {
    const input = event.target.value
    this.props.actions.searchHerb(input)

    if (input === "") {
      this.props.history.replace('/herbs')
    }
  };

  likesHandler = (event) => {
    const herbId = event.target.dataset.id;

    if (this.state.likes.includes(herbId)) {
      return null
    } else {
      this.setState({ likes: [...this.state.likes, herbId] })
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

// const HerbsPage = (props) => {
//   state = {
//     liked: []
//   }
//
//   const {match, herbs} = props;
//
  // const handleSearch = (event) => {
  //   const input = event.target.value
  //   props.actions.searchHerb(input)
  //
  //   if (input === "") {
  //     props.history.replace('/herbs')
  //   }
  // };
  //
  // const likesHandler = (event) => {
  //   const herbId = event.target.dataset.id;
  //   if (true) {
  //
  //   }
  //   props.actions.postLike(herbId);
  // }
//
//   return (
    // <div className='row'>
    //   <div className="col-lg-6">
    //     <h3>Herbal Remedies</h3>
    //     <input
    //       type="text"
    //       onChange={e => handleSearch(e)}
    //       className="form-control"
    //       placeholder="Search by Medicinal Uses, Herbal Properties or Herb Name..."
    //     />
    //   {console.log('In HerbsPage: ', herbs)}
    //     <br/>
    //     { herbs.length === 0 ? null : <Herbs likesHandler={likesHandler} url={match.url} herbs={herbs}/> }
    //     { props.error ? <Alert error={props.error}/> :
    //       <Route path={`${match.url}/:herbId`} component={HerbShow}/> }
    //   </div>
    // </div>
//   )
// }

const mapStateToProps = state => {
  return ({
    herbs: state.herbs.target,
    error: state.herbs.error
  })
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HerbsPage);
