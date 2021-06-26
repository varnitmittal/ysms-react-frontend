import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { hideSnackbar } from "../../store/actions/MessageDialogActions";

export const SnackbarScreen = () => {
  const dispatch = useDispatch();
  const isSnackbar = useSelector((state) => state.SnackbarState.dialog);
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    dispatch(hideSnackbar());
  };
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={isSnackbar.severity} className="fs-16">
        {isSnackbar.detail}
      </Alert>
    </Snackbar>
  );
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
