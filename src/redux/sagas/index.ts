import { all } from "redux-saga/effects";
import heroWatcher from "./heroSaga";

export default function* rootSaga() {
  yield all([heroWatcher()]);
}
