import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {TError, TUserData, TUserDataSliceState} from '../slices-types';
import {TUserDataActions} from '../action-types';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    isUserLoading: false,
    user: {
      id: '',
      email: '',
      name: '',
      surname: '',
      avatar: '',
      company: '',
      favorite_students: []
    },
    isAuthorized: false,
    isError: false,
    error: {}
  } as TUserDataSliceState,
  reducers: {
    getUserDataLoading: (state) => {
      return {
        ...state,
        isUserLoading: true,
        isError: false
      }
    },
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isAuthorized: action.payload
      }
    },
    getUserData: (state, action: PayloadAction<TUserData>) => {
      return {
        ...state,
        isUserLoading: false,
        user: action.payload,
        isError: false
      }
    },
    getUserDataFailed: (state, action: PayloadAction<TError>) => {
      console.log(action.payload)
      return {
        ...state,
        isLading: false,
        isAuthorized: false,
        isError: true,
        error: {
          errorCode: action.payload.errorCode,
          message: action.payload.message,
        }
      }
    },
  }
})

export default userDataSlice.reducer

export const {
  getUserDataLoading,
  setIsAuthorized,
  getUserData,
  getUserDataFailed
} = userDataSlice.actions

export const userDataActions: TUserDataActions = {
  getUserDataLoading: getUserDataLoading,
  setIsAuthorized: setIsAuthorized,
  getUserData: getUserData,
  getUserDataFailed: getUserDataFailed
}
