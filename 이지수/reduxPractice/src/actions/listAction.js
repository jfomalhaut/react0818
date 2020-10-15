const ON_MOUNT = 'ON_MOUNT';
const ON_CHECK = "ON_CHECK";

const onMount = () => ({ type: ON_MOUNT });
const onCheck = (id) => ({ type: ON_CHECK, id });

const ListAction = {
    ON_MOUNT,
    ON_CHECK,
    onMount,
    onCheck
};

export { ListAction };
