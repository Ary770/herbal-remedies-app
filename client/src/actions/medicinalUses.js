export function fetchMedicinalUses() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_MEDICINAL_USES' });
    return fetch('api/medicinal_uses')
      .then(res => res.json())
      .then(medicinalUses => {
        if (medicinalUses.error) {
          return dispatch({ type: 'ERROR', error: medicinalUses.error })
        } else {
          return dispatch({ type: 'FETCH_MEDICINAL_USES', medicinalUses })
        }
      });
  };
};

export function fetchMedicinalUseHerbs(muId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_MU_HERBS' });
    return fetch(`api/medicinal_uses/${muId}`)
      .then(res => res.json())
      .then(herbs => {
        if (herbs.error) {
          return dispatch({ type: 'ERROR', error: herbs.error })
        } else {
          return dispatch({ type: 'FETCH_MU_HERBS', herbs, muId })
        }
      });
  };
};
