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
        // console.log(data)
        setCookie('accessToken', data.access)
        setCookie('refreshToken', data.refresh)
        dispatch(userDataActions.setTokens({access: data.access, refresh: data.refresh}))
      })
      .catch((error) => {
        console.log(error)
        // dispatch(userDataActions.getUserDataFailed({message: error.message}))
      });
  }
}
