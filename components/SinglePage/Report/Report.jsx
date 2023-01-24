import React from "react";
import Wrapper from "./Report.styled";
import { useState } from "react";
import { changePop } from "../../../store/slices/style";
import { useDispatch } from "react-redux";

const Report = () => {
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();

  const sumitForm = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      // send replay
    }
    dispatch(changePop(""));
    setCommentText("");
  };

  return (
    <Wrapper>
      <div className="title">The reason for the report</div>
      <form action="" onSubmit={sumitForm}>
        <div className="inputWrapper">
          <input type="radio" name="report" id="Sexual" />
          <label htmlFor="Sexual">Sexual content</label>
        </div>
        <div className="inputWrapper">
          <input type="radio" name="report" id="Violent" />
          <label htmlFor="Violent">Violent or repulsive content</label>
        </div>
        <div className="inputWrapper">
          <input type="radio" name="report" id="abusive" />
          <label htmlFor="abusive">Hateful or abusive content</label>
        </div>
        <div className="inputWrapper">
          <input type="radio" name="report" id="Harassment" />
          <label htmlFor="Harassment">Harassment or bullying</label>
        </div>
        <div className="inputWrapper">
          <input type="radio" name="report" id="dangerous" />
          <label htmlFor="dangerous">Harmful or dangerous acts</label>
        </div>
        <div className="inputWrapper">
          <input type="radio" name="report" id="Misinformation" />
          <label htmlFor="Misinformation">Misinformation</label>
        </div>
        <div className="inputWrapper">
          <input type="radio" name="report" id="Child" />
          <label htmlFor="Child">Child abuse</label>
        </div>
        <div className="inputWrapper">
          <input type="radio" name="report" id="Promotes" />
          <label htmlFor="Promotes">Promotes terrorism</label>
        </div>
        <div className="inputWrapper">
          <input type="radio" name="report" id="Spam" />
          <label htmlFor="Spam">Spam or misleading</label>
        </div>
        <div className="inputWrapper">
          <input type="radio" name="report" id="Infringes" />
          <label htmlFor="Infringes">Infringes my rights</label>
        </div>

        <textarea
          type="text"
          name="report"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add your Comment..."
        />
        <button type="submit" className="commentSubmit">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Report;
