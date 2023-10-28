import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TCity, TFiltersActions, TGetFiltersSliceState} from "../store-types";

export const getFiltersSlice = createSlice({
  name: 'getFilters',
  initialState: {
    citiesLoading: false,
    citiesError: false,
    cities: [],
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
    }
  }
})

export default getFiltersSlice.reducer

const {
  getCitiesSuccess,
  getCitiesLoading,
  getCitiesFailed
} = getFiltersSlice.actions

export const filterActions: TFiltersActions = {
  getCitiesSuccess: getCitiesSuccess,
  getCitiesLoading: getCitiesLoading,
  getCitiesFailed: getCitiesFailed
}
