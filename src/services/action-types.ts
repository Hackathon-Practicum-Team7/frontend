import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from '@reduxjs/toolkit';
import {TCity, TError, TProfessionStream, TProfileData, TSkill, TTokens, TUserData} from './slices-types';

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
  setTokens: ActionCreatorWithPayload<TTokens>,
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

export type TApplicationActions =
  TFiltersActions
  | TUserDataActions
  | TInputValuesActions
