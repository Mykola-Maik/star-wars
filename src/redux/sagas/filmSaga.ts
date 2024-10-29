import { call, put, takeLatest } from "redux-saga/effects";
import HttpService from "@/services/HttpService";
import type { FilmsObject } from "@/types";
import { AxiosError, type AxiosResponse } from "axios";
import {
  getAllFilmsFailure,
  getAllFilmsRequest,
  getAllFilmsSuccess,
} from "@/redux/slices/filmSlice/filmSlice";

function* getAllFilmsSaga() {
  try {
    const response: AxiosResponse<FilmsObject> = yield call(
      HttpService.get,
      "/films"
    );

    yield put(getAllFilmsSuccess({ films: response.data.results }));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);
      yield put(getAllFilmsFailure(error.message));
    } else {
      console.error("An unknown error occured!");
      yield put(getAllFilmsFailure("An unknown error occured!"));
    }
  }
}

function* filmWatcher() {
  yield takeLatest(getAllFilmsRequest.type, getAllFilmsSaga);
}

export default filmWatcher;
