import {AppDispatch, AppThunk, TTokens} from '../slices-types';
import {userDataActions} from '../slices/user-data';

import {baseUrl} from '../../utils/constants/constants';
import {getResponseData} from '../../utils/helpers';
import {setCookie} from '../../utils/helpers';

export const login = (email: string, password: string): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(userDataActions.getUserDataLoading());

    return fetch(`${baseUrl}/auth/jwt/create/`, {
      method: 'POST',
      // mode: 'cors',
      // cache: 'no-cache',
      // credentials: 'same-origin',
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
      .then(res => getResponseData<TTokens>(res))
      .then(data => {
        console.log(data)
        setCookie('accessToken', data.access)
        setCookie('refreshToken', data.refresh)
        dispatch(userDataActions.setTokens({access: data.access, refresh: data.refresh}));
        dispatch(userDataActions.setIsAuthorized(true));
      })
      .catch((error) => {
        console.log(error)
        // dispatch(userDataActions.getUserDataFailed({message: error.message}))
      });
  }
}


export const validateToken = (token: string) => {

  return fetch(`${baseUrl}/auth/jwt/verify/`, {
    method: 'POST',
    // mode: 'cors',
    // cache: 'no-cache',
    // credentials: 'same-origin',
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
    .then((data) => {
      console.log("verifiedToken: ", data)
    })
    .catch((error) => {
      console.log(error)
      throw error
      // dispatch(userDataActions.getUserDataFailed({message: error.message}))
    });
}


export const refreshToken = (refreshToken: string) => {

  return fetch(`${baseUrl}/auth/jwt/refresh/`, {
    method: 'POST',
    // mode: 'cors',
    // cache: 'no-cache',
    // credentials: 'same-origin',
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
      console.log(error)
      // dispatch(userDataActions.getUserDataFailed({message: error.message}))
    });
}
