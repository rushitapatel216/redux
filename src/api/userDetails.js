import axios from "axios";
import { GET_USER_DETAILS, GET_USER_DETAILS_ERROR, GET_USER_DETAILS_SUCCESS } from "../redux/actions";

export const getUserDetails = async (dispatch, navigation) => {
    try {
      dispatch({type: GET_USER_DETAILS});
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log('res ===========>', response);
      if (response.status === 200) {
        dispatch({type: GET_USER_DETAILS_SUCCESS, payload: response});
      } else {
        dispatch({type: GET_USER_DETAILS_ERROR, payload: response.message});
      }
      return response;
    } catch (error) {
      console.log('error', error);
      dispatch({type: GET_USER_DETAILS_ERROR, payload: error});
      return error;
    }
  };
  