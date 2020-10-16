import React, { useEffect } from 'react';
import { useInput } from '../customs';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../actions';
import styled from 'styled-components';

const Login = () => {
    const dispatch = useDispatch();
    const failure = useSelector(({ authReducer }) => authReducer.failure);

    const [account, onAccount, setAccount] = useInput('');
    const [password, onPassword, setPassword] = useInput('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (account === '' || password === '') {
            alert('입력된 값이 없습니다.');
            return;
        }
        dispatch(AuthAction.login({ account, password }))
    }

    useEffect(() => {
        setPassword('');
        setAccount('');
    }, [failure])

    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={account} onChange={onAccount} placeholder='id' />
                <input value={password} onChange={onPassword} placeholder='password' />
                <button>로그인</button>
            </form>
            {failure > 0 && (
                <Warning>
                    로긍니 실패! 실패횟수 : {failure}
                </Warning>
            )}
        </>
    )
};

export default Login;


const Warning = styled.p`
color:red`
