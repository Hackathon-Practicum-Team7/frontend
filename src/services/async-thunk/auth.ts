import {AppDispatch, AppThunk, TTokens} from '../slices-types';
import {userDataActions} from '../slices/user-data';

import {baseUrl} from '../../utils/constants/constants';

import {getResponseData} from '../../utils/helpers';
import {setCookie} from '../../utils/helpers';
import UnauthorizedError from '../exceptions/error-401-unauthorized';

export const login = (email: string, password: string): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(userDataActions.getUserDataLoading());

    return fetch(`${baseUrl}/auth/jwt/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
      .then(res => {
        if (res.ok || res.status !== 401) {
          return res
        } else {
          throw new UnauthorizedError();
        }
      })
      .then(res => getResponseData<TTokens>(res))
      .then(data => {
        setCookie('accessToken', data.access);
        setCookie('refreshToken', data.refresh);
        dispatch(userDataActions.setIsAuthorized(true));
      })
      .catch((error) => {
        console.log(error)
        dispatch(userDataActions.getUserDataFailed({message: error.message}));
        throw error
      });
  }
}

export const validateToken = (token: string) => {
  return fetch(`${baseUrl}/auth/jwt/verify/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      "token": token
    })
  })
    .then(res => getResponseData<any>(res))
    .catch((error) => {
      console.log(error)
      throw error
    });
}


export const refreshToken = (refreshToken: string) => {
  return fetch(`${baseUrl}/auth/jwt/refresh/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      "refresh": refreshToken
    })
  })
    .then(res => getResponseData<{access: string}>(res))
    .then((token) => {
      setCookie('accessToken', token.access);
      return token.access
    })
    .catch((error) => {
      console.log(error);
    });
}
