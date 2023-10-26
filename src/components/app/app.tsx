import './app.css'
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "../routes-component/routes-component";
import {ReactElement} from "react";

function App(): ReactElement {

  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  )
}

export default App
