import { removeUserSession, setUserSession } from '../../Utils/Common';
import { server } from '../../config';
import { REMOVE_TOKEN, SET_TOKEN } from '../Constants';
import { errorHandler } from '../../Utils';
import { endUrls } from '../../config/EndUrls';

export const loginUser = (body) => async (dispatch) => {
  try {
    const response = await server.post(endUrls.login, body);
    if (response.status === 200) {
      let token = response.data.data && response.data.data.accessToken;
      let user = response.data.data && response.data.data.user;
      dispatch({
        type: SET_TOKEN,
        payload: {
          token: token,
          user: user
        }
      });
      setUserSession(token, user);
      return true;
    } else {
      dispatch({
        type: REMOVE_TOKEN
      });
      removeUserSession();
      return false;
    }
  } catch (error) {
    errorHandler(error);
    dispatch({
      type: REMOVE_TOKEN
    });
    removeUserSession();
    return false;
  }
};

export const setLoginTokenAction = (payload) => async (dispatch) => {
  dispatch({
    type: SET_TOKEN,
    payload
  });
};

export const removeLoginTokenAction = () => async (dispatch) => {
  dispatch({
    type: REMOVE_TOKEN
  });
  removeUserSession();
};
