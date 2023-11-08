import {filterActions} from "../slices/get-filters";
import {baseUrlLocal} from "../../utils/constants/constants";
import {AppDispatch, AppThunk} from "../slices-types";
import {getResponseData} from "../../utils/helpers";

export const getCities = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(filterActions.getCitiesLoading());
    return fetch(
      `${baseUrlLocal}/cities`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => getResponseData<any>(res))
      .then((res) => {
        dispatch(filterActions.getCitiesSuccess(res));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(filterActions.getCitiesFailed());
      })
  }
}

export const getSkills = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(filterActions.getSkillsLoading());
    return fetch(
      `${baseUrlLocal}/skills`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => getResponseData<any>(res))
      .then((res) => {
        dispatch(filterActions.getSkillsSuccess(res));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(filterActions.getSkillsFailed());
      })
  }
}

export const getProfessionSkills = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(filterActions.getProfessionStreamLoading());
    return fetch(
      `${baseUrlLocal}/professions`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => getResponseData<any>(res))
      .then((res) => {
        dispatch(filterActions.getProfessionStreamSuccess(res));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(filterActions.getProfessionStreamFailed());
      })
  }
}
