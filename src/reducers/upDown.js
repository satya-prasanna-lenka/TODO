const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return state + 1;
  //     case "DECREMENT":
  //       return state - 1;
  //     default:
  //       return state;
  //   }
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else {
    return state;
  }
};
export default changeTheNumber;
