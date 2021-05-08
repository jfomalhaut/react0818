import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";

function Board({history}){
  const [list, setList] = useState([]);

  const init = async() => {
    try{
      const { data } = await axios.get("http://localhost/api/getBoard");
      console.log(data)
      setList(data)
    } catch{
      console.log("failed")
    }
  } 

  const goDetail = id => {
    history.push('/detail/' + id)
  }

  useEffect(() => {
    init();
  },[]);

  return(
    <Container>
      <ul>
        <li>
          <span>번호</span>
          <span>내용</span>
          <span>날짜</span>
          <span>조회수</span>
        </li>
        {list.map(item=>(
          <li key={`BOARD_LIST${item.board_id}`}>
            <span>{item.board_id}</span>
            <span onClick={()=>goDetail(item.board_id)}>{item.title}</span>
            <span>{moment(item.datetime).format('YYYY-MM-DD HH:mm')}</span>
            <span>{item.view}</span>
          </li>
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  ul{
    padding: 0;
    width: 1000px;
    margin: 50px auto;
    border-bottom: 1px solid #ddd;
    li{   
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #ddd;
      &:first-child{
        font-weight: 600;
        text-align: center;
        background: #f0f0f0;
        border-bottom: 2px solid #ddd;
      }
      &:not(:first-child){
      }
      &>span{
        &:nth-child(2){
          flex-grow: 1;
        }
        &:not(:nth-child(2)){
          width: 200px;
          text-align: center;
          flex-shrink: 0;
        }
      }
    }
  }
`

export default Board;