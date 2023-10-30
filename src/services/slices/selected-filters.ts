import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ISelectedFilters} from "../../utils/types";
import {TSelectedFiltersActions} from "../action-types";

export const selectedFiltersSlice = createSlice({
  name: 'selectedFilters',
  initialState: {} as ISelectedFilters,
  reducers: {
    setSelectedFilters: (state, action: PayloadAction<ISelectedFilters>) => {
      return {
        ...state,
        ...action.payload,
      }
    },
  }
})

export default selectedFiltersSlice.reducer

const {
  setSelectedFilters,
} = selectedFiltersSlice.actions

export const selectedFiltersActions: TSelectedFiltersActions = {
  setSelectedFilters: setSelectedFilters
}
