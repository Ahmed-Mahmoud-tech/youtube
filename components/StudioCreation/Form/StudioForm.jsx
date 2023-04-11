import React from "react";
import Wrapper from "./StudioForm.styled";
import { useState } from "react";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const StudioForm = ({
  videoTitle,
  setVideoId,
  setDubbingOption,
  dubbingOption,
  setEndSec,
  setStartSec,
  recordAudio,
  uploadSrc,
  setFinish,
  setCreationData,
  videoDuration,
  values = null,
}) => {
  const [endMinute, setEndMinute] = useState(0);
  const [endSecond, setEndSecond] = useState(0);
  const [startMinute, setStartMinute] = useState(0);
  const [startSecond, setStartSecond] = useState(0);
  const [validationObj, setValidationObj] = useState(0);

  useEffect(() => {
    setEndSecond(0);
    setEndMinute(0);
    setStartSecond(0);
    setStartMinute(0);

    if (dubbingOption == 0) {
      setValidationObj(validationWithEnd);
    } else {
      setValidationObj(validationWithOutEnd);
    }

    formik.values.startSecond = 0;
    formik.values.startMinute = 0;
    formik.values.endSecond = "";
    formik.values.endMinute = "";
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
  const warningMassage = (message) => {
    toast.warn(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return false;
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

  const validationWithOutEnd = {
    videoLink: Yup.string().required("Required!"),

    type: Yup.string().required("Required!"),

    startMinute: Yup.number()
      .required("Required!")
      .test(
        "is-positive",
        "Must not be 0 or more",
        (value) => parseInt(value) >= 0
      )
      .test(
        "is-decimal",
        "Must not be a decimal",
        (value) => !(value + "").match(/^\d*\.{1}\d*$/)
      ),
    startSecond: Yup.number()
      .required("Required!")
      .test(
        "is-positive",
        "Must not be 0 or more",
        (value) => parseInt(value) >= 0
      )
      .test(
        "is-decimal",
        "Must not be a decimal",
        (value) => !(value + "").match(/^\d*\.{1}\d*$/)
      ),
  };

  const validationWithEnd = {
    ...validationWithOutEnd,
    endMinute: Yup.number()
      .required("Required!")
      .test(
        "is-positive",
        "Must not be 0 or more",
        (value) => parseInt(value) >= 0
      )
      .test(
        "is-decimal",
        "Must not be a decimal",
        (value) => !(value + "").match(/^\d*\.{1}\d*$/)
      ),
    endSecond: Yup.number()
      .required("Required!")
      .test(
        "is-positive",
        "Must not be 0 or more",
        (value) => parseInt(value) >= 0
      )
      .test(
        "is-decimal",
        "Must not be a decimal",
        (value) => !(value + "").match(/^\d*\.{1}\d*$/)
      ),
  };

  const formik = useFormik({
    initialValues: {
      videoLink: values ? values.videoLink : "",
      type: values ? values.type : "",
      startMinute: values ? values.startMinute : "",
      startSecond: values ? values.startSecond : "",
      endMinute: values ? values.endMinute : "",
      endSecond: values ? values.endSecond : "",
    },

    validationSchema: Yup.object(validationObj),

    onSubmit: (values) => {
      if (videoTitle.length <= 0) {
        warningMassage("The video Link is invalid!");
      } else if (dubbingOption == 1 && !(uploadSrc.current.duration > 0)) {
        console.log(uploadSrc.current.duration, "#######");
        warningMassage("Upload audio first!");
      } else if (dubbingOption == 2 && !(recordAudio.current.duration > 0)) {
        warningMassage("Record audio first!");
      } else if (
        (dubbingOption == 1 &&
          uploadSrc.current.duration + startSecond + 5 > videoDuration) ||
        (dubbingOption == 2 &&
          recordAudio.current.duration + startSecond + 5 > videoDuration &&
          recordAudio.current.duration !== Infinity)
      ) {
        warningMassage(
          "The audio from the start second is longer than the video!"
        );
        console.log(
          dubbingOption,
          recordAudio.current.duration,
          startSecond,
          videoDuration
        );
      } else {
        let srcFile;
        const audio =
          values.type == 1
            ? (srcFile = uploadSrc.current.currentSrc)
            : values.type == 2
            ? (srcFile = recordAudio.current.currentSrc)
            : null;
        fetch(audio)
          .then((response) => response.blob())
          .then((audioBlob) => {
            setCreationData({ ...values, blob: audioBlob });
            setFinish(true);
            console.log(recordAudio.current.duration, videoDuration, ".00000");
          });
      }
    },
  });

  return (
    <Wrapper>
      <div className="upForm">
        <div className="title">Create New</div>

        <form action="" onSubmit={formik.handleSubmit}>
          <div className="inputWrapper">
            <input
              type="text"
              name="videoLink"
              id="videoLink"
              placeholder="video Link"
              onChange={(e) => {
                formik.handleChange(e);
                getId(e);
              }}
              value={formik.values.videoLink}
            />
            {formik.errors.videoLink && formik.touched.videoLink && (
              <p>{formik.errors.videoLink}</p>
            )}
          </div>

          <div className="inputWrapper">
            <select
              name="type"
              id="type"
              defaultValue=""
              onChange={(e) => {
                if (
                  videoTitle.length < 1 &&
                  e.target.value !== "7" &&
                  dubbingOption !== undefined
                ) {
                  toast.warn("Please add the video link first", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                } else {
                  setDubbingOption(e.target.value);
                  formik.handleChange(e);
                }
              }}
              value={formik.values.type}
            >
              <option value="">Dubbing Options</option>
              <option value="0">Without Dubbing</option>
              <option value="1">Upload Dubbing</option>
              <option value="2">Record Dubbing</option>
              <option value="7">server audio</option>
            </select>
            {formik.errors.type && formik.touched.type && (
              <p>{formik.errors.type}</p>
            )}
          </div>

          <div className="inputWrapper">
            <div className="realTime">Start Time</div>
            <div className="timeWrapper">
              <div className="startMinute">
                <input
                  type="number"
                  name="startMinute"
                  id="startMinute"
                  placeholder="Start Minute"
                  // value={startMinute}
                  onChange={(e) => {
                    startTimeFun(e, "minute");
                    formik.handleChange(e);
                  }}
                  value={formik.values.startMinute}
                />
                {formik.errors.startMinute && formik.touched.startMinute && (
                  <p>{formik.errors.startMinute}</p>
                )}
              </div>

              <div className="startSecond">
                <input
                  type="number"
                  name="startSecond"
                  id="startSecond"
                  placeholder="Start Second"
                  // value={startSecond}
                  onChange={(e) => {
                    startTimeFun(e, "second");
                    formik.handleChange(e);
                  }}
                  value={formik.values.startSecond}
                />
                {formik.errors.startSecond && formik.touched.startSecond && (
                  <p>{formik.errors.startSecond}</p>
                )}
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
                    placeholder="End Minute"
                    // value={endMinute}
                    onChange={(e) => {
                      endTimeFun(e, "minute");
                      formik.handleChange(e);
                    }}
                    value={formik.values.endMinute}
                  />
                  {formik.errors.endMinute && formik.touched.endMinute && (
                    <p>{formik.errors.endMinute}</p>
                  )}
                </div>
                <div className="endSecond">
                  <input
                    type="number"
                    name="endSecond"
                    id="endSecond"
                    placeholder="End Second"
                    // value={endSecond}
                    onChange={(e) => {
                      endTimeFun(e, "second");
                      formik.handleChange(e);
                    }}
                    value={formik.values.endSecond}
                  />
                  {formik.errors.endSecond && formik.touched.endSecond && (
                    <p>{formik.errors.endSecond}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <button type="submit" className="finish">
            Finish
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default StudioForm;
//acquiring_media
