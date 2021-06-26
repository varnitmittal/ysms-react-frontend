import { REMOVE_TOKEN, SET_TOKEN } from '../Constants';

const initialState = { isAuth: false, token: null, user: null };

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        user: action.payload.user
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        ...initialState
      };
    default:
      return { ...state };
  }
};
