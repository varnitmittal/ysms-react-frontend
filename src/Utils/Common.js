export const getUser = () => {
  const useStr = sessionStorage.getItem('user');
  if (useStr) return JSON.parse(useStr);
  else return null;
};

export const getToken = () => {
  return sessionStorage.getItem('accessToken') || null;
};
export const setUserSession = (accessToken, user) => {
  sessionStorage.setItem('accessToken', accessToken);
  sessionStorage.setItem('user', JSON.stringify(user));
};
export const removeUserSession = () => {
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('user');
};

export const popMessage = (message, data = {}) => {
  if (data.type) {
    window.toast(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      ...data
    });
  } else {
    window.toast[data.type](message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      ...data
    });
  }
};
