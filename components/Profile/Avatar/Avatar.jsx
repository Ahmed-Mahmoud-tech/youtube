import React, { useState, useRef } from "react";
import Wrapper from "./Avatar.styled";
import ReactDOM from "react-dom";
import ReactAvatarEditor from "react-avatar-editor";

const Avatar = ({ setAvatar }) => {
  const [image, setImage] = useState(
    "https://thumbs.dreamstime.com/b/avatar-van-de-geekmens-104871313.jpg"
  );
  const [allowZoomOut, setAllowZoomOut] = useState(false);
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [borderRadius, setBorderRadius] = useState(0);
  const [preview, setPreview] = useState(
    "https://thumbs.dreamstime.com/b/avatar-van-de-geekmens-104871313.jpg"
  );
  const [final, setFinal] = useState(null);
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(150);

  const handleNewImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
  };

  const handlePositionChange = (position) => {
    setPosition(position);
  };

  const onImageChange = () => {
    setTimeout(() => {
      try {
        const can = editor?.current?.getImage();
        setPreview(can.toDataURL());
        setAvatar(can.toDataURL());
      } catch (e) {
        setImage(preview);
      }
    }, 100);
  };

  const editor = useRef();
  const Input = useRef();

  return (
    <Wrapper>
      <div className="avatarWrapper">
        <div>
          <ReactAvatarEditor
            ref={editor}
            onImageChange={(e) => onImageChange(e)}
            scale={parseFloat(scale)}
            width={width}
            height={height}
            position={position}
            onPositionChange={handlePositionChange}
            rotate={parseFloat(rotate)}
            borderRadius={width / (100 / borderRadius)}
            image={image}
            className="editor-canvas"
          />
        </div>
        <input
          name="scale"
          type="range"
          onChange={handleScale}
          min={allowZoomOut ? "0.1" : "1"}
          max="2"
          step="0.01"
          defaultValue="1"
        />
      </div>
      <button onClick={() => Input.current.click()}>Upload image</button>
      <input
        ref={Input}
        name="newImage"
        type="file"
        onChange={handleNewImage}
        style={{ display: "none" }}
      />
    </Wrapper>
  );
};

export default Avatar;
