import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetComment, GetDetail, PostComment} from "../api"
import { dateTimePipe } from "../customs";

const field = {
  title: "",
  content: "",
  datetime : "",
  view : ""
}

const inputField = {
  writer : "",
  comment_content : "",
}

function Detail({match : { params : { board_id }}}){
  const [info, setInfo] = useState(field);
  const [commentInfo, setCommentInfo] = useState(inputField);
  const [commentList, setCommentList ] = useState([]);

  const { title, content, datetime, view } = info;
  const { writer, comment_content }= commentInfo;

  const getDetailInfo= async() => {
    try{
      const { data } = await GetDetail(board_id);
      setInfo(data[0]);
    } catch{
      alert("network error!")
    }
  }

  const getCommentInfo = async() => {
    try{
      const { data } = await GetComment(board_id);
      setCommentList(data);
    } catch {
      alert("network error!")
    }
  }

  const write = async(evt) => {
    evt.preventDefault();
    const payload = {
      ...commentInfo,
      board_id
    }
    try{
      const {data} = await PostComment(payload);  
      if(data){
        alert('upload success');
        getCommentInfo();
        setCommentInfo({
          ...commentInfo,
          comment_content: ""
        });
      } else{
        throw false;
      }
    }catch{
      alert("network error");
    }
  }

  const onChangeHandler = evt => {
    const {target: {value, name}} = evt;

    setCommentInfo({
      ...commentInfo,
      [name]: value
    })
  }
  
  useEffect(()=>{
    getDetailInfo();
    getCommentInfo();
  },[board_id])
  
  return(
    <Container>
      <header>
        <div>
          <h1>{title}</h1>
          <span>{dateTimePipe(datetime)}</span>
        </div>
        <aside>{view}</aside>
      </header>
      <main>
        <p>{content}</p>
        <CommentSection>
          <form onSubmit={write}>
            <input
              name="writer" 
              value={writer}
              onChange={onChangeHandler}
              placeholder="작성자"
            />
            <textarea 
              name="comment_content"
              value={comment_content}
              onChange={onChangeHandler}
              placeholder="내용을 입력"
            />
            <button>입력하기</button>
          </form>
         {commentList.length > 0 ? (
           <ul>
             {commentList.map(item=>(
               <li key={`COMMENT${item.comment_id}`}>
                 <label>{item.writer}</label>
                 <article>{item.comment_content}</article>
                 <span>{dateTimePipe(item.datetime)}</span>
               </li>
             ))}
           </ul>
         ):(
           <summary>코멘트가 없습니다.</summary>
         )}
        </CommentSection>
      </main>
      <div>
        <button>전체보기</button>
      </div>
    </Container>
  );
}

export default Detail;

const CommentSection = styled.section`
  padding-top:30px 20px !important;
  background-color: #f0f0f0;
  ul{
    li{
      list-style: none;
      font-size: 13px;
    }
  }
  form{
    margin-bottom: 20px;
    input{
      width:200px;
      padding: 0 5px;
      height: 50px;
    }
    textarea{
      margin-top: 10px;
      display: block;
      height: 200px;
      padding: 20px;
      width: 500px;
    }
    button{
      width: 100px;
      background-color: #fff;
    }
  }
`

const Container = styled.div`
  width: 1000px;
  margin: 50px auto;
  *{ margin: 0; padding:0 }
  & > header{
    display: flex;
    div{
      flex-grow : 1;
      h1{
        margin-bottom: 10px;
      }
      span{
        color: #bbb;
      }
    }
    aside{
      width: 100px;
      flex-shrink: 0;
    }
  }
  & > main{
    padding: 50px 30px;
    border-top: 1px solid #bbb;
    border-bottom: 2px solid #bbb;
    & > p {
      padding-bottom: 50px;
      border-bottom: 1px solid #bbb;
      white-space: pre-line;
    }
  }
  & > div{
    text-align: center;
    & > button{
      width: 150px;
      font-size: 16px;
      border: 1px solid #ddd;
      background-color: #fff;
      height: 50px;
      line-height: 50px;
    }
  }
`;