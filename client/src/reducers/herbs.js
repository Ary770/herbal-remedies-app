export default (state = {loading: false, herbs: [], target: []}, action) => {
  switch (action.type) {
    case 'LOADING_HERBS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_HERBS':
      return {loading: false, herbs: action.herbs, target: action.herbs}
    case 'SEARCH_HERB':
      const formattedInput = action.herb.split(' ').map(
        w => w.charAt(0).toUpperCase() + w.substr(1)
      ).join(' ');

      const matchingHerbs = state.herbs.filter(herb =>
        herb.name.includes(formattedInput.trim()) || ( herb.medicinal_uses && herb.medicinal_uses.includes(formattedInput.trim()) ) || (herb.properties && herb.properties.includes(formattedInput.trim()))
      );
  
      return Object.assign({}, state, {target: matchingHerbs})
    default:
      return state;
  }
}
