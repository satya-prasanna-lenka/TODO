const inlitialData = {
  list: [],
};
const todoreducer = (state = inlitialData, action) => {
  if (action.type === "ADD_TODO") {
    const { id, data } = action.payload;
    return {
      ...state,
      list: [
        ...state.list,
        {
          id: id,
          data: data,
        },
      ],
    };
  } else if (action.type === "DELETE_TODO") {
    const newList = state.list.filter((elem) => elem.id != action.payload);
    return {
      ...state,
      list: newList,
    };
  } else if (action.type === "REMOVE_ALL") {
    return {
      ...state,
      list: [],
    };
  } else {
    return state;
  }
};

export default todoreducer;
