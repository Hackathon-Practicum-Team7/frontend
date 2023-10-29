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
  isAuthorized: boolean,
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

export type TProfileSliceState = {
  profileLoading: boolean,
  profileError: boolean,
  profile: TProfileData | null,
}

export type TProfileData = {
  id: string,
  name: string,
  surname: string,
  city: string,
  profession: string,
  grade: string,
  employment_types: string[],
  working_condition: string[],
  contact: {
    id: number,
    email: string,
    phone: string,
    portfolio: string
  },
  avatar: string,
  experience: number,
  jobs: TJob[],
  educations: TEducation[],
  about: string,
  skills: TSkillProfile[],
  resume: string,
  is_favorited: boolean
}

export type TJob = {
  id: number,
  started_at: string,
  finished_at: string,
  organisation: string,
  position: string,
  about: string
}

export type TEducation = {
  id: number,
  started_at: string,
  finished_at: string,
  institute: string,
  speciality: string
}

export type TSkillProfile = {
  id: number,
  title: string,
  score: number
}

export type TTableSkill = {
  title: string,
}

export type TTableStudent = {
  is_favourited: boolean;
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

export type TDownloadExcelSliceState = {
  downloadExcelLoading: boolean,
  downloadExcelError: boolean,
}

export type TFavoriteStudentsSliceState = {
  postFavoriteLoading: boolean,
  postFavoriteError: boolean,
  deleteFavoriteLoading: boolean,
  deleteFavoriteError: boolean,
}
