import {AppDispatch, AppThunk} from "../slices-types";
import {baseUrl} from "../../utils/constants/constants";
import {checkResponse, getCookie} from "../../utils/helpers";
import {downloadExcelActions} from "../slices/download-excel";


export const postDownloadExcel = (ids: string[]): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(downloadExcelActions.downloadExcelLoading());
    const token = getCookie('accessToken');
    return fetch(
      `${baseUrl}/download/excel/`, {
        method: 'POST',
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "students_id": ids.map(id => ({id: id})),
        })
      })
      .then(res => checkResponse(res))
      .then(() => {
        dispatch(downloadExcelActions.downloadExcelSuccess());
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(downloadExcelActions.downloadExcelFailed());
      })
  }
}
