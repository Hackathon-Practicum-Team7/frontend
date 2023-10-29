import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {getFiltersSlice} from "./slices/get-filters";
import {userDataSlice} from './slices/user-data';
import {inputValuesSlice} from './slices/login-input-values';

export const rootReducer = combineReducers({
    getFiltersState: getFiltersSlice.reducer,
    userDataState: userDataSlice.reducer,
    inputValuesState: inputValuesSlice.reducer,
  }
);

export const store = configureStore({
  reducer: rootReducer,
});
