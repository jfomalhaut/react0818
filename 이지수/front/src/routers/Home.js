import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [list, setList] = useState([]);

  const getData = () => {
    axios.get("http://localhost:4000/api/getData")
    .then(res => {
      const { data: { data } }= res;
      setList(data)
    })
    .catch(err => {
      console.log("네트워크 연결 실패");
    })
  };

  const getPostData = () => {
    const payload = { id: 3};
    axios.post("http://localhost:4000/api/getPostData", payload)
    .then(res => {
      const { data: { data } } = res;
      console.log(data);
    })
    .catch(err => {
      console.log("네트워크 연결 실패");
    })
  };

  return(
    <>
      <h1>홈</h1>
      <button onClick={getData}>데이터 받기</button>
      <button onClick={getPostData}>Post 데이터 받기</button>
      <ul>
        {list.map(item=>
          (<li key={`LIST${item}`}>
            <span>{item.name}</span>
            <span>{item.price}원</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home;