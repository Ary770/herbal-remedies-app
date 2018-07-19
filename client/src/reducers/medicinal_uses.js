export default (state = { medicinal_uses: [], target: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOADING_MEDICINAL_USES':
      return Object.assign({}, state, { loading: true })

    case 'FETCH_MEDICINAL_USES':
      const medicinal_uses = action.medicinal_uses
      const new_state = Object.assign({}, state, {
        medicinal_uses: medicinal_uses,
        target: medicinal_uses,
        loading: false
      });
      return new_state

    default:
      return state;
  }
}
