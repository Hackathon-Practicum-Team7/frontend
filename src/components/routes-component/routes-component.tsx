
import {Route, Routes} from 'react-router-dom'
import {ReactElement} from 'react'
import {HomePage} from "../../pages/home/home"
import {Login} from '../../pages/login/login';
import {ResultsPage} from "../../pages/results/results";
import {ProfilePage} from '../../pages/profile';
import {ProtectedRoute} from '../protected-route/protected-route';
import {useSelector} from '../../services/hooks/use-selector';

export default function RoutesComponent(): ReactElement {
  const userDataState = useSelector(state => state.userDataState);

  return (
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='/' element={
        <ProtectedRoute>
          <HomePage/>
        </ProtectedRoute>
      }/>
      <Route path='results' element={<ResultsPage />} />
      <Route path='/profile/:studentId' element={<ProfilePage />} />
      <Route path='*' element={<></>} />
    </Routes>
  );
}
