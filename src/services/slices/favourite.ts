import { createSlice,} from '@reduxjs/toolkit';
import {TFavouriteStudentsSliceState} from "../slices-types";
import {TFavouriteStudentsActions} from "../action-types";

export const favouriteStudentsSlice = createSlice({
  name: 'favouriteStudents',
  initialState: {
    postFavouriteLoading: false,
    postFavouriteError: false,
    deleteFavouriteLoading: false,
    deleteFavouriteError: false,
  } as TFavouriteStudentsSliceState,
  reducers: {
    postFavouriteSuccess: (state) => {
      return {
        ...state,
        postFavouriteLoading: false,
        postFavouriteError: false,
      }
    },
    postFavouriteLoading: (state) => {
      return {
        ...state,
        postFavouriteLoading: true,
        postFavouriteError: false,
      }
    },
    postFavouriteFailed: (state) => {
      return {
        ...state,
        postFavouriteLoading: false,
        postFavouriteError: true,
      }
    },
    deleteFavouriteSuccess: (state) => {
      return {
        ...state,
        deleteFavouriteLoading: false,
        deleteFavouriteError: false,
      }
    },
    deleteFavouriteLoading: (state) => {
      return {
        ...state,
        deleteFavouriteLoading: true,
        deleteFavouriteError: false,
      }
    },
    deleteFavouriteFailed: (state) => {
      return {
        ...state,
        deleteFavouriteLoading: false,
        deleteFavouriteError: true,
      }
    },
  }
})

export default favouriteStudentsSlice.reducer

const {
  postFavouriteSuccess,
  postFavouriteLoading,
  postFavouriteFailed,
  deleteFavouriteSuccess,
  deleteFavouriteLoading,
  deleteFavouriteFailed
} = favouriteStudentsSlice.actions

export const favouriteStudentsActions: TFavouriteStudentsActions = {
  postFavouriteSuccess: postFavouriteSuccess,
  postFavouriteLoading: postFavouriteLoading,
  postFavouriteFailed: postFavouriteFailed,
  deleteFavouriteSuccess: deleteFavouriteSuccess,
  deleteFavouriteLoading: deleteFavouriteLoading,
  deleteFavouriteFailed: deleteFavouriteFailed
}
