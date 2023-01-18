import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Wrapper from "./SinglePage.styled";
import SingleVideo from "./SingleVideo/SingleVideo";
import Comments from "./Comments/Comments";
import Related from "./Related/Related";
import MainVideo from "../StudioCreation/MainVideo/MainVideo";
import Video from "../Globals/PopUpContainer/Video/Video";
import Share from "./Share/Share";
import Report from "./Report/Report";

import {
  FaThumbsDown,
  FaThumbsUp,
  FaShareAlt,
  FaFlag,
  FaRegCommentDots,
  FaEye,
  FaHandsHelping,
  FaCoffee,
} from "react-icons/fa";

import { BiDonateHeart } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { changePop, changeComponent } from "../../store/slices/style";

const SinglePage = () => {
  const dispatch = useDispatch();

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState();
  const [commentText, setCommentText] = useState("");
  const [videoInfo, setVideoInfo] = useState({
    id: "hamada",
    videoId: "eCsf7wAiwXg",
    authorSrc:
      "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    authorName: "Ahmed Mahmoud Ahmed",
    serverAudio:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    discription:
      " this is the discription of the song that  was played on the Sound Helix server and  is available this is the discription of the song that  was played on the Sound Helix server and  is available",
    likeNumber: 123,
    disLikeNumber: 1001,
    dubbedVideoTitle:
      "this is the dubbed video title this is the dubbed video title",
    subscribeNumber: 1002,
    viewsNumber: 1003,
    lastUpdatedDate: "11/2/2013",
    VideoComments: {
      id: 100,
      src: "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
      name: "Ahmed Mahmoud Ahmed",
      comment:
        "this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this ",
      likeNumber: 20,
      disLikeNumber: 10,
      comments: [
        {
          id: 101,
          src: "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
          name: "Ahmed Mahmoud Ahmed",
          comment:
            "this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this ",
          likeNumber: 20,
          disLikeNumber: 10,
          comments: [
            {
              id: 102,
              src: "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
              name: "Ahmed Mahmoud Ahmed",
              comment:
                "this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this ",
              likeNumber: 20,
              disLikeNumber: 10,
              comments: [
                {
                  id: 103,
                  src: "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
                  name: "Ahmed Mahmoud Ahmed",
                  comment:
                    "this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this ",
                  likeNumber: 20,
                  disLikeNumber: 10,
                  comments: [],
                },
              ],
            },
          ],
        },
      ],
    },
  });

  const [videoTitle, setVideoTitle] = useState("");
  const [numberOfLastAction, setNumberOfLastAction] = useState();
  const [player, setPlayer] = useState();
  const [pauseSec, setPauseSec] = useState();
  const [startAction, setStartAction] = useState(true);
  const [videoWidth, setVideoWidth] = useState(0.59);
  const audioRef = useRef();
  const [like, setLike] = useState(0);
  const [commentStatus, setCommentStatus] = useState(false);
  const [authorInfo, setAuthorInfo] = useState({
    donateLink: "https://ko-fi.com/langtupe",
  });

  const recPause = () => {
    console.log("recPause");
    setNumberOfLastAction(2);
    player.pauseVideo();
    setPauseSec(player.getCurrentTime());
    audioRef.current.pause();
  };

  const likeFun = (id) => {
    like === -1 && console.log("remove disLike");
    like != 1 ? setLike(1) : setLike(0);
    // send request increase or decrease
  };
  const disLikeFun = (id) => {
    like === 1 && console.log("remove Like");
    like != -1 ? setLike(-1) : setLike(0);
    // send request increase or decrease
  };

  const sumitForm = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      // send replay
    }
    setCommentStatus(false);
    setCommentText("");
  };

  const openShare = () => {
    dispatch(changePop("share"));
    dispatch(changeComponent(Share));
  };

  const openReport = () => {
    dispatch(changePop("report"));
    dispatch(changeComponent(Report));
  };

  useEffect(() => {
    window.innerWidth < 768 && setVideoWidth(0.94);
  }, []);

  return (
    <Wrapper>
      <div className="right">
        <div className="mainVideo">
          <MainVideo
            videoWidth={videoWidth}
            dubbingOption={7}
            option={{
              width: "100%",
              height: "100%",
              playerVars: { controls: 1, end, start },
            }}
            videoId={videoInfo.videoId}
            player={player}
            setPlayer={setPlayer}
            audioRef={audioRef}
            startSec={start}
            setVideoTitle={setVideoTitle}
            sectionType={"audio"}
            numberOfLastAction={numberOfLastAction}
            setNumberOfLastAction={setNumberOfLastAction}
            startAction={startAction}
            setStartAction={setStartAction}
            recPause={recPause}
            pauseSec={pauseSec}
          />

          <audio
            src={videoInfo.serverAudio}
            controls
            ref={audioRef}
            style={{ display: "none" }}
          />
        </div>
        <div className="subVideo">
          <div className="videoTitle">
            <span className="views">
              <FaEye />
              {videoInfo.viewsNumber}
            </span>
            {videoInfo.dubbedVideoTitle}
          </div>

          <div className="info">
            <div className="name">{videoInfo.authorName}</div>

            <div className="pic">
              <Image
                src={videoInfo.authorSrc}
                alt={"author"}
                width={50}
                height={50}
              />
              <button type="button" className="subscribe">
                <span>Subscribe :</span>
                <span className="number">{videoInfo.subscribeNumber}</span>
              </button>
              <button
                type="button"
                className="comment"
                onClick={() => setCommentStatus(!commentStatus)}
              >
                <span className="number">Comment</span>
                <span className="icon">
                  <FaRegCommentDots />
                </span>
              </button>
            </div>
            <div className="date">
              <span className="views">Creation / Modification Date: </span>
              {videoInfo.lastUpdatedDate}
            </div>
            {commentStatus && (
              <div className="commentForm">
                <form action="" onSubmit={sumitForm}>
                  <textarea
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add your Comment..."
                  />
                  <button type="submit" className="commentSubmit">
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
          <div className="action">
            <div className="action-item">
              <div className="clickAction">
                <span
                  className=""
                  onClick={() => likeFun(videoInfo.id)}
                  style={{ color: like === 1 && "var(--primary-background)" }}
                >
                  <FaThumbsUp />
                  <span className="number">{videoInfo.likeNumber}</span>
                </span>
                <span
                  className=""
                  onClick={() => disLikeFun(videoInfo.id)}
                  style={{ color: like === -1 && "var(--primary-background)" }}
                >
                  <FaThumbsDown />
                  <span className="number">{videoInfo.disLikeNumber}</span>
                </span>
                <span
                  className=""
                  onClick={openShare}
                  style={{ color: "var(--primary-background)" }}
                >
                  <FaShareAlt />
                  <span className="number">Share</span>
                </span>

                <span
                  className="disLike"
                  onClick={openReport}
                  style={{ color: "var(--primary-background)" }}
                >
                  <FaFlag />
                  <span className="number">Report</span>
                </span>

                <span
                  className="disLike"
                  onClick={() => {
                    dispatch(changeComponent(Video));
                    dispatch(changePop("component"));
                  }}
                  style={{ color: "var(--primary-background)" }}
                >
                  <FaHandsHelping />
                  <span className="number">Support Me</span>
                </span>

                <a
                  href={authorInfo.donateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="disLike"
                  style={{ color: "var(--primary-background)" }}
                >
                  <FaCoffee />
                  <span className="number">Buy me a Coffee</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="description">{videoInfo.discription}</div>

        <Comments VideoComments={{ ...videoInfo.VideoComments }} />
      </div>
      <div className="left">
        <Related />
      </div>
    </Wrapper>
  );
};

export default SinglePage;
