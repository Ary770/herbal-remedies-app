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
}

export function postLike(herbId) {
  return (dispatch) => {
    dispatch({ type: 'POSTING_LIKE' });
    return fetch(`api/herbs/${herbId}`, {
      method: 'PATCH',
      headers: {
        accept: 'application/json'
      },
      body: JSON.stringify(herbId)
      })
      .then(res => res.json())
      .then(herb => dispatch({ type: 'UPDATE_LIKE' , herb }))
  };
}

export const searchHerb = input => {
  return {
    type: 'SEARCH_HERB',
    input
  }
}

export const medicinalUse = input => {
  return {
    type: 'MEDICINAL_USE',
    input
  }
}

export const properties = input => {
  return {
    type: 'PROPERTIES',
    input
  }
}
