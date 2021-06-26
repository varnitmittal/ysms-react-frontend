import {
  GET_CLASSES,
  START_SPINNER_ACTION,
  STOP_SPINNER_ACTION,
  GET_CLASSES_ERROR,
  GET_CLASSES_FAILURE
} from '../Constants';
import { SETUP_CLASS_API } from '../API_URL';

export const SetupClassAction = (checked) => {
  return (dispatch) => {
    dispatch({ type: GET_CLASSES, payload: checked });
  };
};

export const fetchSetupClasses = () => {
  return (dispatch) => {
    dispatch({ type: START_SPINNER_ACTION });
    return fetch(SETUP_CLASS_API, {
      headers:
        'Barear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDk4NDQ3NjQsImV4cCI6MTYwOTg0ODM2NCwiYXVkIjoiNWZlMWJkNDQ4OGE3NTMzYTZjZjY3OWNlIiwiaXNzIjoieW9nZXNoYW0uY29tIn0.0Qw1dgPRcXRf96h4yzyspAWhi6NfzPH7wwZ4WNi9Hv8'
    })
      .then((response) => response.json())
      .then(
        (data) => {
          if (data && data.responseCode === '200') {
            dispatch({ type: GET_CLASSES, payload: data });
          } else {
            dispatch({
              type: GET_CLASSES_ERROR,
              payload: data ? data : { message: 'DEFAULT_ERROR_MSG' }
            });
          }
          // stopLoading(dispatch);
        },
        (error) => {
          dispatch({ type: GET_CLASSES_FAILURE, payload: error });
          // stopLoading(dispatch);
        }
      );
  };
};
