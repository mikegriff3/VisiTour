module.exports = (
  state = {
    markers: [
      {
        position: {
          lat: 29.424122,
          lng: -98.493629
        }
      }
    ],
    directions: []
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

    default:
      return state;
  }
};
