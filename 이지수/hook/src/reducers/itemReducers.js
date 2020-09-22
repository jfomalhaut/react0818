const ON_CHECK = 'ON_CHECK';
const CHECK_ALL = 'CHECK_ALL';

export const onCheck = id => ({ type: ON_CHECK, id });
export const checkAll = () => ({ type: CHECK_ALL });

const itemReducer = (state, { type, id }) => {
    switch (type) {
        case CHECK_ALL: {
            const check = state.some(item => !item.check);
            return state.map(item => ({...item, check }));
        }
        case ON_CHECK: {
            return state.map(item => item.id === id ? ({ ...item, check: !item.check }) : item);
            // console.log(id);
            // return {
            //     ...state.map(item => {
            //         if (item.id === id) {
            //             return ({
            //                 ...item, check: !item.check
            //             })
            //         } else {
            //             return item;
            //         }
            //     })
            // }
        }
        default: return state
    }
}

export default itemReducer;



// 1. 아무것도 체크가 되지 않은 상황
// => 모두가 true,

// 2. 전체가 다 체크가 된 상황
// => 모드가 false

// 3. 전체가 아닌 하나 이상의 체크가 있는 상황 (일부)
// => 모두가 true

// false가 있는지를 찾는다.
// 1. O => true
// 2. X => false
// 3. O => true

// false의 유무에 따라서 true가 되거나 False

