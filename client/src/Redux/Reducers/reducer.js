const initialState = {
    services: [],
    professionals: [],
    users:[],
    posts: [],
    user: JSON.parse(localStorage.getItem('user')) ||  "",

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  //SERVICE
    case "GET_ALL_SERVICES":
      return {
        ...state,
        services: action.payload,
      };
    case "GET_ONE_SERVICE":
      return {
          ...state, 
          services: payload
        };
    case "DELETE_SERVICE":
      return {
        ...state,
        services: [state.services.filter(service => service.id != action.payload)],
      };
    case "UPDATE_SERVICE":
      return{
        ...state, 
        services:payload
      };
    case "CREATE_SERVICE":
      return {
          ...state,
          services: payload,
      };

    //POST
    case "GET_ALL_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "GET_ONE_POST":
      return {
          ...state, 
          posts: payload
        };
    case "DELETE_POST":
        return {
          ...state,
          posts: [state.posts.filter(post => post.id != action.payload)],
        };
    case "UPDATE_POST":
        return{
          ...state, 
          posts:payload
        }
    case "CREATE_POST":
      return {
          ...state,
          posts: payload,
      };
    //USER
    case "GET_ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_ONE_USER":
      return {
          ...state, 
          users: payload
        };
    case "DELETE_USER":
      return {
        ...state,
        users: [state.users.filter(user => user.id != action.payload)],
      };
    case "UPDATE_USER":
      return{
        ...state, 
        users:payload
      }
    case "CREATE_USER":
      return {
          ...state,
          users: payload,
      };

    //PROFESSIONALS
    case "GET_ALL_PROFESSIONALS":
      return {
        ...state,
        professionals: action.payload,
      };
    case "GET_ONE_PROFESSIONAL":
      return {
        ...state,
        professionals: action.payload,
      };
    case "DELETE_PROFESSIONAL":
      return {
        ...state,
        professionals: [state.professionals.filter(prof => prof.id != action.payload)],
      };
    case "UPDATE_PROFESSIONAL":
      return{
        ...state, 
        professionals: payload
      }
    case "CREATE_PROFESSIONAL":
      return {
          ...state,
          users: payload,
      };

    //LOGIN
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
