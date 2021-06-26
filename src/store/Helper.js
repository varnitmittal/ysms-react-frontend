import {STOP_SPINNER_ACTION} from "./Constants";

export const saveDataInLocalStorage = (data) => {
  let userData = data;
  localStorage.setItem("yogshemIdToken", userData.accessToken);
  localStorage.setItem("yogshemAccessToken", userData.accessToken);
  localStorage.setItem("yogshemRefreshToken", userData.refreshToken);
}

export const getLocalStorageData = () => {
  let data = {};
  if (localStorage.length > 0) {
    data = {
      yogshemIdToken: localStorage.getItem("yogshemIdToken"),
      yogshemAccessToken: localStorage.getItem("yogshemAccessToken"),
      yogshemRefreshToken: localStorage.getItem("yogshemRefreshToken"),
    };
  }

  return data;
};

export const SetRequestHeader = (type) => {
  let loggedInInfo = getLocalStorageData();
  let headerObj = {};

  if (type !== "upload") {
    headerObj["Content-Type"] = "application/json";
    headerObj["Accept"] = "application/json";
  }
  if (loggedInInfo.yogshemAccessToken) {
    headerObj.Authorization = `Bearer ${loggedInInfo.yogshemAccessToken}`;
  }
  return headerObj;
  };


export const StopLoading = (dispatch) => {
    setTimeout(() => {
      dispatch({ type: STOP_SPINNER_ACTION });
    }, 700);
  };