import {ReactElement} from 'react';
import {Route, Routes} from 'react-router-dom';

import {ProtectedRoute} from '../protected-route/protected-route';
import {HomePage} from "../../pages/home/home"
import {Login} from '../../pages/login/login';
import {ResultsPage} from "../../pages/results/results";
import {ProfilePage} from '../../pages/profile/profile';
import { ApologyPage } from '../../pages/apology-page/apology-page';

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
      <Route path='/add-vacancy' element={<ApologyPage></ApologyPage>} />
      <Route path='/*' element={<></>}/>
    </Routes>
  );
}
