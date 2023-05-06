import {
  GET_USER_DETAILS,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_SUCCESS,
} from './actions';

const initialState = {
  userdetails_data: null,
  userdetails_error: '',
  userloading: false,
  totalpage:0,
};

export default function userdetailsReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_USER_DETAILS: {
      return {...state, userloading: true};
    }
    case GET_USER_DETAILS_SUCCESS: {
      console.log('GET_USER_DETAILS_SUCCESS...');
      return {
        ...state,
        userloading: false,
        userdetails_data: payload, 
        totalpage: Math.ceil(payload.length / 8)

      };
    }
    case GET_USER_DETAILS_ERROR: {
      return {...state, userloading: false, userdetails_error: payload};
    }

    default:
      return state;
  }
}
