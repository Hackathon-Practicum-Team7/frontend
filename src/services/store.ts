import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {getFiltersSlice} from "./slices/get-filters";
import {userDataSlice} from './slices/user-data';
import {inputValuesSlice} from './async-thunk/login-input-values';
import {getStudentsSlice} from "./slices/get-students";

export const rootReducer = combineReducers({
    getFiltersState: getFiltersSlice.reducer,
    userDataState: userDataSlice.reducer,
    inputValuesState: inputValuesSlice.reducer,
    getStudentsState: getStudentsSlice.reducer
  }
);

export const store = configureStore({
  reducer: rootReducer,
});
