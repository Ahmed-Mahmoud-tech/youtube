import React from "react";
import Wrapper from "./StudioForm.styled";
import AddInput from "../../Globals/AddInput/AddInput";
import { useState } from "react";
import { useEffect } from "react";

const StudioForm = ({
  setVideoId,
  setDubbingOption,
  dubbingOption,
  setEndSec,
  setStartSec,
}) => {
  const [endMinute, setEndMinute] = useState(0);
  const [endSecond, setEndSecond] = useState(0);
  const [startMinute, setStartMinute] = useState(0);
  const [startSecond, setStartSecond] = useState(0);

  useEffect(() => {
    setEndSecond(0);
    setEndMinute(0);
    setStartSecond(0);
    setStartMinute(0);
  }, [dubbingOption]);

  const getId = (e) => {
    if (e.target.value.includes("youtube.com")) {
      var video_id = e.target.value?.split("v=")[1];
      var ampersandPosition = video_id?.indexOf("&");
      if (ampersandPosition != -1) {
        video_id = video_id?.substring(0, ampersandPosition);
      }
      setVideoId(video_id);
      console.log({ video_id });
    }
  };

  const endTimeFun = (e, type) => {
    const value = e.target.value ? parseInt(e.target.value) : 0;
    let totalSecond;
    if (type === "minute") {
      totalSecond = value * 60 + endSecond;
      setEndMinute(value);
    } else {
      totalSecond = endMinute * 60 + value;
      setEndSecond(value);
    }
    setEndSec(totalSecond);
  };
  const startTimeFun = (e, type) => {
    const value = e.target.value ? parseInt(e.target.value) : 0;
    let totalSecond;
    if (type === "minute") {
      totalSecond = value * 60 + startSecond;
      setStartMinute(value);
    } else {
      totalSecond = startMinute * 60 + value;
      setStartSecond(value);
    }
    setStartSec(totalSecond);
  };

  return (
    <Wrapper>
      <div className="upForm">
        <div className="title">Create New</div>

        <form action="">
          <div className="inputWrapper">
            <input
              type="text"
              name="videoLink"
              id="videoLink"
              placeholder="video Link"
              onChange={(e) => getId(e)}
            />
          </div>

          <div className="inputWrapper">
            <select
              name="type"
              id="type"
              defaultValue=""
              onChange={(e) => {
                setDubbingOption(e.target.value);
                // if (e.target.value == 2) setTheFile(mediaBlobUrl);
              }}
            >
              <option value="" disabled>
                Dubbing Options
              </option>
              <option value="0">Without Dubbing</option>
              <option value="1">Upload Dubbing</option>
              <option value="2">Record Dubbing</option>
            </select>
          </div>

          <div className="inputWrapper">
            <div className="realTime">Start Time</div>
            <div className="timeWrapper">
              <div className="startMinute">
                <input
                  type="number"
                  name="startMinute"
                  id="startMinute"
                  placeholder="startMinute"
                  value={startMinute}
                  onChange={(e) => startTimeFun(e, "minute")}
                />
              </div>
              <div className="startSecond">
                <input
                  type="number"
                  name="startSecond"
                  id="startSecond"
                  placeholder="startSecond"
                  value={startSecond}
                  onChange={(e) => startTimeFun(e, "second")}
                />
              </div>
            </div>
          </div>
          {dubbingOption === "0" && (
            <div className="inputWrapper">
              <div className="realTime">End Time</div>
              <div className="timeWrapper">
                <div className="endMinute">
                  <input
                    type="number"
                    name="endMinute"
                    id="endMinute"
                    placeholder="endMinute"
                    value={endMinute}
                    onChange={(e) => endTimeFun(e, "minute")}
                  />
                </div>
                <div className="endSecond">
                  <input
                    type="number"
                    name="endSecond"
                    id="endSecond"
                    placeholder="endSecond"
                    value={endSecond}
                    onChange={(e) => endTimeFun(e, "second")}
                  />
                </div>
              </div>
            </div>
          )}

          <button type="button" className="finish">
            Finish
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default StudioForm;
//acquiring_media
