import {Action, AnyAction} from '@reduxjs/toolkit';
import {ThunkDispatch, ThunkAction} from 'redux-thunk';
import {rootReducer} from "./store";
import {TApplicationActions} from './action-types';
import {TGrade} from "../utils/constants/constants";

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<TApplicationActions>>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type TError = {
  message?: string
};

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

export type TUserData = {
  user: {
    name: string,
    avatar: string
  },
}

export type TUserDataSliceState = TUserData & {
  isUserLoading: boolean,
  accessToken: string,
  refreshToken: string,
  isError: boolean,
  error: { message: string }
}

export type TTokens = {
  access: string,
  refresh: string
}

export type TInputValuesState = {
  email: string,
  password: string | undefined,
}

export type TTableSkill = {
  title: string,
}

export type TTableStudent = {
  id: string,
  avatar: string,
  profession: string,
  name: string,
  surname: string,
  grade: TGrade,
  city: string,
  skills: TTableSkill[],
  contact: {
    email: string,
    phone: string
  },
  employment_types: string[],
  working_condition: string[],
  has_portfolio: boolean,
  skill_match: string
}

export type TGetStudentsSliceState = {
  studentsLoading: boolean,
  studentsError: boolean,
  students: TTableStudent[],
}

export type TGetStudentsQueryParams = {
  locations?: string | string[],
  employmentTypes?: string | string[],
  grade?: string | string[],
  hasPortfolio?: string,
  professions: string | string[],
  skills?: string | string[],
  workingConditions?: string | string[],
}
