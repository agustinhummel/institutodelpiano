const initialState = {
    services: [],
    user: JSON.parse(localStorage.getItem('user')) ||  ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_SERVICE":
      return {
        ...state,
        services: action.payload,
      };
    case "LOG_OUT": 
      return {
        ...state,
        user: action.payload
      }
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,  
      };
    default:
      return state;
  }
}

export default rootReducer;
