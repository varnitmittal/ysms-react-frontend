import {
  START_SPINNER_ACTION,
  SHOW_SNACKBAR_ACTION,
  ADD_CUSTOMER_COMPLETE,
  ADD_CUSTOMER_ERROR,
  ADD_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_COMPLETE,
  UPDATE_CUSTOMER_ERROR,
  UPDATE_CUSTOMER_FAILURE,
  FETCH_CUSTOMER_COMPLETE,
  FETCH_CUSTOMER_ERROR,
  FETCH_CUSTOMER_FAILURE,
  FETCH_CUSTOMERBYID_COMPLETE,
  FETCH_CUSTOMERBYID_ERROR,
  FETCH_CUSTOMERBYID_FAILURE
} from '../Constants';
import { CUSTOMER_API_URL } from '../API_URL';
import { SetRequestHeader, StopLoading } from '../Helper';
import { DEFAULT_ERROR_MSG, ERROR_MESSAGE } from '../Messages';

export const getCustomer = () => {
  return (dispatch) => {
    dispatch({ type: START_SPINNER_ACTION });
    return fetch(CUSTOMER_API_URL, {
      headers: SetRequestHeader()
    })
      .then((response) => response.json())
      .then(
        (data) => {
          if (
            data &&
            (data.responseCode === '200' || data.responseCode === 200)
          ) {
           
            dispatch({
              type: FETCH_CUSTOMER_COMPLETE,
              payload: data.data?.results
            });
            dispatch({
              type: SHOW_SNACKBAR_ACTION,
              payload: {
                detail: data.msg,
                severity: 'success'
              }
            });
          } else {
            dispatch({
              type: FETCH_CUSTOMER_ERROR,
              payload: data ? data : { message: DEFAULT_ERROR_MSG }
            });
            dispatch({
              type: SHOW_SNACKBAR_ACTION,
              payload: {
                detail: data.error.message || DEFAULT_ERROR_MSG,
                severity: 'error'
              }
            });
          }
          StopLoading(dispatch);
        },
        (error) => {
          dispatch({ type: FETCH_CUSTOMER_FAILURE, payload: error });
          dispatch({
            type: SHOW_SNACKBAR_ACTION,
            payload: {
              detail: ERROR_MESSAGE,
              severity: 'error'
            }
          });
          StopLoading(dispatch);
        }
      );
  };
};

export const getCustomrById = (customerId) => {
  return (dispatch) => {
    dispatch({ type: START_SPINNER_ACTION });
    return fetch(CUSTOMER_API_URL + customerId, {
      headers: SetRequestHeader()
    })
      .then((response) => response.json())
      .then(
        (data) => {
          if (
            data &&
            (data.responseCode === '200' || data.responseCode === 200)
          ) {
            dispatch({ type: FETCH_CUSTOMERBYID_COMPLETE, payload: data.data });
            dispatch({
              type: SHOW_SNACKBAR_ACTION,
              payload: {
                detail: data.msg,
                severity: 'success'
              }
            });
          } else {
            dispatch({
              type: FETCH_CUSTOMERBYID_ERROR,
              payload: data ? data : { message: DEFAULT_ERROR_MSG }
            });
            dispatch({
              type: SHOW_SNACKBAR_ACTION,
              payload: {
                detail: data.error.message || DEFAULT_ERROR_MSG,
                severity: 'error'
              }
            });
          }
          StopLoading(dispatch);
        },
        (error) => {
          dispatch({ type: FETCH_CUSTOMERBYID_FAILURE, payload: error });
          dispatch({
            type: SHOW_SNACKBAR_ACTION,
            payload: {
              detail: ERROR_MESSAGE,
              severity: 'error'
            }
          });
          StopLoading(dispatch);
        }
      );
  };
};

export const addPostCustomer = (customerInfo) => {
  return (dispatch) => {
    dispatch({ type: START_SPINNER_ACTION });
    return fetch(CUSTOMER_API_URL, {
      method: 'post',
      body: JSON.stringify(customerInfo),
      headers: SetRequestHeader()
    })
      .then((response) => response.json())
      .then(
        (data) => {
          if (
            data &&
            (data.responseCode === '200' || data.responseCode === 200)
          ) {
            dispatch({
              type: ADD_CUSTOMER_COMPLETE,
              payload: data.responseObject.id
            });
            dispatch({
              type: SHOW_SNACKBAR_ACTION,
              payload: {
                detail: data.msg,
                severity: 'success'
              }
            });
          } else {
            dispatch({ type: ADD_CUSTOMER_ERROR, payload: data });
            dispatch({
              type: SHOW_SNACKBAR_ACTION,
              payload: {
                detail: data.error.message || DEFAULT_ERROR_MSG,
                severity: 'error'
              }
            });
          }
          StopLoading(dispatch);
        },
        (error) => {
          dispatch({ type: ADD_CUSTOMER_FAILURE, payload: error });
          dispatch({
            type: SHOW_SNACKBAR_ACTION,
            payload: {
              detail: ERROR_MESSAGE,
              severity: 'error'
            }
          });
          StopLoading(dispatch);
        }
      );
  };
};

export const UpdateCustomer = (customerInfo, customerId) => {
  return (dispatch) => {
    dispatch({ type: START_SPINNER_ACTION });
    return fetch(CUSTOMER_API_URL + customerId, {
      method: 'put',
      body: JSON.stringify(customerInfo),
      headers: SetRequestHeader()
    })
      .then((response) => response.json())
      .then(
        (data) => {
          if (
            data &&
            (data.responseCode === '200' || data.responseCode === 200)
          ) {
            dispatch({
              type: UPDATE_CUSTOMER_COMPLETE,
              payload: data.responseObject.id
            });
          } else {
            dispatch({ type: UPDATE_CUSTOMER_ERROR, payload: data });
            dispatch({
              type: SHOW_SNACKBAR_ACTION,
              payload: {
                detail: data.error.message || DEFAULT_ERROR_MSG,
                severity: 'error'
              }
            });
          }
          StopLoading(dispatch);
        },
        (error) => {
          dispatch({ type: UPDATE_CUSTOMER_FAILURE, payload: error });
          dispatch({
            type: SHOW_SNACKBAR_ACTION,
            payload: {
              detail: ERROR_MESSAGE,
              severity: 'error'
            }
          });
          StopLoading(dispatch);
        }
      );
  };
};
