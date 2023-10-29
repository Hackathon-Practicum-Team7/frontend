import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TCity, TGetFiltersSliceState, TProfessionStream, TSkill} from "../slices-types";
import {TFiltersActions} from "../action-types";

export const getFiltersSlice = createSlice({
  name: 'getFilters',
  initialState: {
    citiesLoading: false,
    citiesError: false,
    cities: [],
    skillsLoading: false,
    skillsError: false,
    skills: [],
    professionStreamsLoading: false,
    professionStreamsError: false,
    professionStreams: [],
  } as TGetFiltersSliceState,
  reducers: {
    getCitiesSuccess: (state, action: PayloadAction<TCity[]>) => {
      return {
        ...state,
        citiesLoading: false,
        citiesError: false,
        cities: action.payload
      }
    },
    getCitiesLoading: (state) => {
      return {
        ...state,
        citiesLoading: true,
        citiesError: false,
      }
    },
    getCitiesFailed: (state) => {
      return {
        ...state,
        citiesLoading: false,
        citiesError: true,
      }
    },
    getSkillsSuccess: (state, action: PayloadAction<TSkill[]>) => {
      return {
        ...state,
        skillsLoading: false,
        skillsError: false,
        skills: action.payload
      }
    },
    getSkillsLoading: (state) => {
      return {
        ...state,
        skillsLoading: true,
        skillsError: false,
      }
    },
    getSkillsFailed: (state) => {
      return {
        ...state,
        skillsLoading: false,
        skillsError: true,
      }
    },
    getProfessionStreamSuccess: (state, action: PayloadAction<TProfessionStream[]>) => {
      return {
        ...state,
        professionStreamsLoading: false,
        professionStreamsError: false,
        professionStreams: action.payload
      }
    },
    getProfessionStreamLoading: (state) => {
      return {
        ...state,
        professionStreamsLoading: true,
        professionStreamsError: false,
      }
    },
    getProfessionStreamFailed: (state) => {
      return {
        ...state,
        professionStreamsLoading: false,
        professionStreamsError: true,
      }
    },
  }
})

export default getFiltersSlice.reducer

const {
  getCitiesSuccess,
  getCitiesLoading,
  getCitiesFailed,
  getSkillsSuccess,
  getSkillsLoading,
  getSkillsFailed,
  getProfessionStreamSuccess,
  getProfessionStreamLoading,
  getProfessionStreamFailed
} = getFiltersSlice.actions

export const filterActions: TFiltersActions = {
  getCitiesSuccess: getCitiesSuccess,
  getCitiesLoading: getCitiesLoading,
  getCitiesFailed: getCitiesFailed,
  getSkillsSuccess: getSkillsSuccess,
  getSkillsLoading: getSkillsLoading,
  getSkillsFailed: getSkillsFailed,
  getProfessionStreamSuccess: getProfessionStreamSuccess,
  getProfessionStreamLoading: getProfessionStreamLoading,
  getProfessionStreamFailed: getProfessionStreamFailed

}
