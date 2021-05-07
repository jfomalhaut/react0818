import React from "react";
import Product from "./components/Product";
import Cup from "./components/Cup";

function App(){
  const onClick = (quantity: string) => {
    console.log(quantity + '개를 구매했습니다.');
  };

  return (
    <React.Fragment>
      <h1>React + TypeScript + Webpack</h1>
      <Product
        name={"포도"}
        price={2000}
        description={'달고 맛있는 5월의 포도'}
        buy={onClick}
      />
      <Cup
        color={"yellow"}
        volume={250}
      />
    </React.Fragment>
  );
};

export default App;