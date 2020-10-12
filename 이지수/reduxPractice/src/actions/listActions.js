const ON_DELETE_CHECKED = 'ON_DELETE_CHECKED';
const ON_DELETE_ALL = 'ON_DELETE_ALL';
const ON_CHECK = 'ON_CHECK';

const onDeleteChecked = (item) => ({ type: ON_DELETE_CHECKED, item });
const onDeleteAll = () => ({ type: ON_DELETE_ALL });
const onCheck = (id) => ({ type: ON_CHECK, id });

const ListAction = {
    ON_DELETE_CHECKED,
    ON_DELETE_ALL,
    ON_CHECK,
    onDeleteChecked,
    onDeleteAll,
    onCheck
};

export { ListAction }
