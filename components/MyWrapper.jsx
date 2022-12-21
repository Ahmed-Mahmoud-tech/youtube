import React from "react";
import { useSelector } from "react-redux";
import GlobalStyle from "../styles/globals.js";
import PopUpContainer from "./Globals/PopUpContainer/PopUpContainer.jsx";
import Header from "./Header/Header.jsx";

const MyWrapper = () => {
  const currentMode = useSelector((state) => state.style.mode);
  const popUpStatus = useSelector((state) => state.style.popUpContent);

  return (
    <div>
      <GlobalStyle mode={currentMode} />
      <Header />
      <PopUpContainer content={popUpStatus} />
    </div>
  );
};

export default MyWrapper;
