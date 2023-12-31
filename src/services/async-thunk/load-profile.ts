import { baseUrlLocal } from "../../utils/constants/constants";
import {getCookie, getResponseData} from "../../utils/helpers";
import { AppThunk, AppDispatch } from "../slices-types";
import { profileActions } from "../slices/load-profile";

export const loadProfile = (studentId: string): AppThunk => {
  return async function (dispatch: AppDispatch) {
    dispatch(profileActions.loadProfileLoading());
    const token = getCookie('accessToken');
    try {
      const response = await fetch(
        `${baseUrlLocal}/students/${studentId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`
          }
        })
      const data = await getResponseData<any>(response)
      dispatch(profileActions.loadProfileSuccess(data));
    } catch (error) {
      console.error('Failed to load student profile', error);
      dispatch(profileActions.loadProfileFailed());
    }
  }
}
