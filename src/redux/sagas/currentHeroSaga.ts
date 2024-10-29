import { call, put, takeLatest } from "redux-saga/effects";
import HttpService from "@/services/HttpService";
import { AxiosError, type AxiosResponse } from "axios";
import {
  getCurrentHeroFailure,
  getCurrentHeroFilmsFailure,
  getCurrentHeroFilmsRequest,
  getCurrentHeroFilmsSuccess,
  getCurrentHeroRequest,
  getCurrentHeroStarshipsFailure,
  getCurrentHeroStarshipsRequest,
  getCurrentHeroStarshipsSuccess,
  getCurrentHeroSuccess,
} from "@/redux/slices/currentHeroSlice/currentHeroSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { FilmsObject, Hero, StarshipsObject } from "@/types";

function* getCurrentHeroSaga({
  payload: { heroId },
}: PayloadAction<{ heroId: string }>) {
  try {
    const response: AxiosResponse<Hero> = yield call(
      HttpService.get,
      `/people/${heroId}`
    );

    yield put(getCurrentHeroSuccess(response.data));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);
      yield put(getCurrentHeroFailure(error.message));
    } else {
      console.error("An unknown error occured!");
      yield put(getCurrentHeroFailure("An unknown error occured!"));
    }
  }
}

function* getCurrentHeroFilmsSaga({
  payload: { heroId },
}: PayloadAction<{ heroId: string }>) {
  try {
    const response: AxiosResponse<FilmsObject> = yield call(
      HttpService.get,
      `/films/?characters__in=${heroId}`
    );

    yield put(getCurrentHeroFilmsSuccess(response.data.results));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);
      yield put(getCurrentHeroFilmsFailure(error.message));
    } else {
      console.error("An unknown error occured!");
      yield put(getCurrentHeroFilmsFailure("An unknown error occured!"));
    }
  }
}

function* getCurrentHeroStarshipsSaga({
  payload: { filmIds, heroId },
}: PayloadAction<{ filmIds: number[]; heroId: string }>) {
  try {
    const response: AxiosResponse<StarshipsObject> = yield call(
      HttpService.get,
      `/starships/?films__in=${filmIds.join(",")}&pilots__in=${heroId}`
    );

    yield put(getCurrentHeroStarshipsSuccess(response.data.results));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);
      yield put(getCurrentHeroStarshipsFailure(error.message));
    } else {
      console.error("An unknown error occured!");
      yield put(getCurrentHeroStarshipsFailure("An unknown error occured!"));
    }
  }
}

function* currentHeroWatcher() {
  yield takeLatest(getCurrentHeroRequest.type, getCurrentHeroSaga);
  yield takeLatest(getCurrentHeroFilmsRequest.type, getCurrentHeroFilmsSaga);
  yield takeLatest(
    getCurrentHeroStarshipsRequest.type,
    getCurrentHeroStarshipsSaga
  );
}

export default currentHeroWatcher;
