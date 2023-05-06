import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Wrapper from "./SinglePage.styled";
import Comments from "./Comments/Comments";
import Related from "./Related/Related";
import MainVideo from "../StudioCreation/MainVideo/MainVideo";
import Video from "../Globals/PopUpContainer/Video/Video";
import Share from "./Share/Share";
import Report from "./Report/Report";
import { getId } from "../StudioCreation/Form/StudioForm";
import useRequest from "../../axios/apis/useRequest";

import {
  FaThumbsDown,
  FaThumbsUp,
  FaShareAlt,
  FaFlag,
  FaRegCommentDots,
  FaEye,
  FaHandsHelping,
  FaCoffee,
  FaBusinessTime,
} from "react-icons/fa";

import { BiDonateHeart } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { changePop, changeComponent } from "../../store/slices/style";
import Notification from "../Globals/Notification/Notification";
import { useSelector } from "react-redux";

const SinglePage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.info);
  const [notification, setNotification] = useState(
    "This is my notification and will be removed from the domThis is my notification and will be removed from the domThis is my notification and will be removed from the domThis is my notification and will be removed from the domThis is my notification and will be removed from the dom"
  );
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState();
  const [commentText, setCommentText] = useState("");
  const [videoInfo, setVideoInfo] = useState({
    _id: "hamada",
    author: {
      avatar:
        "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
      username: "Ahmed Mahmoud Ahmed",
      usersSubscribe: 1002,
    },
    videoLink:
      "https://www.youtube.com/watch?v=UB-xp3BqgQE&list=RD1jwSjbjQ2Lc&index=13",
    path: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    description:
      " this is the description of the song that  was played on the Sound Helix server and  is available this is the description of the song that  was played on the Sound Helix server and  is available",
    like: 123,
    dislike: 1001,
    isLike: false,
    isDislike: false,
    title: "this is the dubbed video title this is the dubbed video title",
    views: 1003,
    isSubscribe: false,
    updatedAt: "11/2/2013",
    comments: [
      {
        _id: 100,
        commentUser: {
          avatar:
            "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
          _id: "Asdfasdf",
          username: "Ahmed Mahmoud Ahmed",
        },
        text: "this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this ",
        like: 22,
        dislike: 10,
        comments: [
          // {
          //   id: 101,
          //   src: "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
          //   name: "Ahmed Mahmoud Ahmed",
          //   comment:
          //     "this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this ",
          //   like: 20,
          //   dislike: 10,
          //   comments: [
          //     {
          //       id: 102,
          //       src: "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
          //       name: "Ahmed Mahmoud Ahmed",
          //       comment:
          //         "this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this ",
          //       like: 20,
          //       dislike: 10,
          //       comments: [
          //         {
          //           id: 103,
          //           src: "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
          //           name: "Ahmed Mahmoud Ahmed",
          //           comment:
          //             "this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this ",
          //           like: 20,
          //           dislike: 10,
          //           comments: [],
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
      },
      {
        _id: 100,
        commentUser: {
          avatar:
            "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
          _id: "Asdfasdf",
          username: "Ahmed Mahmoud Ahmed",
        },
        text: "this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this is my comment this ",
        like: 22,
        dislike: 10,
        comments: [],
      },
    ],
  });
  const [videoTitle, setVideoTitle] = useState("");
  const [numberOfLastAction, setNumberOfLastAction] = useState();
  const [player, setPlayer] = useState();
  const [pauseSec, setPauseSec] = useState();
  const [startAction, setStartAction] = useState(true);
  const [videoWidth, setVideoWidth] = useState(0.59);
  const audioRef = useRef();
  const [like, setLike] = useState(0);
  const [later, setLater] = useState(false);
  const [commentStatus, setCommentStatus] = useState(false);
  const [videoComment, setVideoComment] = useState([]);
  const [likeCount, setLikeCount] = useState();
  const [dislikeCount, setDislikeCount] = useState();
  const [isSubscribe, setIsSubscribe] = useState(true);
  const [subscribeCount, setSubscribeCount] = useState();

  const { getVideo, addComment, getComments, editVideo, updateUser } =
    useRequest();
  const recPause = () => {
    console.log("recPause");
    setNumberOfLastAction(2);
    player.pauseVideo();
    setPauseSec(player.getCurrentTime());
    audioRef.current.pause();
  };

  const likeFun = () => {
    if (like != 1) {
      setLike(1);
      editVideo({ url: videoInfo._id, data: { like: "add" } });
      setLikeCount(likeCount + 1);
      like == -1 && setDislikeCount(dislikeCount - 1);
    } else {
      setLike(0);
      editVideo({ url: videoInfo._id, data: { like: "remove" } });
      setLikeCount(likeCount - 1);
    }
  };
  const disLikeFun = () => {
    if (like != -1) {
      setLike(-1);
      editVideo({ url: videoInfo._id, data: { dislike: "add" } });
      setDislikeCount(dislikeCount + 1);
      like == 1 && setLikeCount(likeCount - 1);
    } else {
      setLike(0);
      editVideo({ url: videoInfo._id, data: { dislike: "remove" } });
      setDislikeCount(dislikeCount - 1);
    }
    // send request increase or decrease
  };
  const setLaterFun = () => {
    const method = later == true ? "remove" : "add";
    updateUser({
      data: { watchLater: { id: videoInfo._id, method } },
      url: userInfo._id,
    });
    setLater(!later);
  };

  const sumitForm = async (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      if (commentText.trim()) {
        await addComment({
          type: "video",
          commentOn: videoInfo?._id,
          text: commentText,
        });

        const result = await getComments(
          `${!userInfo.username ? "notAuth/video" : "video"}/${videoInfo?._id}`
        );
        setVideoComment(result.data);
      }

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
    dispatch(
      changeComponent(() =>
        Report({
          userId: userInfo._id,
          videoId: videoInfo?._id,
          reportId: videoInfo?.reports[0] ? videoInfo.reports[0]._id : null,
        })
      )
    );
  };
  const showNotification = () => {
    dispatch(changePop("notification"));
    dispatch(changeComponent(() => Notification(videoInfo.notify)));
  };

  useEffect(() => {
    window.innerWidth > 1250
      ? setVideoWidth(0.69)
      : window.innerWidth > 1000
      ? setVideoWidth(0.585)
      : setVideoWidth(0.96);
    notification && showNotification();

    // get data

    const videoInfoFun = async (path) => {
      const videoData = await getVideo(`${path}6456b58917a35e31c613e1d3`);
      const videoDataVar = videoData.data[0];
      setVideoInfo(videoDataVar);
      setVideoComment(videoDataVar.comments);
      setLikeCount(videoDataVar.like);
      setDislikeCount(videoDataVar.dislike);
      setLater(videoDataVar.watchLater);
      setIsSubscribe(videoDataVar.isSubscribe);
      setSubscribeCount(videoDataVar.author.usersSubscribe);
      if (videoDataVar.isLike) setLike(1);
      if (videoDataVar.isDislike) setLike(-1);
    };

    (() => {
      if (localStorage.getItem("token")) {
        if (userInfo.username) {
          videoInfoFun("auth/");
        }
      } else {
        videoInfoFun("/");
      }
    })();
  }, [userInfo.username]);

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
            videoId={getId(videoInfo.videoLink, "link")}
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
            src={videoInfo.path}
            controls
            ref={audioRef}
            style={{ display: "none" }}
          />
        </div>
        <div className="subVideo">
          <div className="videoTitle">
            <span className="views">
              <FaEye />
              {videoInfo.views + 1}
            </span>
            {videoInfo.title}
          </div>

          <div className="info">
            <div className="name">{videoInfo.author.username}</div>

            <div className="pic">
              <Image
                src={videoInfo.author.avatar}
                alt={"author"}
                width={50}
                height={50}
              />
              <button
                type="button"
                className="subscribe"
                style={{
                  background:
                    isSubscribe === true && "var(--primary-background)",
                }}
                onClick={() => {
                  updateUser({
                    data: {
                      isSubscribe: {
                        status: !isSubscribe,
                        videoAuthor: videoInfo.author._id,
                      },
                    },
                    url: userInfo._id,
                  });

                  setSubscribeCount(
                    isSubscribe ? subscribeCount - 1 : subscribeCount + 1
                  );
                  setIsSubscribe(!isSubscribe);
                }}>
                <span>Subscribe :</span>
                <span className="number">{subscribeCount}</span>
              </button>
              <button
                type="button"
                className="comment"
                onClick={() => setCommentStatus(!commentStatus)}>
                <span className="number">Comment</span>
                <span className="icon">
                  <FaRegCommentDots />
                </span>
              </button>
            </div>
            <div className="date">
              <span className="views">Creation / Modification Date: </span>
              {videoInfo.updatedAt.toString().substring(0, 10)}
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
                  onClick={() => likeFun()}
                  style={{ color: like === 1 && "var(--primary-background)" }}>
                  <FaThumbsUp />
                  <span className="number">{likeCount}</span>
                </span>
                <span
                  className=""
                  onClick={() => disLikeFun()}
                  style={{ color: like === -1 && "var(--primary-background)" }}>
                  <FaThumbsDown />
                  <span className="number">{dislikeCount}</span>
                </span>
                <span className="" onClick={openShare}>
                  <FaShareAlt />
                  <span className="number">Share</span>
                </span>
                <span
                  className=""
                  onClick={setLaterFun}
                  style={{ color: later && "var(--primary-background)" }}>
                  <FaBusinessTime />
                  <span className="number">Watch later</span>
                </span>

                <span className="disLike" onClick={openReport}>
                  <FaFlag />
                  <span className="number">Report</span>
                </span>

                <span
                  className="disLike"
                  onClick={() => {
                    dispatch(changeComponent(Video));
                    dispatch(changePop("component"));
                    updateUser({
                      url: userInfo._id,
                      data: { support: true },
                    });
                  }}>
                  <FaHandsHelping />
                  <span className="number">Support Me</span>
                </span>
                <a
                  href={videoInfo.author.coffeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    updateUser({
                      url: userInfo._id,
                      data: { coffee: true },
                    })
                  }
                  className="disLike">
                  <FaCoffee />
                  <span className="number">Buy me a Coffee</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="description">{videoInfo.description}</div>
        {videoComment.map((comment, index) => {
          return (
            <Comments
              VideoComments={{ ...comment, parent: true }}
              key={index}
            />
          );
        })}
      </div>
      <div className="left">
        <Related
          videos={videoInfo?.lists?.listVideo}
          avatar={videoInfo.author.avatar}
          username={videoInfo.author.username}
          remove={videoInfo.remove}
        />
      </div>
    </Wrapper>
  );
};

export default SinglePage;
