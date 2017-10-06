module.exports = (
  state = {
    markers: [
      {
        position: {
          lat: 29.424122,
          lng: -98.493629
        }
      }
    ]
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
