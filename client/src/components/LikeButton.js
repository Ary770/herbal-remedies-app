import React from 'react';
import Aux from '../HOC/Aux'

const LikeButton = ({herbId, likes, likedHerbs, likesHandler}) => {
  let buttonStyle;

  if (likedHerbs.includes(herbId.toString())) {
    buttonStyle = <button
                    className='btn-like animate-like'
                    type='button'
                    data-id={herbId}
                    onClick={ event => likesHandler(event) }
                    >
                    <span data-id={herbId} className="glyphicon glyphicon-thumbs-up"></span> {likes}
                  </button>
  } else {
    buttonStyle = <button
                    className='btn-like'
                    type='button'
                    data-id={herbId}
                    onClick={ event => likesHandler(event) }
                    >
                    <span data-id={herbId} className="glyphicon glyphicon-thumbs-up"></span> {likes}
                  </button>
  }

  return (
    <Aux>
      {buttonStyle}
    </Aux>
  )
}

export default LikeButton
