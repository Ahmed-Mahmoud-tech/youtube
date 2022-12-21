import Link from "next/link";
import React from "react";
import Wrapper from "./PopMenu.styled";

const PopMenu = ({ status, right, data, fun }) => {
  return (
    <>
      {status && (
        <Wrapper right={right}>
          <ul>
            {data.map((item, index) => (
              <li key={index} onClick={() => item.type === "fun" && fun()}>
                <Link href={item.type !== "fun" ? item.link : ""}>
                  <span className="icon">{item.icon}</span>
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Wrapper>
      )}
    </>
  );
};

export default PopMenu;
