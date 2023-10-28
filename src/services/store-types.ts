import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {Action, AnyAction} from '@reduxjs/toolkit';
import {ThunkDispatch, ThunkAction} from 'redux-thunk';
import {rootReducer} from "./store";

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<TApplicationActions>>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type TCity = {
  id: string,
  title: string,
}
export type TSkill = {
  id: string,
  title: string,
}

export type TProfession = {
  id: string,
  title: string,
}

export type TProfessionStream = {
  id: string,
  title: string,
  professions: TProfession[],
}

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

export type TGetFiltersSliceState = {
  citiesLoading: boolean,
  citiesError: boolean,
  cities: TCity[],
  skillsLoading: boolean,
  skillsError: boolean,
  skills: TSkill[],
  professionStreamsLoading: boolean,
  professionStreamsError: boolean,
  professionStreams: TProfessionStream[],
}

export type TApplicationActions = TFiltersActions;
