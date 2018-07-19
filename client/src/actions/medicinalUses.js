export function fetchMedicinalUses() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_MEDICINAL_USES' });
    return fetch('api/medicinal_uses')
      .then(res => res.json())
      .then(medicinal_uses => {
        if (medicinal_uses.error) {
          return dispatch({ type: 'ERROR', error: medicinal_uses.error })
        } else {
          return dispatch({ type: 'FETCH_MEDICINAL_USES', medicinal_uses })
        }
      });
  };
};
