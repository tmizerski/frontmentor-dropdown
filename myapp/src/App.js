import './App.css';
import {useContext} from "react";
import Navigation from "./components/navigation/topMenu";
import { Outlet } from "react-router";
import snackbarContext from "./store/SnackbarContext";
import Snackbar from "./components/Snackbar/Snackbar";
import {useLocation} from "react-router";
import {AuthContext} from "./store/AuthContext";
import {getMonth} from "./utils/calendarUtils";


function App() {
    const snack = useContext(snackbarContext);
    const auth = useContext(AuthContext);
  return (
    <div className="App">
      <Navigation/>
      <Outlet/>
        {snack.isDisplayed && <Snackbar/>}
    </div>
  );
}

export default App;
