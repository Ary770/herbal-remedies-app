export default (state = { medicinalUses: [], target: [], loading: false, herbs: [], muId: '' }, action) => {
  switch (action.type) {
    case 'LOADING_MEDICINAL_USES':
      return Object.assign({}, state, { loading: true })

    case 'FETCH_MEDICINAL_USES':
      const new_state = Object.assign(
        {}, state, {
        medicinalUses: action.medicinalUses,
        target: action.medicinalUses,
        loading: false
      });
      return new_state

    case 'LOADING_MU_HERBS':
      return Object.assign({}, state, { loading: true })

    case 'FETCH_MU_HERBS':
      return Object.assign({}, state, { herbs: action.herbs }, { loading: false }, { muId: action.muId } )

    case 'SEARCH_MEDICINAL_USE':
      const formattedInput = action.mu.toLocaleLowerCase();

      const matchingHerbs = state.medicinalUses.filter(mu =>
        mu.name.toLocaleLowerCase().includes(formattedInput.trim())
      );
      return Object.assign({}, state, { target: matchingHerbs })


    default:
      return state;
  }
}
