const initialState = {
    services: [],
    blogs: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_SERVICE":
      return {
        ...state,
        services: action.payload,
      };
    case "GET_ALL_BLOG":
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
