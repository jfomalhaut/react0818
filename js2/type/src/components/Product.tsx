import React, { useState } from "react";

type ProductProps = {
  name: string,
  price: number,
  description? : string,
  buy: (qty : string ) => void
};

function Product({ name, price, description="설명글이 없습니다.", buy } : ProductProps) {
  const [quantity, setQuantity] = useState<string>("");

  const onChangeValue = ( e : any ) => {
    const {target: {value}} = e; 
    setQuantity(value); 
  };

  return(
    <div>
      <h1>상품명: {name}</h1>
      <h1>가격: {price}</h1>
      <p>{description}</p>
      <input value={quantity} onChange={onChangeValue}/>
      <button onClick={()=> buy(quantity)}>buy</button>
    </div>
  )
};

export default Product;