import {AppDispatch, AppThunk, TUserData} from '../slices-types';
import {userDataActions} from '../slices/user-data';
import {baseUrl} from '../../utils/constants/constants';
import UnauthorizedError from '../exceptions/error-401-unauthorized';
import {getResponseData} from '../../utils/helpers';

export const getUser = (token: string | undefined): AppThunk => {
  return function (dispatch: AppDispatch) {
    // dispatch(userDataActions.getUserData());

    // const headers = !token
    //   ? {
    //     'Content-Type': 'application/json',
    //   }
    //   : {
    //     'Content-Type': 'application/json',
    //     'Authorization': `JWT ${token}`,
    //   };

    return fetch(`${baseUrl}/auth/users/me/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token ? 'JWT' + ' ' + token : undefined}`,
      }
    })
      .then(res => {
        if (res.ok || res.status !== 401) {
          return res
        } else {
          throw new UnauthorizedError();
        }
      })
      .then(res => getResponseData<TUserData>(res))
      .then(data => {
        dispatch(userDataActions.getUserData(data));
        dispatch(userDataActions.setIsAuthorized(true));
      })
      .catch((error) => {
          console.log(error);
          if (error instanceof UnauthorizedError) {
            dispatch(userDataActions.setIsAuthorized(false));
          }
          dispatch(userDataActions.getUserDataFailed({message: error.message}));
        }
      )
  }
}
