import React from 'react';
import { Item, Checkbox, Button } from '../style/style';
import { nf } from '../utils/const';

const ListItem = ({ handleCheck, handleAdd, item, item: { id, src, check, price, name } }) => {

    return (
        <Item>
            <Checkbox className={check ? 'checked' : ''} />
            <img src={src} onClick={() => { handleCheck(id) }} />
            <div>
                <p>{name}</p>
                <p>{nf.format(price)}원</p>
            </div>
            <Button onClick={handleAdd}>담기</Button>
        </Item>
    )
};

export default ListItem;
