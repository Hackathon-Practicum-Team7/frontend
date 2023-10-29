import {AppDispatch, AppThunk} from "../slices-types";
import {baseUrl} from "../../utils/constants/constants";
import {getCookie, getResponseData} from "../../utils/helpers";
import {favouriteStudentsActions} from "../slices/favourite";

export const postFavourite = (ids: string[]): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(favouriteStudentsActions.postFavouriteLoading());
    const token = getCookie('accessToken');
    return fetch(
      `${baseUrl}/students/favourite`, {
        method: 'POST',
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "students_id": ids.map(id => ({id: id})),
        })
      })
      .then(res => getResponseData(res))
      .then(() => {
        dispatch(favouriteStudentsActions.postFavouriteSuccess());
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(favouriteStudentsActions.postFavouriteFailed());
      })
  }
}

export const deleteFavourite = (ids: string[]): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(favouriteStudentsActions.deleteFavouriteLoading());
    const token = getCookie('accessToken');
    return fetch(
      `${baseUrl}/students/favourite`, {
        method: 'DELETE',
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "students_id": ids.map(id => ({id: id})),
        })
      })
      .then(res => getResponseData(res))
      .then(() => {
        dispatch(favouriteStudentsActions.deleteFavouriteSuccess());
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(favouriteStudentsActions.deleteFavouriteFailed());
      })
  }
}
