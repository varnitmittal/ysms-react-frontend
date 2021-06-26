import React from 'react'
import { useSelector } from "react-redux";
import LoadingScreen from "./LoadingScreen";
import { SnackbarScreen } from "./SnackbarScreen";

const Global = () => {
    const isLoadingScreen = useSelector((state) => state.SpinnerState.isLoading);
    const isSnackbar = useSelector((state) => state.SnackbarState.dialog.isOpen);
    return (
        <>
         {isLoadingScreen ? <LoadingScreen /> : null}
         {isSnackbar ? <SnackbarScreen /> : null}
        </>
    )
}

export default Global
