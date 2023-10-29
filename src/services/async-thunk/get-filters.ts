import {filterActions} from "../slices/get-filters";
import {baseUrl} from "../../utils/constants/constants";
import {AppDispatch, AppThunk} from "../slices-types";
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

export const getSkills = (): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(filterActions.getSkillsLoading());
    return fetch(
      `${baseUrl}/skills`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => getResponseData(res))
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
      `${baseUrl}/professions`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => getResponseData(res))
      .then((res) => {
        dispatch(filterActions.getProfessionStreamSuccess(res));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(filterActions.getProfessionStreamFailed());
      })
  }
}
