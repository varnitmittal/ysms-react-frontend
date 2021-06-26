// import './indexdashboard.css';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginTokenAction } from './store/actions/LoginActions';
import { CircularProgress } from '@material-ui/core';
import { getToken, getUser } from './Utils/Common';
import LoadingScreen from './component/Global/LoadingScreen';
import { toast, ToastContainer } from 'react-toastify';
import LayoutHeader from './component/Layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
const LandingPage = lazy(() => import('./component/LandingPage'));
const Routes = lazy(() => import('./Routes'));

function App(props) {
  const [authLoading, setAuthLoading] = useState(true);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.Auth);
  window.toast = toast;
  useEffect(() => {
    // eslint-disable-next-line
    const token = getToken();
    const user = getUser();
    if (token && user) {
      dispatch(setLoginTokenAction({ token, user }));
    }
    setAuthLoading(false);
    // eslint-disable-next-line
  }, []);
  console.log(isAuth);
  if (authLoading) {
    return <CircularProgress />;
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Router>
        {isAuth ? <LayoutHeader /> : null}
        {isAuth ? <Routes /> : <LandingPage />}
        <ToastContainer />
      </Router>
    </Suspense>
  );
}

export default App;
