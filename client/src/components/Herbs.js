import React from 'react';
import { Link } from 'react-router-dom';

const Herbs = (props) => {
  let herbs = null;

  if (props.herbs) {
    herbs = props.herbs.map(herb =>
      <h4 key={herb.id}>
        <li role='presentation'>
          <Link to={`${props.url}/${herb.id}`}>{herb.name}</Link>
          <span>  </span>

          { props.url === '/herbs' ?
            <button
              className='btn-like'
              type='button'
              data-id={herb.id}
              onClick={ event => props.likesHandler(event) }
              >
              <span data-id={herb.id} className="glyphicon glyphicon-thumbs-up"></span> {herb.likes}
            </button>
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
