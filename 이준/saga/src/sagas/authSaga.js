import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Axios from 'axios';
import { AuthAction } from '../actions';

const URL = "http://localhost:4000/signin";
// ID : test01
// PWD : pass1234

function* fetchAuthSaga(action) {
	const { payload: { account, password } } = action;
	try {
		const { data: { valid, token } } = yield call([Axios, 'get'], `${URL}?account=${account}&password=${password}`);
		if (valid) {
			yield put(AuthAction.loginSuccess(valid));
		} else {
			yield put(AuthAction.loginFailure(valid));
		}
	} catch (error) {
		yield put(AuthAction.loginFailure(false));
	}
};

export default function* watchAuth() {
	yield takeLatest(AuthAction.LOGIN, fetchAuthSaga);
};