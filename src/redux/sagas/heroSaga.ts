import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllHeroesFailure,
  getAllHeroesRequest,
  getAllHeroesSuccess,
} from "@/redux/slices/heroSlice/heroSlice";
import HttpService from "@/services/HttpService";
import type { HeroesObject } from "@/types";
import { AxiosError, type AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* getAllHeroesSaga({
  payload: { page },
}: PayloadAction<{ page: number }>) {
  try {
    const response: AxiosResponse<HeroesObject> = yield call(
      HttpService.get,
      `/people?page=${page}`
    );

    yield put(
      getAllHeroesSuccess({
        heroes: response.data.results,
        count: response.data.count,
      })
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);
      yield put(getAllHeroesFailure(error.message));
    } else {
      console.error("An unknown error occured!");
      yield put(getAllHeroesFailure("An unknown error occured!"));
    }
  }
}

function* heroWatcher() {
  yield takeLatest(getAllHeroesRequest.type, getAllHeroesSaga);
}

export default heroWatcher;
