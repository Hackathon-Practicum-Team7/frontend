import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {TError, TTokens, TUserData, TUserDataSliceState} from '../slices-types';
import {act} from 'react-dom/test-utils';
import {TUserDataActions} from '../action-types';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    isUserLoading: false,
    user: {
      name: '',
      avatar: ''
    },
    accessToken: '',
    refreshToken: '',
    isAuthorized: false,
    isError: false,
    error: {message: ''}
  } as TUserDataSliceState,
  reducers: {
    getUserDataLoading: (state) => {
      return {
        ...state,
        isUserLoading: true,
        isError: false
      }
    },
    setTokens: (state, action: PayloadAction<TTokens>) => {
      return {
        ...state,
        isUserLoading: false,
        accessToken: action.payload.access,
        refreshToken: action.payload.refresh,
        isAuthorized: true,
        isError: false
      }
    },
    // TODO: проверить схему для юзера на бэке и поправить
    getUserData: (state, action: PayloadAction<TUserData>) => {
      return {
        ...state,
        isUserLoading: false,
        user: {
          ...state.user,
          name: action.payload.user.name,
          avatar: action.payload.user.avatar
        },
        isError: false
      }
    },
    getUserDataFailed: (state, action: PayloadAction<TError>) => {
      return {
        ...state,
        isLading: false,
        isAuthorized: false,
        isError: true,
        error: {message: action.payload}
      }
    },
  }
})

export default userDataSlice.reducer

export const {
  getUserDataLoading,
  setTokens,
  getUserData,
  getUserDataFailed
} = userDataSlice.actions

export const userDataActions: TUserDataActions = {
  getUserDataLoading: getUserDataLoading,
  setTokens: setTokens,
  getUserData: getUserData,
  getUserDataFailed: getUserDataFailed
}
