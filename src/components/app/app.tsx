import './app.css'
import {BrowserRouter} from "react-router-dom";
import RoutesComponent from "../routes-component/routes-component";
import {ReactElement} from "react";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";

function App(): ReactElement {

  return (
    <BrowserRouter>
      <Header />
      <main style={{ width: '1440px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <RoutesComponent />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
