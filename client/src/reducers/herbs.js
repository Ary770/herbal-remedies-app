export default (state = {loading: false, herbs: []}, action) => {
  switch (action.type) {
    case 'LOADING_HERBS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_HERBS':
      return {loading: false, herbs: action.herbs}
    default:
      return state;
  }
}
