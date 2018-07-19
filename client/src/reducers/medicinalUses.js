export default (state = { medicinalUses: [], target: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOADING_MEDICINAL_USES':
      return Object.assign({}, state, { loading: true })

    case 'FETCH_MEDICINAL_USES':
      const new_state = Object.assign({}, state, {
        medicinalUses: action.medicinalUses,
        target: action.medicinalUses,
        loading: false
      });

      return new_state

    default:
      return state;
  }
}
