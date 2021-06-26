import {
  LOGIN_COMPLETE,
  LOGIN_FAILURE,
  LOGIN_ERROR,

  START_SPINNER_ACTION
} from '../Constants';
import {
  SetRequestHeader,
  saveDataInLocalStorage,
  StopLoading
} from '../Helper';
import { LOGIN_API_URL } from '../API_URL';
import { DEFAULT_ERROR_MSG } from '../Messages';


export const doCognitoLogin = () => {
  return (dispatch) => {
    dispatch({ type: START_SPINNER_ACTION });
    return fetch(LOGIN_API_URL, {


      method: 'post',
      body: JSON.stringify({
        "email": "yogeshgupta5395@gmail.com",
        "password": "1234"
      }),
      headers: SetRequestHeader()


    })
      .then((response) => response.json())
      .then(
        (data) => {
          if (data) {

            saveDataInLocalStorage(data.data);

            dispatch({ type: LOGIN_COMPLETE, payload: data.data });
          } else {
            dispatch({
              type: LOGIN_ERROR,
              payload: data ? data : { message: DEFAULT_ERROR_MSG }

            });
          }
          StopLoading(dispatch);
        },
        (error) => {
          dispatch({ type: LOGIN_FAILURE, payload: error });
          StopLoading(dispatch);
        }
      );
  };
};
