const HANDLE_OVERLAP = 'HANDLE_OVERLAP';
const ON_MOUNT = 'ON_MOUNT';
const ON_ADD = "ON_ADD";
const ON_ADD_CHECKED = 'ON_ADD_CHECKED';
const ON_REMOVE = 'ON_REMOVE';
const ON_REMOVE_CHECKED = 'ON_REMOVE_CHECKED';
const ON_REMOVE_ALL = 'ON_REMOVE_ALL';
const ON_CHECK = 'ON_CHECK';
const ON_CEHCK_ALL = 'ON_CHECK_ALL';

const handleOverlap = () => ({ type: HANDLE_OVERLAP });
const onMount = () => ({ type: ON_MOUNT });
const onAdd = (item) => ({ type: ON_ADD, item });
const onAddChecked = (list) => ({ type: ON_ADD_CHECKED, list });
const onRemove = (id) => ({ type: ON_REMOVE, id });
const onRemoveChecked = () => ({ type: ON_REMOVE_CHECKED });
const onRemoveAll = () => ({ type: ON_REMOVE_ALL });
const onCheck = (id) => ({ type: ON_CHECK, id });
const onCheckAll = () => ({ type: ON_CEHCK_ALL });

const CartAction = {
    HANDLE_OVERLAP,
    ON_MOUNT,
    ON_ADD,
    ON_ADD_CHECKED,
    ON_REMOVE,
    ON_REMOVE_CHECKED,
    ON_REMOVE_ALL,
    ON_CHECK,
    ON_CEHCK_ALL,
    handleOverlap,
    onMount,
    onAdd,
    onAddChecked,
    onRemove,
    onRemoveChecked,
    onRemoveAll,
    onCheck,
    onCheckAll
}

export { CartAction };
