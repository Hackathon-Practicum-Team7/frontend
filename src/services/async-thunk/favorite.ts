import {AppDispatch, AppThunk} from "../slices-types";
import {baseUrlLocal} from "../../utils/constants/constants";
import {checkResponse, getCookie} from "../../utils/helpers";
import {favoriteStudentsActions} from "../slices/favorite";

export const postFavourite = (ids: string[]): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(favoriteStudentsActions.postFavoriteLoading());
    const token = getCookie('accessToken');
    return fetch(
      `${baseUrlLocal}/students/favorite/`, {
        method: 'POST',
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "students_id": ids.map(id => ({id: id})),
        })
      })
      .then(res => checkResponse(res))
      .then(() => {
        dispatch(favoriteStudentsActions.postFavoriteSuccess());
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(favoriteStudentsActions.postFavoriteFailed());
      })
  }
}

export const deleteFavorite = (ids: string[]): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(favoriteStudentsActions.deleteFavoriteLoading());
    const token = getCookie('accessToken');
    return fetch(
      `${baseUrlLocal}/students/favorite/`, {
        method: 'DELETE',
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "students_id": ids.map(id => ({id: id})),
        })
      })
      .then(res => checkResponse(res))
      .then(() => {
        dispatch(favoriteStudentsActions.deleteFavoriteSuccess());
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(favoriteStudentsActions.deleteFavoriteFailed());
      })
  }
}
