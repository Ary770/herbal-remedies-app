export default (state = { medicinal_uses: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOADING_MEDICINAL_USES':
      return Object.assign({}, state, { loading: true })

    case 'SET_MEDICINAL_USES':
      debugger

      return Object.assign({}, state, { medicinal_uses: action.medicinal_uses })

    default:
      return state;
  }
}
