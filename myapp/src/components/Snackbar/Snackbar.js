import React, {useContext} from "react";
import "./Snackbar.css";
import SnackbarContext from "../../store/SnackbarContext";

const Snackbar = (props) => {
    const snackbarCtx = useContext(SnackbarContext);

    return(
        <div className={`snackbar-container ${snackbarCtx.type}`} >
            <div className="snackbar-label">{snackbarCtx.msg}</div><div className="snackbar-dismiss">&times;</div>
        </div>
    )
}


export default Snackbar;