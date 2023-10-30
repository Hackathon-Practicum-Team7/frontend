import './app.css'
import {ReactElement, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";

import RoutesComponent from "../routes-component/routes-component";

import {useDispatch} from "../../services/hooks/use-dispatch";
import {getCities, getProfessionSkills, getSkills} from "../../services/async-thunk/get-filters";

import {Header} from "../header/header";
import {Footer} from "../footer/footer";

import {getCookie, isAuthorized} from '../../utils/helpers';

import {userDataActions} from '../../services/slices/user-data';
import {useSelector} from '../../services/hooks/use-selector';
import {getUser} from '../../services/async-thunk/user';

function App(): ReactElement {
  const userDataState = useSelector(state => state.userDataState)
  const dispatch = useDispatch();

  const isLoginRoute = window.location.pathname === '/login';

  const init = async () => {
    const token = getCookie('accessToken');

    console.log('currentToken:', token)
    // await dispatch(userDataActions.setIsAuthorized(token !== undefined));
    await dispatch(getUser(token ? token : ''));
    await dispatch(getCities());
    await dispatch(getSkills());
    await dispatch(getProfessionSkills());
  };

  useEffect(() => {
    init();
  }, [userDataState.isAuthorized]);

  // Подгрузка своих стилей для страницы авторизации и других страниц при переходе вперед-назад
  useEffect(() => {
    const handleLocationChange = () => {
      // Обновляем window.location.pathname при изменении адресной строки
      if (window.location.pathname === '/login') {
        window.location.pathname = window.location.pathname;
      }
    };
    // popstate - кнопки "назад-вперед" в браузере
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [window.location.pathname]);

  return (
    <BrowserRouter>
      {
        !isLoginRoute &&
        <Header/>
      }
      <main className="main">
        <RoutesComponent/>
      </main>
      <Footer isTransparent={isLoginRoute}/>
    </BrowserRouter>
  )
}

export default App
