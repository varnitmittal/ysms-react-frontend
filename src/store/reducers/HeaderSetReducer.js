import {
  LOGIN_COMPLETE,
  LOGIN_FAILURE,
  LOGIN_ERROR,
} from "../Constants"


let initState = {
  list: [],
};

export const HeaderSetReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_COMPLETE:
      return {
        ...state,
        list: action.payload
      }
    case LOGIN_ERROR:
      return {
        ...state,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
      }
    default:
      return { ...state };
  }
}