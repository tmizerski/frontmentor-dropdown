import './App.css';
import Navigation from "./components/navigation/topMenu";
import { Outlet } from "react-router";


function App() {

  return (
    <div className="App">
      <Navigation/>
      <Outlet/>
    </div>
  );
}

export default App;
