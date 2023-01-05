import {useContext} from "react";
import SnackbarContext from "../store/SnackbarContext";
import Snackbar from "../components/Snackbar/Snackbar";

export const useSnackbar = () => {
    const snackbarContext = useContext(SnackbarContext);
    const showSnackbar = (msg, type) =>{
        snackbarContext.displayMsg(msg, type);
    }
    return {showSnackbar}
}