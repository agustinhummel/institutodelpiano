const initialState = {
    services: [],
    service: [],
    professionals: [],
    users:[],
    posts: [],
    post:[],
    openings: [],
    opening: [],
    obraSocials: [],
    eventos: [],
    user: JSON.parse(localStorage.getItem('user')) ||  "",
    adminList: ""

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //slider admin dashboard
    case 'ADMIN_PAGE':
      return {
          ...state,
          adminList: action.payload
      }
  //SERVICE
    case "GET_ALL_SERVICES":
      return {
        ...state,
        services: action.payload,
      };
    case "GET_ONE_SERVICE":
      return {
          ...state, 
          service: action.payload
        };
    case "DELETE_SERVICE":
      return {
        ...state,
        services: state.services.filter(service => service.id != action.payload),
      };
    case "UPDATE_SERVICE":
      return{
        ...state, 
        services:action.payload
      };
    case "CREATE_SERVICE":
      return {
          ...state,
          services: action.payload,
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
          post: action.payload
        };
    case "DELETE_POST":
        return {
          ...state,
          posts: state.posts.filter(post => post.id != action.payload),
        };
    case "UPDATE_POST":
        return{
          ...state, 
          posts:action.payload
        }
    case "CREATE_POST":
      return {
          ...state,
          posts: action.payload,
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
          users: action.payload
        };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id != action.payload),
      };
    case "UPDATE_USER":
      return{
        ...state, 
        users:payload
      }
    case "CREATE_USER":
      return {
          ...state,
          users: action.payload,
      };

    //PROFESSIONALS
    case "GET_ALL_PROFESSIONALS":
      return {
        ...state,
        professionals: action.payload,
      };
    case "DELETE_PROFESSIONAL":
      return {
        ...state,
        professionals: state.professionals.filter(prof => prof.id != action.payload),
      };
    case "UPDATE_PROFESSIONAL":
      return{
        ...state, 
        professionals: action.payload
      }
    case "CREATE_PROFESSIONAL":
      return {
          ...state,
          users: action.ayload,
      };

    //OPENING
    case "GET_ALL_OPENINGS":
      return {
        ...state,
        openings: action.payload,
      };
    case "GET_ONE_OPENING":
      return {
          ...state, 
          opening: action.payload
        };
    case "DELETE_OPENING":
        return {
          ...state,
          openings: state.openings.filter(openings => openings.id != action.payload),
        };
    case "UPDATE_OPENING":
        return{
          ...state, 
          openings:action.payload
        }
    case "CREATE_OPENING":
      return {
          ...state,
          openings: action.payload,
      };

          //OBRASOCIAL
    case "GET_ALL_OBRA_SOCIAL":
      return {
        ...state,
        obraSocials: action.payload,
      };
    case "GET_ONE_OBRA_SOCIAL":
      return {
          ...state, 
          obraSocials: action.payload
        };
    case "DELETE_OBRA_SOCIAL":
        return {
          ...state,
          obraSocials: state.obraSocials.filter(ob => ob.id != action.payload),
        };
    case "UPDATE_OBRA_SOCIAL":
        return{
          ...state, 
          obraSocials:action.payload
        }
    case "CREATE_OBRA_SOCIAL":
      return {
          ...state,
          obraSocials: action.payload,
      };

        //EVENTO
    case "GET_ALL_EVENT":
      return {
        ...state,
        eventos: action.payload,
      };
    case "GET_ONE_EVENT":
      return {
          ...state, 
          eventos: action.payload
        };
    case "DELETE_EVENT":
        return {
          ...state,
          eventos: state.eventos.filter(ev => ev.id != action.payload),
        };
    case "UPDATE_EVENT":
        return{
          ...state, 
          eventos:action.payload
        }
    case "CREATE_EVENT":
      return {
          ...state,
          eventos: action.payload,
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
