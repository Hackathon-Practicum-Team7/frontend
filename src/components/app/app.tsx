import './app.css'
import {ReactElement, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";

import RoutesComponent from "../routes-component/routes-component";

import {useDispatch} from "../../services/hooks/use-dispatch";
import {getCities, getProfessionSkills, getSkills} from "../../services/async-thunk/get-filters";

import {Header} from "../header/header";
import {Footer} from "../footer/footer";

import {getCookie} from '../../utils/helpers';

import {useSelector} from '../../services/hooks/use-selector';
import {getUser} from '../../services/async-thunk/user';

function App(): ReactElement {
  const userDataState = useSelector(state => state.userDataState)
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getCities());
      await dispatch(getSkills());
      await dispatch(getProfessionSkills());
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const token = getCookie('accessToken');

      console.log('currentToken:', token)
      // await dispatch(userDataActions.setIsAuthorized(token !== undefined));
      await dispatch(getUser(token ? token : ''));
    })();
  }, [userDataState.isAuthorized]);

  return (
    <BrowserRouter>
      <Header/>
      <main className="main">
        <RoutesComponent/>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
