const ONCHECK = 'ONCHECK';

const onCheck = id => ({ type: ONCHECK, id })

const itemReducer = (state, { type, id }) => {
    switch (type) {
        case ONCHECK: {
            console.log(id);
            return {
                ...state.map(item => {
                    if (item.id === id) {
                        return ({
                            ...item, check: !item.check
                        })
                    } else {
                        return item;
                    }
                })
            }
        }
        default: return state
    }
}

export { itemReducer, onCheck }
