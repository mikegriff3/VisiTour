module.exports = (
  state = {
    markers: [],
    directions: [],
    routes: []
  },
  action
) => {
  switch (action.type) {
    case "ADD_MARKER":
      state = {
        ...state,
        markers: [...state.markers, action.payload]
      };
      return state;

    case "GET_DIRECTIONS":
      state = {
        ...state,
        directions: action.payload
      };
      return state;
    case "GET_DRIVING_STEPS":
      state = {
        ...state
      };

    default:
      return state;
  }
};
