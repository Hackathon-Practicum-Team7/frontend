import './app.css';

import {BrowserRouter} from "react-router-dom";
import RoutesComponent from "../routes-component/routes-component";
import {ReactElement} from "react";

import {Header} from "../header/header";
import {Footer} from "../footer/footer";

function App(): ReactElement {
  const isLoginRoute = window.location.pathname === '/login';

  return (
    <BrowserRouter>
      {
        !isLoginRoute &&
        <Header/>
      }
      <main className="main"
            style={{
              width: `${isLoginRoute && '100%'}`,
              background: `${!isLoginRoute && 'none'}`
            }}>
        <RoutesComponent/>
      </main>
      <Footer isTransparent={isLoginRoute}/>
    </BrowserRouter>
  )
}

export default App
