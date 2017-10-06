module.exports = (
  state = {
    markers: []
  },
  action
) => {
  switch (action.type) {
    case "ADD_MARKER":
      state = {
        ...state,
        markers: [...state.markers, action.payload]
      };
      console.log(state);
      return state;

    default:
      return state;
  }
};
