import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../actions';

const Login = () => {
	const dispatch = useDispatch();
	const [account, setAccount] = useState("");
	const [password, setPassword] = useState("");

	const failure = useSelector(({ authReducer }) => {
		return authReducer.failure;
	});

	const onChangeAccount = (ev) => {
		const { target: { value } } = ev;
		setAccount(value);
	};

	const onChangePassword = (ev) => {
		const { target: { value } } = ev;
		setPassword(value);
	};

	const onSubmit = ev => {
		ev.preventDefault();
		if (account === '' || password === '') {
			alert('입력된 값이 없습니다');
			return;
		}
		dispatch(AuthAction.login({ account, password }));
	};

	useEffect(() => {
		setPassword('');
	}, [failure]);

	return (
		<Form onSubmit={onSubmit}>
			<h1>로그인</h1>
			<input value={account} onChange={onChangeAccount} placeholder="아이디" />
			<input value={password} onChange={onChangePassword} type="password" placeholder="비밀번호" />
			<button>로그인</button>
			{failure > 0 && (
				<Warning>로그인 실패! 실패횟수: {failure}</Warning>
			)}
		</Form>
	);
};

export default Login;

const Warning = styled.p`
	color: red;
`;

const Form = styled.form`
	width: 400px;
	padding: 50px;
	margin: 100px auto;
	background: white;
	box-shadow: 0 0 15px rgba(0 ,0, 0, .1);
	border: 1px solid #ddd;
	* {
		outline: none;
		border: none;
	}
	h1 {
		margin:0; padding: 0;
		text-align: center;
	}

	input {
		border: 1px solid #ddd;
		width: 100%;
		font-size: 20px;
		padding: 10px;
		margin-bottom: 20px;
	}
	button {
		width: 100%;
		font-size: 20px;
		background: #444;
		color: white;
		line-height: 50px;
		cursor: pointer;

		&:active {
			background: #222;
		}
	}
`;