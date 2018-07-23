import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MedicinalUseShow = (props) => {
  let displayHerbs = null;

  if (props.herbs.length !== 0 ) {
    //when user clicks on link, route defined on MedicinalUsesPage renders HerbShow component.
    displayHerbs = props.herbs.map(herb =>
      <li key={herb.id}>
        <Link to={`${props.url}/herbs/${herb.id}`} className='li-16px-style'>{herb.name}</Link>
      </li>
    )
  }

  return (
    <ul>
      {displayHerbs}
    </ul>
  )
}

// class MedicinalUseShow extends React.Component {
//
//   render () {
//     let displayHerbs = null;
//
//     if (this.props.herbs.length !== 0 ) {
//       //when user clicks on link, route defined on MedicinalUsesPage renders HerbShow component.
//       displayHerbs = this.props.herbs.map(herb =>
//         <li key={herb.id}>
//           <Link to={`${this.props.url}/herbs/${herb.id}`} className='li-16px-style'>{herb.name}</Link>
//         </li>
//       )
//     }
//
//     return (
//       <ul>
//         {displayHerbs}
//       </ul>
//     )
//   }
// }

const mapStateToProps = (state, ownProps) => {
  return({
    herbs: state.medicinalUses.herbs
  })
}

export default connect(mapStateToProps)(MedicinalUseShow);
