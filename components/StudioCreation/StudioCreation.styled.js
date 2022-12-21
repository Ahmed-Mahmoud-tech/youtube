import styled from "styled-components";
const Wrapper = styled.div`
  .title {
    font-size: var(--hugeFont);
    margin: 30px auto 20px;
    width: 300px;
    text-align: center;
    border-bottom: 4px solid var(--primary-background);
  }

  .creationWrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  .factory {
    width: 60%;
    @media (max-width: 768px) {
      width: 100%;
      margin: 15px;
    }
  }

  .formCont {
    width: 35%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .uploader {
    margin-top: 5px;
    label {
      max-width: 100%;
      margin-bottom: 5px;
    }
    audio {
      display: none;
    }
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
export default Wrapper;
