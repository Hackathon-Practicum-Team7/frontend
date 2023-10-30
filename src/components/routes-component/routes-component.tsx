import {ReactElement} from 'react';
import {Route, Routes} from 'react-router-dom';

import {ProtectedRoute} from '../protected-route/protected-route';
import {HomePage} from "../../pages/home/home"
import {Login} from '../../pages/login/login';
import {ResultsPage} from "../../pages/results/results";
import {ProfilePage} from '../../pages/profile/profile';

export default function RoutesComponent(): ReactElement {
  return (
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='/' element={
        <ProtectedRoute>
          <HomePage/>
        </ProtectedRoute>
      }/>
      <Route path='results' element={
        <ProtectedRoute>
          <ResultsPage/>
        </ProtectedRoute>
      }/>
      <Route path='profile/:studentId' element={
        <ProtectedRoute>
          <ProfilePage/>
        </ProtectedRoute>
      }/>
      <Route path='*' element={<></>}/>
    </Routes>
  );
}
