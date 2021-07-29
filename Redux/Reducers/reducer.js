const initstate = 1;
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;

    case "DEC":
      if (state <= 1) {
        return 1;
      } else {
        return state - 1;
      }

    default:
      return state;
  }
};

export default reducer;
