import React, { useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

function Detail({ match: { params: { board_id } } }) {

	const getDetailInfo = async () => {
		const boardInfo = await Axios
	};

	useEffect(() => {
		getDetailInfo();
	}, [board_id]);

	return (
		<Container>
			
		</Container>
	);
}

export default Detail;

const Container = styled.div`
	width: 1000px;
	margin: 50px auto;

`;