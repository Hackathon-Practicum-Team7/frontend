import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TInputValuesState} from '../slices-types';
import {TInputValuesActions} from '../action-types';

export const inputValuesSlice = createSlice({
  name: 'inputValues',
  initialState: {
    email: '',
    password: ''
  } as TInputValuesState,
  reducers: {
    setInputValues: (state, action: PayloadAction<{ email: string, password: string }>) => {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      }
    },
    clearPassword: (state) => {
      return {
        ...state,
        password: undefined
      }
    }
  },
  clearInputValuesState: (state) => {
    return {
      ...state,
      email: '',
      password: ''
    }
  }
})

export default inputValuesSlice.reducer

export const {
  setInputValues,
  clearPassword,
  clearInputValuesState
} = inputValuesSlice.actions

export const inputValuesActions: TInputValuesActions = {
  setInputValues: setInputValues,
  clearPassword: clearPassword,
  clearInputValuesState: clearInputValuesState
}
