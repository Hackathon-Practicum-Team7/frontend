import {ReactElement} from 'react';
import {Route, Routes} from 'react-router-dom';

import {ProtectedRoute} from '../protected-route/protected-route';
import {HomePage} from "../../pages/home/home"
import {Login} from '../../pages/login/login';
import {ResultsPage} from "../../pages/results/results";
import {ProfilePage} from '../../pages/profile/profile';
import {InProgressPage} from '../../pages/in-progress-page';
import {NotFound404} from '../../pages/not-found-404';

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
      <Route path='/in-progress' element={<InProgressPage/>}/>
      <Route path='/*' element={<NotFound404/>}/>
    </Routes>
  );
}
