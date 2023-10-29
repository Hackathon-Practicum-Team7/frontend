import {Route, Routes, Navigate} from 'react-router-dom'
import React, {ReactElement} from 'react'
import {HomePage} from "../../pages/home/home"
import {Login} from '../../pages/login/login';
import {ResultsPage} from "../../pages/results/results";
import {ProfilePage} from '../../pages/profile';
import {ProtectedRoute} from '../protected-route/protected-route';
import {useSelector} from '../../services/hooks/use-selector';
import {Outlet} from '@mui/icons-material';

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
      <Route path='profile/:id' element={<ProfilePage />} />
      <Route path='*' element={<></>} />
    </Routes>
  );
}
