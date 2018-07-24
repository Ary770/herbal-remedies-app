export function fetchProperties() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PROPERTIES' });
    return fetch('api/properties')
      .then(res => res.json())
      .then(properties => {
        if (properties.error) {
          return dispatch({ type: 'ERROR', error: properties.error })
        } else {
          return dispatch({ type: 'FETCH_PROPERTIES', properties })
        }
      });
  };
};

export function fetchPropertyHerbs(propId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PROPERTY_HERBS' });
    return fetch(`api/properties/${propId}`)
      .then(res => res.json())
      .then(herbs => {
        if (herbs.error) {
          return dispatch({ type: 'ERROR', error: herbs.error })
        } else {
          return dispatch({ type: 'FETCH_PROPERTY_HERBS', herbs, propId })
        }
      });
  };
};

export function searchProperty(prop) {
  return ({
    type: 'SEARCH_PROPERTY',
    prop
  })
}
