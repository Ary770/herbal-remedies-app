export default (state = {loading: false, herbs: [], target: []}, action) => {
  switch (action.type) {
    case 'LOADING_HERBS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_HERBS':
      debugger
      return {loading: false, herbs: action.herbs, target: action.herbs}
    case 'SEARCH_HERB':
      const formattedHerb = action.herb.split(' ').map(
        w => w.charAt(0).toUpperCase() + w.substr(1)
      ).join(' ');

      const matchingHerbs = state.herbs.filter(herb =>
        herb.name.includes(formattedHerb.trim())
      );

      return Object.assign({}, state, {target: matchingHerbs})
    default:
      return state;
  }
}
