export function fetchHerbs() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_HERBS' });
    return fetch('api/herbs')
      .then(res => res.json())
      .then(herbs => {
        if (herbs.error) {
          return dispatch({ type: 'ERROR', error: herbs.error })
        } else {
          return dispatch({ type: 'FETCH_HERBS', herbs })
        }
      });
  };
};

export function postLike(herbId) {
  return (dispatch) => {
    dispatch({ type: 'POSTING_LIKE' });
    return fetch(`api/herbs/${herbId}`, {
      method: 'PATCH',
      headers: {
        accept: 'application/json'
      },
      })
      .then(res => res.json())
      .then(herb => dispatch({ type: 'UPDATE_LIKE' , herb } ))
  };
};

export function fetchLikes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_LIKES' });
    return fetch('api/likes')
      .then(res => res.json())
      .then(herbs => {
        if (herbs.error) {
          return dispatch({ type: 'ERROR', error: herbs.error })
        } else {
          return dispatch({ type: 'FETCH_LIKES', herbs })
        }
      });
  };
};

export const resetHerbs = () => {
  return {
    type: 'RESET_HERBS'
  }
}

export const likeHerb = herb => {
  return {
    type: 'LIKED_DURING_SESSION',
    herb
  }
}

export const searchHerb = input => {
  return {
    type: 'SEARCH_HERBS',
    input
  }
};

export const medicinalUse = input => {
  return {
    type: 'MEDICINAL_USE',
    input
  }
};

export const properties = input => {
  return {
    type: 'PROPERTIES',
    input
  }
};
