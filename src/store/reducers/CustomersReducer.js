import {
  FETCH_CUSTOMER_COMPLETE,
  FETCH_CUSTOMER_ERROR,
  FETCH_CUSTOMER_FAILURE,
  ADD_CUSTOMER_COMPLETE,
  ADD_CUSTOMER_ERROR,
  ADD_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_COMPLETE,
  UPDATE_CUSTOMER_ERROR,
  UPDATE_CUSTOMER_FAILURE,
  FETCH_CUSTOMERBYID_COMPLETE,
  FETCH_CUSTOMERBYID_ERROR,
  FETCH_CUSTOMERBYID_FAILURE
} from "../Constants"


let initState = {
  list: [],
  singleCustomer: {}
};

export const CustomersReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER_COMPLETE:
      return {
        ...state,
        list: action.payload
      }
    case FETCH_CUSTOMER_ERROR:
      return {
        ...state
      }
    case FETCH_CUSTOMER_FAILURE:
      return {
        ...state
      }
    case FETCH_CUSTOMERBYID_COMPLETE:
      return {
        ...state,
        singleCustomer: action.payload
      }
    case FETCH_CUSTOMERBYID_ERROR:
      return {
        ...state
      }
    case FETCH_CUSTOMERBYID_FAILURE:
      return {
        ...state
      }
    case ADD_CUSTOMER_COMPLETE:
    return {
      ...state,
    }
    case ADD_CUSTOMER_ERROR:
      return {
        ...state,
      }
    case ADD_CUSTOMER_FAILURE:
      return {
        ...state,
      }
    case UPDATE_CUSTOMER_COMPLETE:
    return {
      ...state,
    }
    case UPDATE_CUSTOMER_ERROR:
      return {
        ...state,
      }
    case UPDATE_CUSTOMER_FAILURE:
      return {
        ...state,
      }
    default:
      return { ...state };
  }
}