import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {TError, TUserData, TUserDataSliceState} from '../slices-types';
import {TUserDataActions} from '../action-types';
import {act} from 'react-dom/test-utils';

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
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isAuthorized: action.payload
      }
    },
    getUserData: (state, action: PayloadAction<TUserData>) => {
      console.log(action.payload)
      return {
        ...state,
        // isUserLoading: false,
        // user: {
        //   ...state.user,
        //   id: action.payload.id,
        //   email: action.payload.email,
        //   name: action.payload.name,
        //   surname: action.payload.surname,
        //   avatar: action.payload.avatar,
        //   company: action.payload.company,
        //   favorite_students: action.payload.favorite_students
        // },
        // isError: false
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
