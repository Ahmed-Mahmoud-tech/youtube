import styled from "styled-components";
const Wrapper = styled.div`
  .mt {
    margin-top: 10px;
  }
  .upForm {
    width: 90%;
    margin: auto;
    padding: 5px;
    border: 1px solid var(--gradient1);
    border-radius: 5px;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-height: calc(100vh - 200px);
    overflow-y: auto;
    padding-right: 15px;

    .inputWrapper {
      width: 100%;
      text-align: center;
      margin: 0.5%;
      background: var(--gradient_2);
      border-radius: 5px;

      input,
      textarea,
      select {
        width: 100%;
        padding: 10px;
        background: transparent;
        color: var(--black-background);
      }

      textarea {
        resize: none;
        height: 100px;
      }

      option {
        color: var(--black-color);
        background: var(--white-background);
      }

      > input,
      > select,
      textarea {
        border: 1px solid var(--gradient0);
        border-radius: 5px;
      }
      input {
        color: var(--black-color);
      }

      .withButton {
        display: flex;
        border: 1px solid var(--gradient0);

        border-radius: 5px;
        overflow: hidden;
        input {
          border: 0;
        }

        button {
          font-size: var(--largeFont);
          padding: 5px;
          border-radius: 0;
          outline: 0;
          border: 0;
          background: var(--primary-background);
          cursor: pointer;
          color: white;
          border-left: 1px solid var(--gradient0);
        }
      }
    }
  }
`;
export default Wrapper;
