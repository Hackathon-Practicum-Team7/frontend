import { createSlice,} from '@reduxjs/toolkit';
import {TFavoriteStudentsSliceState} from "../slices-types";
import {TFavoriteStudentsActions} from "../action-types";

export const favoriteStudentsSlice = createSlice({
  name: 'favoriteStudents',
  initialState: {
    postFavoriteLoading: false,
    postFavoriteError: false,
    deleteFavoriteLoading: false,
    deleteFavoriteError: false,
  } as TFavoriteStudentsSliceState,
  reducers: {
    postFavoriteSuccess: (state) => {
      return {
        ...state,
        postFavoriteLoading: false,
        postFavoriteError: false,
      }
    },
    postFavoriteLoading: (state) => {
      return {
        ...state,
        postFavoriteLoading: true,
        postFavoriteError: false,
      }
    },
    postFavoriteFailed: (state) => {
      return {
        ...state,
        postFavoriteLoading: false,
        postFavoriteError: true,
      }
    },
    deleteFavoriteSuccess: (state) => {
      return {
        ...state,
        deleteFavoriteLoading: false,
        deleteFavoriteError: false,
      }
    },
    deleteFavoriteLoading: (state) => {
      return {
        ...state,
        deleteFavoriteLoading: true,
        deleteFavoriteError: false,
      }
    },
    deleteFavoriteFailed: (state) => {
      return {
        ...state,
        deleteFavoriteLoading: false,
        deleteFavoriteError: true,
      }
    },
  }
})

export default favoriteStudentsSlice.reducer

const {
  postFavoriteSuccess,
  postFavoriteLoading,
  postFavoriteFailed,
  deleteFavoriteSuccess,
  deleteFavoriteLoading,
  deleteFavoriteFailed
} = favoriteStudentsSlice.actions

export const favoriteStudentsActions: TFavoriteStudentsActions = {
  postFavoriteSuccess: postFavoriteSuccess,
  postFavoriteLoading: postFavoriteLoading,
  postFavoriteFailed: postFavoriteFailed,
  deleteFavoriteSuccess: deleteFavoriteSuccess,
  deleteFavoriteLoading: deleteFavoriteLoading,
  deleteFavoriteFailed: deleteFavoriteFailed
}
