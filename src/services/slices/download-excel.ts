import { createSlice } from '@reduxjs/toolkit';
import {TDownloadExcelSliceState} from "../slices-types";
import {TDownloadExcelActions} from "../action-types";

export const downloadExcelSlice = createSlice({
  name: 'downloadExcel',
  initialState: {
    downloadExcelLoading: false,
    downloadExcelError: false,
  } as TDownloadExcelSliceState,
  reducers: {
    downloadExcelSuccess: (state) => {
      return {
        ...state,
        downloadExcelLoading: false,
        downloadExcelError: false,
      }
    },
    downloadExcelLoading: (state) => {
      return {
        ...state,
        downloadExcelLoading: true,
        downloadExcelError: false,
      }
    },
    downloadExcelFailed: (state) => {
      return {
        ...state,
        downloadExcelLoading: false,
        downloadExcelError: true,
      }
    },
  }
})

export default downloadExcelSlice.reducer

const {
  downloadExcelSuccess,
  downloadExcelLoading,
  downloadExcelFailed,
} = downloadExcelSlice.actions

export const downloadExcelActions: TDownloadExcelActions = {
  downloadExcelSuccess: downloadExcelSuccess,
  downloadExcelLoading: downloadExcelLoading,
  downloadExcelFailed: downloadExcelFailed,
}
