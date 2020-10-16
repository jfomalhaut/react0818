import { spawn } from "redux-saga/effects";
import watchAuth from './authSaga';

export default function* rootSaga() {
    yield spawn(watchAuth);
};
