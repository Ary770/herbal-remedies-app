import React from 'react';
// import { Link } from 'react-router-dom';


const Herbs = (props) => {
  const herbs = props.herbs.map(herb =>
    <h4 key={herb.id}><li><a href='/'>{herb.name}</a></li></h4>
  )

  return (
    <div>
      {herbs.length === 0 ? null : <h1>My herbs</h1>}
      <ul>
        {herbs}
      </ul>
    </div>
  )
}

export default Herbs;
