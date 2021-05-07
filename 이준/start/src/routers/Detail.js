import React, { useEffect } from 'react';
import styled from 'styled-components';

function Detail({ match: { params: { board_id } } }) {

	useEffect(() => {
		
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