const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const login = (payload) => ({ type: LOGIN, payload });
const loginSuccess = (valid) => ({ type: LOGIN_SUCCESS, valid });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, error });

const AuthAction = {
    LOGIN,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    login,
    loginFailure,
    loginSuccess
}

export { AuthAction };
