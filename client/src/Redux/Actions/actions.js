import axios from 'axios';
const {VITE_SERVER_BACK} = import.meta.env

export function getAllService() {
    return async function (dispatch) {
      var json = await axios.get(`${VITE_SERVER_BACK}/service`);
      return dispatch({
        type: "GET_ALL_SERVICE",
        payload: json.data,
      });
    };
  }
export function getAllUsers() {
    return async function (dispatch) {
      var json = await axios.get(`${VITE_SERVER_BACK}/user`);
      return dispatch({
        type: "GET_ALL_USERS",
        payload: json.data,
      });
    };
  }
export function deleteUser(payload) {
    return async function (dispatch) {
      var json = await axios.delete(`${VITE_SERVER_BACK}/user/${payload}`);
      return dispatch({
        type: "DELETE_USER",
        payload: payload,
      });
    };
  }
export function editUser(payload) {
    return async function (dispatch) {
      var json = await axios.put(`${VITE_SERVER_BACK}/user/${payload.id}`);
      return dispatch({
        type: "EDIT_USER",
        payload: json.data,
      });
    };
  }

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



