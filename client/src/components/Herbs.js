import React from 'react';
import { Link } from 'react-router-dom';

class Herbs extends React.Component {
  state = {
    likes: []
  }

  counterHandler = (event) => {
    debugger;
    const herbId = event.target.dataset.id
    
  }

  render() {
    let herbs = null;

    if (this.props.herbs) {
      herbs = this.props.herbs.map(herb =>
        <h4 key={herb.id}>
          <li role='presentation'>
            <Link to={`${this.props.url}/${herb.id}`}>{herb.name}</Link>
            <span> </span>
            <button type='button' data-id={herb.id} onClick={event => this.counterHandler(event)}>
              {this.state.counter}
            </button>
          </li>
        </h4>
      );
    }

    return (
      <div className="col-sm-3">
        <ul className="nav nav-pills nav-stacked">
          {herbs}
        </ul>
      </div>
    )
  }
}


// const Herbs = (props) => {
//   let herbs = null;
//
//   if (props.herbs) {
//     herbs = props.herbs.map(herb =>
//       <h4 key={herb.id}>
//         <li role='presentation'>
//           <Link to={`${props.url}/${herb.id}`}>{herb.name}</Link>
//           <button type='button' onClick={increaseCount}></button>
//         </li>
//       </h4>
//     )
//   }
//
//   return (
//     <div className="col-sm-3">
//       <ul className="nav nav-pills nav-stacked">
//         {herbs}
//       </ul>
//     </div>
//   )
// }

export default Herbs;
