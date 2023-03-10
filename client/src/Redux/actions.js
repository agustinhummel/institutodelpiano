import axios from 'axios';
const {VITE_SERVER_BACK} = import.meta.env

//SERVICE
export function getAllServices() {
    return async function (dispatch) {
      var json = await axios.get(`${VITE_SERVER_BACK}/service`);
      return dispatch({
        type: "GET_ALL_SERVICES",
        payload: json.data,
      });
    };
  }
  export function getOneService(id) {
    return async function (dispatch) {
      let json = await axios.get(`${VITE_SERVER_BACK}/service/${id}`)
      return dispatch({
        type: "GET_ONE_SERVICE",
        payload: json.data
      })
    }
  }
  export function deleteService(payload) {
    return async function (dispatch) {
      await axios.delete(`${VITE_SERVER_BACK}/service/${payload}`);
      return dispatch({
        type: "DELETE_SERVICE",
        payload: payload,
      });
    };
  }
  export function editService(payload) {
    return async function (dispatch) {
      var json = await axios.put(`${VITE_SERVER_BACK}/service/${payload.id}`,payload);
      return dispatch({
        type: "UPDATE_SERVICE",
        payload: json.data,
      });
    };
  }
  export function createService(payload) {
    return async function (dispatch) {
      await axios.post(`${VITE_SERVER_BACK}/service`, payload);
      const response  = await axios.get(`${VITE_SERVER_BACK}/service`);
      return dispatch({
        type: "CREATE_SERVICE",
        payload: response.data,
      });
    };
  }

  //POST
  export function getAllPosts() {
    return async function (dispatch) {
      var json = await axios.get(`${VITE_SERVER_BACK}/post`);
      return dispatch({
        type: "GET_ALL_POSTS",
        payload: json.data,
      });
    };
  }
  export function getOnePost(id) {
    return async function (dispatch) {
      let json = await axios.get(`${VITE_SERVER_BACK}/post/${id}`)
      return dispatch({
        type: "GET_ONE_POST",
        payload: json.data
      })
    }
  }
  export function deletePost(payload) {
    return async function (dispatch) {
      await axios.delete(`${VITE_SERVER_BACK}/post/${payload}`);
      return dispatch({
        type: "DELETE_POST",
        payload: payload,
      });
    };
  }
  export function editPost(payload) {
    return async function (dispatch) {
      var json = await axios.put(`${VITE_SERVER_BACK}/post/${payload.id}`,payload);
      return dispatch({
        type: "UPDATE_POST",
        payload: json.data,
      });
    };
  }
  export function createPost(payload) {
    return async function (dispatch) {
      await axios.post(`${VITE_SERVER_BACK}/post`, payload);
      const response  = await axios.get(`${VITE_SERVER_BACK}/post`);
      return dispatch({
        type: "CREATE_POST",
        payload: response.data,
      });
    };
  }


//USER
export function getAllUsers() {
    return async function (dispatch) {
      var json = await axios.get(`${VITE_SERVER_BACK}/user`);
      return dispatch({
        type: "GET_ALL_USERS",
        payload: json.data,
      });
    };
  }
  export function getOneUser(id) {
    return async function (dispatch) {
      let json = await axios.get(`${VITE_SERVER_BACK}/user/${id}`)
      return dispatch({
        type: "GET_ONE_USER",
        payload: json.data
      })
    }
  }
export function deleteUser(payload) {
    return async function (dispatch) {
      await axios.delete(`${VITE_SERVER_BACK}/user/${payload}`);
      return dispatch({
        type: "DELETE_USER",
        payload: payload,
      });
    };
  }
export function editUser(payload) {
    return async function (dispatch) {
      var json = await axios.put(`${VITE_SERVER_BACK}/user/${payload.id}`,payload);
      return dispatch({
        type: "UPDATE_USER",
        payload: json.data,
      });
    };
  }
  export function createUser(payload) {
    return async function (dispatch) {
      await axios.post(`${VITE_SERVER_BACK}/user`, payload);
      const response  = await axios.get(`${VITE_SERVER_BACK}/user`);
      return dispatch({
        type: "CREATE_USER",
        payload: response.data,
      });
    };
  }

//PROFESSIONAL
export function getAllProfessionals() {
  return async function (dispatch) {
    var json = await axios.get(`${VITE_SERVER_BACK}/professional`);
    return dispatch({
      type: "GET_ALL_PROFESSIONALS",
      payload: json.data,
      
    });
  };
}
export function getOneProfessional(id) {
  return async function (dispatch) {
    let json = await axios.get(`${VITE_SERVER_BACK}/professional/${id}`)
    return dispatch({
      type: "GET_ONE_PROFESSIONAL",
      payload: json.data
    })
  }
}
export function deleteProfessional(payload) {
  return async function (dispatch) {
    await axios.delete(`${VITE_SERVER_BACK}/professional/${payload}`);
    return dispatch({
      type: "DELETE_PROFESSIONAL",
      payload: payload,
    });
  };
}
export function editProfessional(payload) {
  return async function (dispatch) {
    var json = await axios.put(`${VITE_SERVER_BACK}/professional/${payload.id}`,payload);
    return dispatch({
      type: "UPDATE_PROFESSIONAL",
      payload: json.data,
    });
  };
}
export function createProfessional(payload) {
  return async function (dispatch) {
    await axios.post(`${VITE_SERVER_BACK}/professional`, payload);
    const response  = await axios.get(`${VITE_SERVER_BACK}/professional`);
    return dispatch({
      type: "CREATE_PROFESSIONAL",
      payload: response.data,
    });
  };
}

  //OPENING
  export function getAllOpenings() {
    return async function (dispatch) {
      var json = await axios.get(`${VITE_SERVER_BACK}/opening`);
      return dispatch({
        type: "GET_ALL_OPENINGS",
        payload: json.data,
        
      });
    };
  }
  export function getOneOpening(id) {
    return async function (dispatch) {
      let json = await axios.get(`${VITE_SERVER_BACK}/opening/${id}`)
      return dispatch({
        type: "GET_ONE_OPENING",
        payload: json.data
      })
    }
  }
  export function deleteOpening(payload) {
    return async function (dispatch) {
      await axios.delete(`${VITE_SERVER_BACK}/opening/${payload}`);
      return dispatch({
        type: "DELETE_OPENING",
        payload: payload,
      });
    };
  }
  export function editOpening(payload) {
    return async function (dispatch) {
      var json = await axios.put(`${VITE_SERVER_BACK}/opening/${payload.id}`,payload);
      return dispatch({
        type: "UPDATE_OPENING",
        payload: json.data,
      });
    };
  }
  export function createOpening(payload) {
    return async function (dispatch) {
      await axios.post(`${VITE_SERVER_BACK}/opening`, payload);
      const response  = await axios.get(`${VITE_SERVER_BACK}/opening`);
      return dispatch({
        type: "CREATE_OPENING",
        payload: response.data,
      });
    };
  }

//LOGIN
 export function loginUser() {
    return {
      type: "LOGIN_USER",
      payload:JSON.parse(localStorage.getItem('user')),
    };
  }

  export function LogOut() {
    localStorage.setItem('user',JSON.stringify(""))
    return {
      type: "LOG_OUT",
      payload:"",
    };
  }


//Admin Dashboard
  export function adminList(payload) {
    return async function (dispatch) {
      return dispatch({
        type: "ADMIN_PAGE",
        payload: payload,
      });
    };
  }