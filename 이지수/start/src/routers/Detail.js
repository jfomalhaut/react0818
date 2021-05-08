import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetComment, GetDetail} from "../api"

function Detail({match : { params : { board_id }}}){
  const [info, setInfo] = useState({});
  const [commentList, setCommentLIst ] = useState([]);

  const getDetailInfo= async() => {
    try{
      const boardInfo = await GetDetail(board_id);
      const commentInfo = await GetComment(board_id);
      console.log(boardInfo);
      console.log("-------------------------------")
      console.log(commentInfo);
    } catch{
      alert("network error!")
    }
  }

  useEffect(()=>{
    getDetailInfo();
  },[board_id])
  
  return(
    <Container>
      <h2>Detail Page</h2>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  width: 1000px;
  margin: 50px auto;
`;