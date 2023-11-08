import {AppDispatch, AppThunk} from "../slices-types";
import {baseUrlLocal} from "../../utils/constants/constants";
import {checkDownloadResponse, getCookie} from "../../utils/helpers";
import {downloadExcelActions} from "../slices/download-excel";


export const postDownloadExcel = (ids: string[]): AppThunk => {
  return function (dispatch: AppDispatch) {
    dispatch(downloadExcelActions.downloadExcelLoading());
    const token = getCookie('accessToken');
    return fetch(
      `${baseUrlLocal}/download/excel/`, {
        method: 'POST',
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "students_id": ids.map(id => ({id: id})),
        })
      })

      .then(res => checkDownloadResponse(res))
      .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "candidates.xlsx";
            document.body.appendChild(a);
            a.click();
            a.remove();
          })
      .catch((err) => {
        console.log(err.message);
        dispatch(downloadExcelActions.downloadExcelFailed());
      })
  }
}
