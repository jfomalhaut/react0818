const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILUER = "LOGIN_FAILUER";
const LOGOUT = "LOGOUT";

const login = (payload) => ({ type: LOGIN, payload });
const loginSuccess = (valid) => ({ type: LOGIN_SUCCESS, valid });
const loginFailure = (valid) => ({ type: LOGIN_FAILUER, valid });
const logout = () => ({ type: LOGOUT });

const AuthAction = {
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILUER,
	LOGOUT,
	logout,
	login,
	loginSuccess,
	loginFailure
};

export default AuthAction;