import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {getFiltersSlice} from "./slices/get-filters";

export const rootReducer = combineReducers({
    getFiltersState: getFiltersSlice.reducer,
  }
);

export const store = configureStore({
  reducer: rootReducer,
});
