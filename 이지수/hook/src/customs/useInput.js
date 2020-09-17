import { useState } from 'react';

const useInput = initialValue => {
    const [data, setData] = useState(initialValue);

    const onChange = e => {
        const { target: { value } } = e;
        setData(value);
    };

    return [data, onChange, setData];
}

export { useInput };
