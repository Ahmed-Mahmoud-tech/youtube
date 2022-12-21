import { useState } from "react";
import Wrapper from "./Auth.styled";

const Auth = () => {
  const [login, setLogin] = useState(true);

  return (
    <Wrapper>
      <div className="title"> {login ? "singIn" : "singUp"} </div>
      <form action="">
        <input type="text" name="userName" id="" placeholder="Email" />
        <input type="password" name="password" id="" placeholder="password" />
        <button type="submit">submit</button>
      </form>
      <div className="switchSec">
        <span style={{ opacity: login ? "1" : "0.5" }}>singIn</span>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => {
              setLogin(!login);
            }}
          />
          <div className="slider round"></div>
        </label>
        <span style={{ opacity: login ? "0.5" : "1" }}>singUp</span>
      </div>
    </Wrapper>
  );
};

export default Auth;
