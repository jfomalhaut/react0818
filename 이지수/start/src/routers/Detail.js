import React from "react";
import { container } from "webpack";

function Detail({match:{params:{board_id}}}){
  return(
    <Container>

    </Container>
  );
}

export default Detail;

const Container = styled.div`
  width: 1000px;
  margin: 50px auto;
`;