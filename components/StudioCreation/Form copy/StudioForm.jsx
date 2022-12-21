import React from "react";
import Wrapper from "./StudioForm.styled";
import AddInput from "../../Globals/AddInput/AddInput";
import { useState } from "react";

const StudioForm = () => {
  const [list, setList] = useState([]);
  const [tag, setTag] = useState([]);
  const languages = [
    "Arabic",
    "English",
    "Mandarin",
    "Hindi",
    "Spanish",
    "German",
    "Telugu",
    "Italian",
    "Bengali",
    "Russian",
    "Portuguese",
    "Indonesian",
    "Urdu",
    "Japanese",
    "Punjabi",
    "Javanese",
    "Wu",
    "Turkish",
    "Korean",
    "Marathi",
  ];

  const categories = [
    "Education",
    "Science & Technology",
    "Film & Animation",
    "Autos & Vehicles",
    "Music",
    "Pets & Animals",
    "Sports",
    "Travel & Events",
    "Gaming",
    "People & Blogs",
    "Comedy",
    "Entertainment",
    "News & Politics",
  ];

  return (
    <Wrapper>
      <div className="upForm">
        <form action="">
          <div className="inputWrapper">
            <input type="text" name="title" id="title" placeholder="title" />
          </div>
          <div className="inputWrapper">
            <textarea
              name="description"
              id="description"
              placeholder="description"
            />
          </div>
          <div className="inputWrapper">
            <input
              type="text"
              name="videoLink"
              id="videoLink"
              placeholder="videoLink"
            />
          </div>
          <div className="inputWrapper">
            <select name="videoLanguage" id="videoLanguage">
              <option value="0" disabled selected>
                Video Language
              </option>
              {languages.map((value, index) => (
                <option value={index} key={index}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="inputWrapper">
            <select name="dubbingLanguage" id="dubbingLanguage">
              <option value="0" disabled selected>
                Dubbing Language
              </option>
              {languages.map((value, index) => (
                <option value={index} key={index}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="inputWrapper">
            <div className="realTime">
              Time in minute & second <span className="time">00 : 00</span>
            </div>
            <input
              type="text"
              name="startTime"
              id="startTime"
              placeholder="Start time in second"
            />
          </div>
          <div className="inputWrapper">
            <div className="realTime">
              Time in minute & second <span className="time">00 : 00</span>
            </div>
            <input
              type="text"
              name="endTime"
              id="endTime"
              placeholder="End time in second"
            />
          </div>

          <div className="inputWrapper">
            <AddInput items={tag} setItems={setTag} name="tag" />
          </div>
          <div className="inputWrapper">
            <select name="type" id="type">
              <option value="0">Without Dubbing</option>
              <option value="1">Upload Dubbing</option>
              <option value="2">Record Dubbing</option>
            </select>
          </div>
          <div className="inputWrapper">
            <select name="category" id="category">
              <option value="0" disabled selected>
                Category
              </option>
              {categories.map((value, index) => (
                <option value={index} key={index}>
                  {value}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="inputWrapper">
            <select name="list" id="list">
              <option value="0" disabled selected>
                Select list
              </option>
              {list.map((value, index) => (
                <option value={index} key={index}>
                  {value}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            <div className="mt">
              <AddInput items={list} setItems={setList} name="list" />
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default StudioForm;
