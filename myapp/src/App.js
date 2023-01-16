import './App.css';
import {useContext, useEffect} from "react";
import Navigation from "./components/Navigation/topMenu";
import { Outlet } from "react-router";
import snackbarContext from "./store/SnackbarContext";
import Snackbar from "./components/Snackbar/Snackbar";
import {useLocation} from "react-router";
import {AuthContext} from "./store/AuthContext";
import {getMonth} from "./utils/calendarUtils";
import Loader from "./components/ProgressBar/Loader";
import {LoaderContext} from "./store/LoaderContext";
import {useNavigate} from "react-router-dom";


function App() {
    const snack = useContext(snackbarContext);
    const auth = useContext(AuthContext);
    const {loading} = useContext(LoaderContext);
    const location = useLocation()

  return (
    <div className="App">
      <Navigation/>
      <Outlet/>
    </div>
  );
}

export default App;
