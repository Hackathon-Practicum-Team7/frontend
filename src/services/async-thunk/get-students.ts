import {AppDispatch, AppThunk, TGetStudentsQueryParams} from "../slices-types";
import {baseUrl} from "../../utils/constants/constants";
import {getCookie, getResponseData} from "../../utils/helpers";
import {studentsActions} from "../slices/get-students";

const filterOptionalParams = (params: Record<string, string | string[] | undefined>): [string, string][] => {
  const result = [] as [string, string][];
  for (const key in params) {
    const value = params[key];
    if (value === undefined)
      continue;
    if (Array.isArray(value)) {
      value.forEach(value_i => {
        result.push([key, value_i]);
      });
      continue;
    }
    result.push([key, value]);
  }
  return result;
}

export const getStudents = ( studentsQueryParams: TGetStudentsQueryParams ): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(studentsActions.getStudentsLoading());
    const token = getCookie('accessToken');
    const params = filterOptionalParams({
      city: studentsQueryParams.locations,
      employment_types: studentsQueryParams.employmentTypes,
      grade: studentsQueryParams.grade,
      has_portfolio: studentsQueryParams.hasPortfolio,
      profession: studentsQueryParams.professions,
      skills: studentsQueryParams.skills,
      working_condition: studentsQueryParams.workingConditions,
    });
    const queryParams = new URLSearchParams(params).toString();
    return fetch(
      `${baseUrl}/students?` + queryParams, {
        method: 'GET',
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        }
      })
      .then(res => getResponseData(res))
      .then((res) => {
        dispatch(studentsActions.getStudentsSuccess(res));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(studentsActions.getStudentsFailed());
      })
  }
}
