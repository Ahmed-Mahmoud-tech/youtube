/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "./Comments.styled";
import { FaThumbsDown, FaThumbsUp, FaReplyAll } from "react-icons/fa";

const Comments = ({ VideoComments }) => {
  // console.log({ VideoComments });
  const generateComment = (
    id,
    src,
    name,
    comment,
    comments,
    likeNumber,
    disLikeNumber,
    parent
  ) => {
    const [like, setLike] = useState(0);
    const [replay, setReplay] = useState(false);
    const [replayText, setReplayText] = useState("");

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

    const sumitForm = () => {
      if (replayText.trim()) {
        // send replay
      }
      setReplay(false);
      setReplayText("");
    };

    return (
      <div
        className="commentWrapper"
        style={{ marginLeft: parent ? "0" : "-30px" }}
      >
        <div className="pic" style={{ minWidth: parent ? 50 : 40 }}>
          <Image
            src={src}
            alt={"author"}
            width={parent ? 50 : 40}
            height={parent ? 50 : 40}
          />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="comment">{comment}</div>
          <div className="action">
            <div className="clickAction">
              <span
                className="like"
                onClick={() => likeFun(id)}
                style={{ color: like === 1 && "var(--primary-background)" }}
              >
                <FaThumbsUp />
                <span className="number">{likeNumber}</span>
              </span>
              <span
                className="disLike"
                onClick={() => disLikeFun(id)}
                style={{ color: like === -1 && "var(--primary-background)" }}
              >
                <FaThumbsDown />
                <span className="number">{disLikeNumber}</span>
              </span>
              <span
                className="replay"
                onClick={() => setReplay(!replay)}
                style={{ color: replay && "var(--primary-background)" }}
              >
                <FaReplyAll />
                <span className="number">Replay</span>
              </span>
            </div>
            {replay && (
              <div className="replayForm">
                <form action="" onSubmit={sumitForm}>
                  <textarea
                    type="text"
                    value={replayText}
                    onChange={(e) => setReplayText(e.target.value)}
                    placeholder="Replay"
                  />
                  <button type="submit" className="replayButton">
                    Submit
                  </button>
                </form>
              </div>
            )}
            {comments.length > 0 && (
              <div className="comments">
                {comments.map((comment, index) => (
                  <div key={index} comment={comment}>
                    {generateComment(
                      comments[index].id,
                      comments[index].src,
                      comments[index].name,
                      comments[index].comment,
                      comments[index].comments,
                      comments[index].likeNumber,
                      comments[index].disLikeNumber,
                      false
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Wrapper>
      {generateComment(
        VideoComments.id,
        VideoComments.src,
        VideoComments.name,
        VideoComments.comment,
        VideoComments.comments,
        VideoComments.likeNumber,
        VideoComments.disLikeNumber,
        true
      )}
    </Wrapper>
  );
};

export default Comments;
