export default (state = {
  loading: false,
  herbs: [],
  target: [],
  error: null
}, action) => {
  switch (action.type) {
    case 'LOADING_HERBS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_HERBS':
      return Object.assign({}, state, {loading: false, herbs: action.herbs, target: action.herbs})

    case 'SEARCH_HERBS':
      const formattedInput = action.input.split(' ').map(
        w => w.charAt(0).toUpperCase() + w.substr(1)
      ).join(' ');

      const matchingHerbs = state.herbs.filter(herb =>     
        herb.name.includes(formattedInput.trim()) || ( herb.medicinal_uses && herb.medicinal_uses.includes(formattedInput.trim())) || (herb.properties && herb.properties.includes(formattedInput.trim()))
      );
      return Object.assign({}, state, { target: matchingHerbs })

    case 'MEDICINAL_USE':
      const medicinalUse = action.input.split(' ').map(
        w => w.charAt(0).toUpperCase() + w.substr(1)
      ).join(' ');

      const matches = state.herbs.filter(herb =>
        herb.medicinal_uses && herb.medicinal_uses.includes(medicinalUse.trim())
      );
      return Object.assign({}, state, { target: matches })

    case 'ERROR':
      return Object.assign({}, state, { error: action.error })

    case 'UPDATE_LIKE':
      const index = state.target.findIndex(herb => herb.id === action.herb.id);
      const updateHerbs = [...state.target];
      updateHerbs[index] = action.herb;
      return Object.assign({}, state, { target: updateHerbs }, { herbs: updateHerbs });

    case 'RESET_HERBS':
      return Object.assign({}, state, { target: state.herbs })

    default:
      return state;
  }
}
