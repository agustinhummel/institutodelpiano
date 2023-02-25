const initialState = {
    services: [],
    professionals: [],
    users:[],
    posts: [],
    user: JSON.parse(localStorage.getItem('user')) ||  "",

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_SERVICE":
      return {
        ...state,
        services: action.payload,
      };
    case "GET_ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "DELETE_USER":
      return {
        ...state,
        users: [state.users.filter(user => user.id != action.payload)],
      };
    case "GET_ALL_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "GET_ALL_PROFESSIONALS":
      return {
        ...state,
        professionals: action.payload,
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
