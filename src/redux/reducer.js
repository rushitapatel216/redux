import {
    GET_USER_DETAILS,
    GET_USER_DETAILS_ERROR,
    GET_USER_DETAILS_SUCCESS,
  } from '../../actions/profile';
  
  const initialState = {
    userdetails_data: null,
    userdetails_error: '',
    userloading: false,
  };
  
  export default function userdetailsReducer(state = initialState, action) {
    const {type, payload} = action;
  
    switch (type) {
      case GET_USER_DETAILS: {
        return {...state, userloading: true};
      }
      case GET_USER_DETAILS_SUCCESS: {
        return {...state, userloading: false, userdetails_data: payload};
      }
      case GET_USER_DETAILS_ERROR: {
        return {...state, userloading: false, userdetails_error: payload};
      }
  
      default:
        return state;
    }
  }
  
  