const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const login = (payload) => ({ type: LOGIN, payload });
const loginSuccess = (valid) => ({ type: LOGIN_SUCCESS, valid });
const loginFailure = (valid) => ({ type: LOGIN_FAILURE, valid });

const AuthAction = {
    LOGIN,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    login,
    loginFailure,
    loginSuccess
}

export { AuthAction };
