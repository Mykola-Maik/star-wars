import { call, put, takeLatest } from "redux-saga/effects";
import HttpService from "@/services/HttpService";
import type { StarshipsObject } from "@/types";
import { AxiosError, type AxiosResponse } from "axios";
import {
  getAllStarshipsFailure,
  getAllStarshipsRequest,
  getAllStarshipsSuccess,
} from "@/redux/slices/starshipSlice/starshipSlice";

function* getAllStarshipsSaga() {
  try {
    const response: AxiosResponse<StarshipsObject> = yield call(
      HttpService.get,
      "/starships"
    );

    yield put(getAllStarshipsSuccess({ starships: response.data.results }));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);
      yield put(getAllStarshipsFailure(error.message));
    } else {
      console.error("An unknown error occured!");
      yield put(getAllStarshipsFailure("An unknown error occured!"));
    }
  }
}

function* starshipWatcher() {
  yield takeLatest(getAllStarshipsRequest.type, getAllStarshipsSaga);
}

export default starshipWatcher;
