import React from "react";
import Wrapper from "./Block.styled";
import Image from "next/image";
import { FaRegEye, FaPlay } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { BiLike, BiStopwatch, BiShare, BiListCheck } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  changePop,
  changeMessage,
  changeConfirmationFun,
} from "../../../store/slices/style";
import Link from "next/link";

const Block = ({
  link,
  listNumber,
  remove,
  like,
  share,
  views,
  videoImage,
  channelImage,
  videoTitle,
  channel,
  date,
  nativeVideo,
  index,
}) => {
  const dispatch = useDispatch();

  const removeVideo = () => {
    console.log("remove video");
  };
  const removeList = () => {
    console.log("remove list");
  };

  const showPop = (type) => {
    if (type === "video") {
      dispatch(changeConfirmationFun(removeVideo));
      dispatch(changePop("confirmation"));
      dispatch(changeMessage("Are you sure to remove this video?"));
    } else {
      dispatch(changeConfirmationFun(removeList));
      dispatch(changePop("confirmation"));
      dispatch(changeMessage("Are you sure to remove this list?"));
    }
  };

  return (
    <Wrapper>
      <div className="imageContainer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="videoImage">
          {listNumber > 0 && (
            <>
              <Link href={link} className="blockLink"></Link>

              <div className="listNumber">
                {listNumber}
                <BiListCheck />
                {remove && (
                  <div
                    className="infoWrapper delete"
                    onClick={() => showPop("list")}
                  >
                    <MdOutlineDelete />
                  </div>
                )}
              </div>
            </>
          )}
          {listNumber == 0 && (
            <div className="placeHolder">
              <Link href={link} className="blockLink"></Link>
              <div className="infoWrapper">
                <BiLike /> <span className="word">like</span>
                <span className="number">{like}</span>
              </div>

              <div className="infoWrapper">
                <FaRegEye /> <span className="word">views</span>
                <span className="number">{views}</span>
              </div>
              <div className="infoWrapper">
                <BiShare /> <span className="word">share</span>
                <span className="number">{share}</span>
              </div>
              <div className="last infoWrapper">
                <span className="later infoWrapper">
                  <BiStopwatch /> <span className="word">watch later</span>
                </span>
                <span className="play">
                  <FaPlay />
                </span>
              </div>
              {true && (
                <div
                  className="infoWrapper delete"
                  onClick={() => showPop("video")}
                >
                  <MdOutlineDelete /> <span className="word">Delete</span>
                  <span className="number"></span>
                </div>
              )}
            </div>
          )}
          <Image src={videoImage} alt="vedicAlt" crossOrigin="anonymous" fill />
        </div>
      </div>
      <div className="details">
        <div className="avatar">
          <Image src={channelImage} alt="profile" fill />
        </div>
        <div className="info">
          <h4 className="videoTitle">{videoTitle}</h4>
          <span className="channel">{channel}</span>
          <span className="date">{date}</span>
          <a href={nativeVideo} className="nativeVideo">
            native video 00{index}
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Block;
