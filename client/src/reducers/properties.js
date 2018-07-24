export default (state = { properties: [], target: [], loading: false, herbs: [], propId: '' }, action) => {
  switch (action.type) {
    case 'LOADING_PROPERTIES':
      return Object.assign({}, state, { loading: true })

    case 'FETCH_PROPERTIES':
      const new_state = Object.assign(
        {}, state, {
        properties: action.properties,
        target: action.properties,
        loading: false
      });
      return new_state

    case 'LOADING_PROPERTY_HERBS':
      return Object.assign({}, state, { loading: true })

    case 'FETCH_PROPERTY_HERBS':
      return Object.assign(
        {}, state, { herbs: action.herbs }, { loading: false }, { propId: action.propId }
      );

    case 'SEARCH_PROPERTY':
      const formattedInput = action.prop.toLocaleLowerCase();

      const matchingProp = state.properties.filter(property =>
        property.name.toLocaleLowerCase().includes(formattedInput.trim())
      );
      return Object.assign({}, state, { target: matchingProp })


    default:
      return state;
  }
}
