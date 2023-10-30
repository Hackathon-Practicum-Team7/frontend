import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {getFiltersSlice} from "./slices/get-filters";
import {userDataSlice} from './slices/user-data';
import {inputValuesSlice} from './slices/login-input-values';
import { loadProfileSlice } from './slices/load-profile';
import {getStudentsSlice} from "./slices/get-students";
import {favoriteStudentsSlice} from "./slices/favorite";
import {downloadExcelSlice} from "./slices/download-excel";
import {selectedFiltersSlice} from "./slices/selected-filters";

export const rootReducer = combineReducers({
    getFiltersState: getFiltersSlice.reducer,
    userDataState: userDataSlice.reducer,
    inputValuesState: inputValuesSlice.reducer,
    loadProfileState: loadProfileSlice.reducer,
    getStudentsState: getStudentsSlice.reducer,
    downloadExcelState: downloadExcelSlice.reducer,
    favoriteStudentsState:  favoriteStudentsSlice.reducer,
    selectedFiltersState:  selectedFiltersSlice.reducer,
  }
);

export const store = configureStore({
  reducer: rootReducer,
});
