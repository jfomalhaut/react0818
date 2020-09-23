const ON_INCREASE = 'ON_INCREASE';
const ON_DECREASE = 'ON_DECREASE';

const onIncrease = () => ({ type: ON_INCREASE });
const onDecrease = () => ({ type: ON_DECREASE });

const Count = {
    ON_INCREASE,
    ON_DECREASE,
    onIncrease,
    onDecrease
}

export { Count };
