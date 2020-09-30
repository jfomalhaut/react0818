const ON_CHECK = 'ON_CHECK';
const ON_CART = 'ON_CART';

const onCheck = (id) => ({ type: ON_CHECK, id })
const onCart = () => ({ type: ON_CART })

const Check = {
    ON_CHECK,
    ON_CART,
    onCheck,
    onCart
}

export { Check };
