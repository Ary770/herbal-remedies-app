import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton'

const Herbs = (props) => {
  let herbs;

  if (props.herbs) {
    herbs = props.herbs.map(herb =>
      <h4 key={herb.id}>
        <li role='presentation'>
          <Link to={`${props.url}/${herb.id}`}>{herb.name}</Link>
          <span>  </span>
          { props.url === '/herbs' ?
            <LikeButton
              herbId={herb.id}
              likes={herb.likes}
              likedHerbs={props.likedHerbs}
              likesHandler={props.likesHandler}/>
            :
            <span className='span-likes'> {herb.likes}</span>
          }
        </li>
      </h4>
    );
  }

  return (
    <div className="col-sm-5">
      <ul className="nav nav-pills nav-stacked">
        {herbs}
      </ul>
    </div>
  )
};

export default Herbs;
