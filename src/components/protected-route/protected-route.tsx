import React, {FunctionComponent} from 'react';
import {Navigate} from 'react-router-dom';
import {deleteCookie, getCookie, setCookie} from '../../utils/helpers';
import {validateToken, refreshToken} from '../../services/async-thunk/auth';

export const ProtectedRoute: FunctionComponent<{ children: React.ReactNode }> = (props) => {

  const isAuthorized = () => {
    const token = getCookie('accessToken');
    const refresh = getCookie('refreshToken');
    if (!token) {
      if (!refresh) {
        return false;
      }
      return refreshToken(refresh)
        .then(() => isAuthorized())
        .catch((err) => deleteCookie('refreshToken'))
    }
    return validateToken(token)
      .then(() => true)
      .catch((err) => {
        deleteCookie('accessToken');
        if (!refresh) {
          return false
        }
        return refreshToken(refresh)
          .then(() => isAuthorized())
          .catch((err) => deleteCookie('refreshToken'))
      })
  }
  const authorized = isAuthorized()
  console.log('authorized: ', authorized)

  return authorized ? props.children : <Navigate to="/login"/>;
};
