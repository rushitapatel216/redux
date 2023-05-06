import axios from "axios";
import { GET_USER_DETAILS, GET_USER_DETAILS_ERROR, GET_USER_DETAILS_SUCCESS } from "../redux/actions";

export const getUserDetails = async (dispatch) => {
  console.log("true..");
    try {
      dispatch({type: GET_USER_DETAILS});

      const response = await axios.get("https://fakestoreapi.com/products");

      if (response?.data?.length!==0 ) {

        dispatch({type: GET_USER_DETAILS_SUCCESS, payload: response?.data});
      } else {
        dispatch({type: GET_USER_DETAILS_ERROR, payload: response.message});
      }
      return response;
    } catch (error) {
      dispatch({type: GET_USER_DETAILS_ERROR, payload: error});
      return error;
    }
  };
  