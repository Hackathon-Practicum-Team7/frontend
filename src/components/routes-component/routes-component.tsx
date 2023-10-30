import React, {ReactElement} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import '../app/app.css';

import {HomePage} from "../../pages/home/home"
import {Login} from '../../pages/login/login';
import {ResultsPage} from "../../pages/results/results";
import {ProfilePage} from '../../pages/profile';
import {ProtectedRoute} from '../protected-route/protected-route';

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
      <Route path='profile/:id' element={
        <ProtectedRoute>
          <ProfilePage/>
        </ProtectedRoute>
      }/>
      <Route path='*' element={<></>}/>
    </Routes>
  );
}
