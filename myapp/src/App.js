import './App.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import Main from './pages/main/main';
import Navigation from "./components/navigation/topMenu";
import Login from "./components/Login/Login";
import {Outlet} from "react-router";
// import SignUp from "./components/SingUp/SignUp";

function App() {



  return (
    <div className="App">
      <Navigation/>
      <Outlet/>
    </div>
  );
}

export default App;
