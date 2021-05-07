import React from "react";

interface IObject {
  color: string
}
interface ICup extends IObject {  
  volume : number
}

function Cup ({ color, volume }: ICup) {
  return(
    <div>
      <h1>About cup</h1>
      <h2>volume: {volume}</h2>
      <h2>color: {color}</h2>
    </div>
  )
};

export default Cup;