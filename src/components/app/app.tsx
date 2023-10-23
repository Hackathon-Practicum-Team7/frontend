import './app.module.css'
import {BrowserRouter} from "react-router-dom";
import RoutesComponent from "../routes-component/routes-component";
import {Login} from '../../pages/login/login';

function App() {

  return (
    <BrowserRouter>
      <main>
        <Login/>
        {/*<RoutesComponent />*/}
      </main>
    </BrowserRouter>
  )
}

export default App
