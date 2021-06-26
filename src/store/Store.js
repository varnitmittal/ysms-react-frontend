
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { CustomersReducer } from './reducers/CustomersReducer';
import { SpinnerReducer } from './reducers/SpinnerReducer';
import { HeaderSetReducer } from './reducers/HeaderSetReducer';
import { AuthReducer } from './reducers/AuthReducer';
import { SnackbarReducer } from "./reducers/SnackbarReducer";
import logger from 'redux-logger';

const combinedReducer = combineReducers({

  CustomersState: CustomersReducer,
  SpinnerState: SpinnerReducer,
  SnackbarState: SnackbarReducer,
  HeaderSetState: HeaderSetReducer,
  Auth: AuthReducer

});

// const rootReducer = (state, action) => {
//     // if (action.type === "USER_LOGGED_OUT") {
//     //   state = undefined;
//     // }

//     return combinedReducer(state, action);
//   };

export default createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
