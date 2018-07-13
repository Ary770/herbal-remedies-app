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
      const formattedInput = action.input.toLocaleLowerCase();

      const matchingHerbs = state.herbs.filter(herb =>
        herb.name.toLocaleLowerCase().includes(formattedInput.trim()) || ( herb.medicinal_uses && herb.medicinal_uses.toLocaleLowerCase().includes(formattedInput.trim()) ) || (herb.properties && herb.properties.toLocaleLowerCase().includes(formattedInput.trim()))
      );
      return Object.assign({}, state, { target: matchingHerbs })

    case 'ERROR':
      return Object.assign({}, state, { error: action.error })

    case 'UPDATE_LIKE':
      const herbsIndex = state.herbs.findIndex(herb => herb.id === action.herb.id);
      const targetIndex = state.target.findIndex(herb => herb.id === action.herb.id);
      const updateHerbs = [...state.herbs];
      const updateTarget = [...state.target];

      updateHerbs[herbsIndex] = action.herb;
      updateTarget[targetIndex] = action.herb;
      return Object.assign({}, state, { target: updateTarget }, { herbs: updateHerbs });

    case 'RESET_HERBS':
      return Object.assign({}, state, { target: state.herbs })

    default:
      return state;
  }
}
