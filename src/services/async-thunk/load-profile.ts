import { baseUrl } from "../../utils/constants/constants";
import { getResponseData } from "../../utils/helpers";
import { AppThunk, AppDispatch, RootState } from "../slices-types";
import { profileActions } from "../slices/load-profile";

export const loadProfile = (studentId: string): AppThunk => {
  return async function (dispatch: AppDispatch, getState: () => RootState) {
    dispatch(profileActions.loadProfileLoading());
    const accessToken = getState().userDataState.accessToken;
    try {
      const response = await fetch(
        `${baseUrl}/students/${studentId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${accessToken}`
          }
        })
      const data = await getResponseData(response)
      dispatch(profileActions.loadProfileSuccess(data));
      //dispatch(profileActions.loadProfileSuccess(profileData as TProfileData));
    } catch (error) {
      console.error('Failed to load student profile', error);
      dispatch(profileActions.loadProfileFailed());
    }
  }
}
