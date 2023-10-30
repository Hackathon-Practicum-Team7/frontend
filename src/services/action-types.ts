import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from '@reduxjs/toolkit';

import {TCity, TError, TProfessionStream, TSkill, TProfileData, TTableStudent, TUserData} from './slices-types';
import {ISelectedFilters} from "../utils/types";

export type TFiltersActions = {
  getCitiesSuccess: ActionCreatorWithPayload<TCity[]>,
  getCitiesLoading: ActionCreatorWithoutPayload<string>,
  getCitiesFailed: ActionCreatorWithoutPayload<string>,
  getSkillsSuccess: ActionCreatorWithPayload<TSkill[]>,
  getSkillsLoading: ActionCreatorWithoutPayload<string>,
  getSkillsFailed: ActionCreatorWithoutPayload<string>,
  getProfessionStreamSuccess: ActionCreatorWithPayload<TProfessionStream[]>,
  getProfessionStreamLoading: ActionCreatorWithoutPayload<string>,
  getProfessionStreamFailed: ActionCreatorWithoutPayload<string>,
}

export type TUserDataActions = {
  getUserDataLoading: ActionCreatorWithoutPayload<string>,
  setIsAuthorized: ActionCreatorWithPayload<boolean>,
  getUserData: ActionCreatorWithPayload<TUserData>,
  getUserDataFailed: ActionCreatorWithPayload<TError>,
}

export type TInputValuesActions = {
  setInputValues: ActionCreatorWithPayload<{ email: string, password: string }>,
  clearPassword: ActionCreatorWithoutPayload<string>,
  clearInputValuesState: ActionCreatorWithoutPayload<string>,
}

export type TProfileActions = {
    loadProfileLoading: ActionCreatorWithoutPayload<string>,
    loadProfileSuccess: ActionCreatorWithPayload<TProfileData>,
    loadProfileFailed: ActionCreatorWithoutPayload<string>,
}

export type TStudentsActions = {
  getStudentsSuccess: ActionCreatorWithPayload<TTableStudent[]>,
  getStudentsLoading: ActionCreatorWithoutPayload<string>,
  getStudentsFailed: ActionCreatorWithoutPayload<string>,
}

export type TDownloadExcelActions = {
  downloadExcelSuccess: ActionCreatorWithoutPayload<string>,
  downloadExcelLoading: ActionCreatorWithoutPayload<string>,
  downloadExcelFailed: ActionCreatorWithoutPayload<string>,
}

export type TFavoriteStudentsActions = {
  postFavoriteSuccess: ActionCreatorWithoutPayload<string>,
  postFavoriteLoading: ActionCreatorWithoutPayload<string>,
  postFavoriteFailed: ActionCreatorWithoutPayload<string>,
  deleteFavoriteSuccess: ActionCreatorWithoutPayload<string>,
  deleteFavoriteLoading: ActionCreatorWithoutPayload<string>,
  deleteFavoriteFailed: ActionCreatorWithoutPayload<string>,
}

export type TSelectedFiltersActions = {
  setSelectedFilters: ActionCreatorWithPayload<ISelectedFilters>,
}

export type TApplicationActions =
  TFiltersActions
  | TUserDataActions
  | TInputValuesActions
  | TStudentsActions
  | TDownloadExcelActions
  | TFavoriteStudentsActions
  | TSelectedFiltersActions
