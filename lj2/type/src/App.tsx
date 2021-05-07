import React from 'react';
import Cup from './componens/Cup';
import Product from './componens/Product';

function App() {
	const onClickHander = (qty: string) => {
		console.log(qty + '개를 구매했습니다');
	};

	return (
		<React.Fragment>
			<h1>React + TypeScript + Webpack</h1>
			{/* <Product
				name={'포도'}
				price={2000}
				dsecription={'달고 맛있는 5월의 포도'}
				buy={onClickHander}
			/> */}
			<Cup color={'orange'} volume={250} />
		</React.Fragment>
	);
};

export default App;