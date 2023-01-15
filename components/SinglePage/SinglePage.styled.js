import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 20px;

  /* 
  .right {
    width: 100%;
    max-width: 768px;
    background: red;
  }

  .left {
    background: yellow;
    flex-grow: 1;
  } */

  .right {
    width: 60%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .left {
    background: yellow;
    flex-grow: 1;
  }
`;
export default Wrapper;
