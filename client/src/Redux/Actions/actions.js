import axios from 'axios';


export function getAllService() {

    return async function (dispatch) {
      var json = await axios.get(`http://localhost:3005/service`);

      return dispatch({
        type: "GET_ALL_SERVICE",
        payload: json.data,
        
      });
    };
  }

  export function getAllBlog() {
    return async function (dispatch) {
      var json = await axios.get(`http://localhost:3005/blog`);
      return dispatch({
        type: "GET_ALL_BLOG",
        payload: json.data,
        
      });
    };
  }
