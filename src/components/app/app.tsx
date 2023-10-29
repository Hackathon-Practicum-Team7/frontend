import './app.css'
import {ReactElement, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";

import RoutesComponent from "../routes-component/routes-component";

import {useDispatch} from "../../services/hooks/use-dispatch";
import {getCities, getProfessionSkills, getSkills} from "../../services/async-thunk/get-filters";

import {Header} from "../header/header";
import {Footer} from "../footer/footer";

import {getCookie} from '../../utils/helpers';

import {userDataActions} from '../../services/slices/user-data';
import {useSelector} from '../../services/hooks/use-selector';

function App(): ReactElement {
  const userDataState = useSelector(state => state.userDataState)
  const isLoginRoute = window.location.pathname === '/login';
  const dispatch = useDispatch();


  const init = async () => {
    await dispatch(userDataActions.setIsAuthorized(getCookie('accessToken') !== undefined))
    await dispatch(getCities());
    await dispatch(getSkills());
    await dispatch(getProfessionSkills());
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
      <main className={`${!isLoginRoute ? "main" : "main main_login-page"}`}>
        <RoutesComponent/>
      </main>
      <Footer isTransparent={isLoginRoute}/>
    </BrowserRouter>
  )
}

export default App
