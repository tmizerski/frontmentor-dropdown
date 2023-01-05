import './App.css';
import {useContext} from "react";
import Navigation from "./components/navigation/topMenu";
import { Outlet } from "react-router";
import snackbarContext from "./store/SnackbarContext";
import Snackbar from "./components/Snackbar/Snackbar";


function App() {
    const snack = useContext(snackbarContext);
  return (
    <div className="App">
      <Navigation/>
      <Outlet/>
        {snack.isDisplayed && <Snackbar/>}
    </div>
  );
}

export default App;
