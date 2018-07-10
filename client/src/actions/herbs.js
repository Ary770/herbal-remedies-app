export function fetchHerbs() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_HERBS' });
    return fetch('api/herbs')
      .then(res => res.json())
      .then(herbs => dispatch({ type: 'FETCH_HERBS', herbs }));
  };
}

export const searchHerb = herb => {
  return {
    type: 'SEARCH_HERB',
    herb
  }
}
