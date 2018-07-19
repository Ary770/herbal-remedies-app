import React from 'react';
import { Link } from 'react-router-dom';
import MedicinalUseShow from '../containers/MedicinalUseShow';

class MedicinalUsesList extends React.Component {
  state = {
    herbs: [],
    displayHerbs: false
  }

  displayHerbsHandler = (medicinalUse) => {
    //set state.herbs = to medicinalUse.herbs
    // ser state.displayHerbs =  !state.displayHerbs

  }

  render() {
    let medicinalUses = null;
    let displayHerbs = null;

    if (this.props.medicinalUses) {
      medicinalUses = this.props.medicinalUses.map(medicinalUse =>
        <h4 key={medicinalUse.id}>
          <li role='presentation'>

            <Link onClick={this.displayHerbsHandler(medicinalUse)} to={`${this.props.url}/${medicinalUse.id}`}>{medicinalUse.name}</Link>

            { this.state.displayHerbs ? "display herbs " : null }

            <span>  </span>
          </li>
        </h4>
      );
    }

    return (
      <div className="col-sm-5">
        <ul className="nav nav-pills nav-stacked">
          { medicinalUses }
        </ul>
      </div>
    )
  }
}

// const MedicinalUsesList = (props) => {
//   let medicinalUses = null;
//   let displayHerbs = null;
//
//   const displayHerbsHandler = (medicinalUse) => {
//     displayHerbs =
//   }
//
//   if (props.medicinalUses) {
//     medicinalUses = props.medicinalUses.map(medicinalUse =>
//       <h4 key={medicinalUse.id}>
//         <li role='presentation'>
//           <Link onClick={displayHerbsHandler(medicinalUse)} to={`${props.url}/${medicinalUse.id}`}>{medicinalUse.name}</Link>
//           <span>  </span>
//         </li>
//       </h4>
//     );
//   }
//
//   return (
//     <div className="col-sm-5">
//       <ul className="nav nav-pills nav-stacked">
//         { medicinalUses }
//       </ul>
//     </div>
//   )
// };

export default MedicinalUsesList;
