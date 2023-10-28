import './app.css'
import {BrowserRouter} from "react-router-dom";
import RoutesComponent from "../routes-component/routes-component";
import {ReactElement, useEffect} from "react";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import {useDispatch} from "../../services/hooks/use-dispatch";
import {getCities} from "../../services/async-thunk/get-filters";

function App(): ReactElement {
  const isLoginRoute = window.location.pathname === '/login';
  const dispatch = useDispatch();

  const init = async () => {
    await dispatch(getCities());
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <BrowserRouter>
      {
        !isLoginRoute &&
        <Header/>
      }
      <main className="main"
            style={{
              width: `${isLoginRoute && '100%'}`,
              background: `${!isLoginRoute && 'none'}`,
              flexGrow: '1'
            }}>
        <RoutesComponent/>
      </main>
      <Footer isTransparent={isLoginRoute}/>
    </BrowserRouter>
  )
}

export default App
