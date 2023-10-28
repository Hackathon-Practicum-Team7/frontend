import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {Action, AnyAction} from '@reduxjs/toolkit';
import {ThunkDispatch, ThunkAction} from 'redux-thunk';
import {rootReducer} from "./store";

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<TApplicationActions>>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type TCity = {
  id: string,
  title: string
}

export type TFiltersActions = {
  getCitiesSuccess: ActionCreatorWithPayload<TCity[]>,
  getCitiesLoading: ActionCreatorWithoutPayload<string>,
  getCitiesFailed: ActionCreatorWithoutPayload<string>,
}

export type TGetFiltersSliceState = {
  citiesLoading: boolean,
  citiesError: boolean,
  cities: TCity[],
}

export type TApplicationActions = TFiltersActions;
