import React from "react";
import Wrapper from "./StudioForm.styled";
import { useState } from "react";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const StudioForm = ({
  videoDuration,
  setVideoId,
  setDubbingOption,
  dubbingOption,
  setEndSec,
  setStartSec,
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

    if (dubbingOption == 1) {
      setValidationObj(validationWithEnd);
    } else {
      setValidationObj(validationWithOutEnd);
    }
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

  const validationWithOutEnd = {
    videoLink: Yup.string()
      .required("Required!")
      .test("videoLink", "Invalid link", () => {
        if (videoDuration > 0) {
          return true;
        }
        return false;
      }),
    type: Yup.string().required("Required!"),

    startMinute: Yup.number()
      .required("Required!")
      .positive("Should to be Positive")
      .test(
        "is-decimal",
        "Must not be a decimal",
        (value) => !(value + "").match(/^\d*\.{1}\d*$/)
      ),
    startSecond: Yup.number()
      .required("Required!")
      .positive("Should to be Positive")
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
      .positive("Should to be Positive")
      .test(
        "is-decimal",
        "Must not be a decimal",
        (value) => !(value + "").match(/^\d*\.{1}\d*$/)
      ),
    endSecond: Yup.number()
      .required("Required!")
      .positive("Should to be Positive")
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
      alert(JSON.stringify(values, null, 2));
      console.log({
        validationObj,
      });
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
                setDubbingOption(e.target.value);
                formik.handleChange(e);
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
                  placeholder="startMinute"
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
              */*/*/*/*/*/
              <div className="startSecond">
                <input
                  type="number"
                  name="startSecond"
                  id="startSecond"
                  placeholder="startSecond"
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
                    placeholder="endMinute"
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
                    placeholder="endSecond"
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
