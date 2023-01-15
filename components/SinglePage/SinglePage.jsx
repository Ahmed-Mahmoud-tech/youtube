import React, { useState, useRef, useEffect } from "react";
import Wrapper from "./SinglePage.styled";
import SingleVideo from "./SingleVideo/SingleVideo";
import Comments from "./Comments/Comments";
import Related from "./Related/Related";
import MainVideo from "../StudioCreation/MainVideo/MainVideo";

const SinglePage = () => {
  const [player, setPlayer] = useState();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState();
  const [numberOfLastAction, setNumberOfLastAction] = useState();
  const [startAction, setStartAction] = useState(true);
  const [pauseSec, setPauseSec] = useState();
  const [serverAudio, setServerAudio] = useState(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  );
  const [videoTitle, setVideoTitle] = useState("");
  const [videoWidth, setVideoWidth] = useState(0.59);
  const audioRef = useRef();

  const recPause = () => {
    console.log("recPause");
    setNumberOfLastAction(2);
    player.pauseVideo();
    setPauseSec(player.getCurrentTime());
    audioRef.current.pause();
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
            videoId={"eCsf7wAiwXg"}
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
            src={serverAudio}
            controls
            ref={audioRef}
            style={{ display: "none" }}
          />
        </div>
        <Comments />
      </div>
      <div className="left">
        <Related />
      </div>
    </Wrapper>
  );
};

export default SinglePage;
