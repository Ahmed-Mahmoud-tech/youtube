import { useRef } from "react";
import Wrapper from "./PopUpContainer.style";
import Auth from "./Auth/Auth";
import Video from "./Video/Video";
import { useSelector, useDispatch } from "react-redux";
import { changePop } from "../../../store/slices/style";
import { useOutside } from "../../../utilities/main";
import Confirmation from "./Confirmation/Confirmation";

const PopUpContainer = ({ content }) => {
  const confirmationMessage = useSelector(
    (state) => state.style.confirmationMessage
  );
  const dispatch = useDispatch();
  const close = useRef();

  const closeFun = () => {
    dispatch(changePop(""));
  };

  useOutside(close, closeFun);

  return (
    <>
      {content && (
        <Wrapper>
          <div className="children" ref={close}>
            {content === "auth" ? (
              <Auth />
            ) : content.includes("video") ? (
              <Video type={content} />
            ) : content === "confirmation" ? (
              <Confirmation title={confirmationMessage} />
            ) : (
              ""
            )}
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default PopUpContainer;
