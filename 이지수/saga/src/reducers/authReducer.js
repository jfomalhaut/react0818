import { AuthAction } from '../actions';

const initialState = {
    auth: {}, //로그인 회원정보
    logged: false, //로그인 여부
    failure: 0 //로그인 실패 횟수
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthAction.LOGIN: {
            return {
                ...state,
                payload: action.payload
            };
        }
        case AuthAction.LOGIN_SUCCESS: {
            return {
                ...state,
                logged: action.valid,
                failure: 0
            };
        }
        case AuthAction.LOGIN_FAILURE: {
            return {
                ...state,
                failure: state.failure + 1
            };
        }
        default: {
            return state;
        }
    }
}

export default authReducer;
