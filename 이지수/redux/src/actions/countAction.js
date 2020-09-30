const ON_INCREASE = 'ON_INCREASE';
const ON_DECREASE = 'ON_DECREASE';
const ON_INPUT_NUM = 'ON_INPUT_NUM';

const onIncrease = (num) => ({ type: ON_INCREASE, num });
const onDecrease = (num) => ({ type: ON_DECREASE, num });
const onInputNum = (num) => ({ type: ON_INPUT_NUM, num })

const Count = {
    ON_INCREASE,
    ON_DECREASE,
    ON_INPUT_NUM,
    onIncrease,
    onDecrease,
    onInputNum
}

export { Count };
