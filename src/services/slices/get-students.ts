import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TGetStudentsSliceState, TTableStudent} from "../slices-types";
import {TStudentsActions} from "../action-types";

export const getStudentsSlice = createSlice({
  name: 'getStudents',
  initialState: {
    studentsLoading: false,
    studentsError: false,
    students: [],
  } as TGetStudentsSliceState,
  reducers: {
    getStudentsSuccess: (state, action: PayloadAction<TTableStudent[]>) => {
      return {
        ...state,
        studentsLoading: false,
        studentsError: false,
        students: action.payload
      }
    },
    getStudentsLoading: (state) => {
      return {
        ...state,
        studentsLoading: true,
        studentsError: false,
      }
    },
    getStudentsFailed: (state) => {
      return {
        ...state,
        studentsLoading: false,
        studentsError: true,
      }
    },
  }
})

export default getStudentsSlice.reducer

const {
  getStudentsSuccess,
  getStudentsLoading,
  getStudentsFailed,
} = getStudentsSlice.actions

export const studentsActions: TStudentsActions = {
  getStudentsSuccess: getStudentsSuccess,
  getStudentsLoading: getStudentsLoading,
  getStudentsFailed: getStudentsFailed,
}
