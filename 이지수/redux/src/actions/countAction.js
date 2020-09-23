const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const RANDOM = 'RANDOM';

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
const random = (number) => ({ type: RANDOM, value: number });

const Count = {
    INCREASE,
    DECREASE,
    RANDOM,
    increase,
    decrease,
    random
}

export default Count;
