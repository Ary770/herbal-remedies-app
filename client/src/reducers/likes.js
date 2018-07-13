export default (state = { favoriteHerbs: [], liked: [] }, action) => {
  switch (action.type) {
    case 'FETCH_LIKES':
      return Object.assign({}, state, { favoriteHerbs: action.herbs })

    case 'LIKED_DURING_SESSION':
      return Object.assign({}, state, { liked: state.liked.concat(action.herb) })

    default:
      return state;
  }
}
