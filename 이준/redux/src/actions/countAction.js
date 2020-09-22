const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });

const Count = {
	INCREASE,
	DECREASE,
	increase,
	decrease,
};

export default Count;