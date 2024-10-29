import { all } from "redux-saga/effects";
import heroWatcher from "@/redux/sagas/heroSaga";
import currentHeroWatcher from "@/redux/sagas/currentHeroSaga";
import filmWatcher from "@/redux/sagas/filmSaga";
import starshipWatcher from "@/redux/sagas/starshipSaga";

export default function* rootSaga() {
  yield all([
    heroWatcher(),
    currentHeroWatcher(),
    filmWatcher(),
    starshipWatcher(),
  ]);
}
