import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { TProfileData, TProfileSliceState } from "../slices-types";
import { TProfileActions } from '../action-types';

export const loadProfileSlice = createSlice({
  name: 'loadProfile',
  initialState: {
    profileLoading: false,
    profileError: false,
    profile: null,
  } as TProfileSliceState,
  reducers: {
    loadProfileLoading: (state) => {
      return {
        ...state,
        profileLoading: true,
        profileError: false,
      }
    },
    loadProfileSuccess: (state, action: PayloadAction<TProfileData>) => {
      return {
        ...state,
        profileLoading: false,
        profileError: false,
        profile: action.payload
      }
    },
    loadProfileFailed: (state) => {
      return {
        ...state,
        profileLoading: false,
        profileError: true,
      }
    },

  }
})

export default loadProfileSlice.reducer

export const profileActions: TProfileActions = loadProfileSlice.actions
