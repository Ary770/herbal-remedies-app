import React from 'react';
import { connect } from 'react-redux';
// import PanelWrapper from '../components/PanelWrapper'
import Herbs from '../components/Herbs';
import HerbShow from '../components/HerbShow';
import { Route } from 'react-router-dom';

class Properties extends React.Component {
  state = {
    text: '',
    showHerbs: null,
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleClick = () => {
    if (this.state.text !== "") {
      const herbProp = this.state.text.charAt(0).toUpperCase() + this.state.text.substr(1);
      const herbs = this.props.herbs;

      const matchingProps = herbs.filter(herb =>
        herb.properties && herb.properties.includes(herbProp)
      );

      if (matchingProps) {
        this.setState({
          showHerbs: matchingProps
        })
      }
    } else {
      this.setState({showHerbs: null})
    }
  }

  render() {
    const results = this.state.showHerbs;
    let herbs = null;

    if (results) {
      herbs = <Herbs url={this.props.match.url} herbs={results}/>
    }
    // if (results) {
    //   herbs = results.map(herb =>
    //     <PanelWrapper key={herb.id} herb={herb}/>
    //   )
    // }

    return (
      <div className="row">
        <h1>Search by Properties</h1>
        <div className="col-lg-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              onChange={(event) => this.handleChange(event)}
              placeholder="Search for..."
              />
            <span className="input-group-btn">
              <button
                onClick={this.handleClick}
                className="btn btn-default"
                type="button">Search!
              </button>
            </span>
          </div>
          <br></br>
          {herbs}
          <Route path={`${this.props.match.url}/:herbId`} component={HerbShow}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    herbs: state.herbs.herbs
  })
}

// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

export default connect(mapStateToProps)(Properties);
