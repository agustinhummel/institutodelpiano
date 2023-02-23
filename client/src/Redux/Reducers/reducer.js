const initialState = {
    services: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_SERVICE":
      return {
        ...state,
        services: action.payload,

      };
    
    default:
      return state;
  }
}

export default rootReducer;
