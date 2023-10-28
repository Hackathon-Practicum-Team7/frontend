import {filterActions} from "../slices/get-filters";
import {baseUrl} from "../../utils/constants/constants";
import {AppDispatch, AppThunk} from "../store-types";
import {getResponseData} from "../../utils/helpers";

export const getCities = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(filterActions.getCitiesLoading());
    return fetch(
      `${baseUrl}/cities`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => getResponseData(res))
      .then((res) => {
        dispatch(filterActions.getCitiesSuccess(res));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(filterActions.getCitiesFailed());
      })
  }
}
