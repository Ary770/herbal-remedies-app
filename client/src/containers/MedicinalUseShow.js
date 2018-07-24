import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MedicinalUseShow = (props) => {
  let displayHerbs = null;

  if (props.herbs) {
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

// const mapStateToProps = (state) => {
//   return({
//     herbs: state.medicinalUses.herbs
//   })
// }

export default MedicinalUseShow;
