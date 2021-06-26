import {  HIDE_SNACKBAR_ACTION } from "../Constants";

export const hideSnackbar = () => {
    return dispatch => {
        dispatch ({type: HIDE_SNACKBAR_ACTION});
    }
}