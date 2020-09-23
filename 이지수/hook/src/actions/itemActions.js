const ON_CHECK = 'ON_CHECK';
const CHECK_ALL = 'CHECK_ALL';
const ON_DELETE = 'ON_DELETE';
const ON_DELETE_ALL = 'ON_DELETE_ALL';
const ON_DELETE_CHECKED = 'ON_DELETE_CHECKED';

const onCheck = id => ({ type: ON_CHECK, id });
const checkAll = () => ({ type: CHECK_ALL });
const onDelete = id => ({ type: ON_DELETE, id });
const onDeleteAll = () => ({ type: ON_DELETE_ALL });
const onDeleteChecked = () => ({ type: ON_DELETE_CHECKED });

export const Check = {
    ON_CHECK,
    CHECK_ALL,
    ON_DELETE,
    ON_DELETE_ALL,
    ON_DELETE_CHECKED,
    onCheck,
    checkAll,
    onDelete,
    onDeleteAll,
    onDeleteChecked
}
