import { useReactMediaRecorder } from "react-media-recorder";
import Image from "next/image";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { useRef } from "react";
import StudioForm from "./Form/StudioForm";
import Wrapper from "./StudioCreation.styled";
import { useDispatch } from "react-redux";
import Inform from "../Globals/Inform/Inform";

// acquiring_media
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["mp3", "WAV", "mp4"];

const RecordView = () => {
  const dispatch = useDispatch();

  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: false });

  // console.log("dddddddddddddd", useReactMediaRecorder({ video: false }));
  const [videoId, setVideoId] = useState("");
  const [player, setPlayer] = useState();
  const [videoWidth, setVideoWidth] = useState(0.6);
  const [startSec, setStartSec] = useState(0);
  const [endSec, setEndSec] = useState();
  const [pauseSec, setPauseSec] = useState();
  const [controls, setControls] = useState(1);
  const [sectionType, setSectionType] = useState("record");
  const [numberOfLastAction, setNumberOfLastAction] = useState();
  const [dubbingOption, setDubbingOption] = useState();
  const [videoDuration, setVideoDuration] = useState(0);
  const [startAction, setStartAction] = useState(true);
  const [mic, setMic] = useState(false);
  const [file, setFile] = useState(null);

  const audioRef = useRef();

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: { controls: controls, end: endSec, start: startSec },
  };

  const [option, setOption] = useState(opts);

  useEffect(() => {
    opts.playerVars.end = endSec;
    setOption(opts);
  }, [endSec]);
  0;
  useEffect(() => {
    opts.playerVars.start = startSec;
    setOption(opts);
    player && recReset();
    player && setSectionType("record");
  }, [startSec]);

  const micConditions = (permission) => {
    if (permission.state === "granted") {
      setMic(true);
      // OK - Access has been granted to the microphone
    } else if (permission.state === "denied") {
      console.log(permission.state, "2", "search");
      setMic(false);
      // KO - Access has been denied. Microphone can't be used
    } else {
      console.log(permission.state, "3", "search");
      navigator.mediaDevices.getUserMedia({ video: false, audio: true });
      // Permission should be asked
    }
  };

  const micFun = async () => {
    const permission = await navigator.permissions.query({
      name: "microphone",
    });
    micConditions(permission);
    permission.onchange = () => {
      console.log("changed", permission.state, "search");
      micConditions(permission);
      // React when the permission changed
    };
  };

  useEffect(() => {
    window.innerWidth < 768 && setVideoWidth(1);
    var blob = window.URL || window.webkitURL;
    if (!blob) {
      console.log("Your browser does not support Blob URLs :(");
      return;
    }
  }, []);

  useEffect(() => {
    player && recReset();
    setSectionType("record");
    player && setControls(0);
    player && setEndSec();
    player && setStartSec(0);
    console.log({ player });

    if (player && dubbingOption == 2) {
      player && micFun();
    }
    setFile(null);
  }, [dubbingOption]);

  /***********  recFunction  ***********/

  const onReady = (event) => {
    setPlayer(event.target);
    event.target.mute();
    audioRef.current.addEventListener("ended", () => {
      event.target.pauseVideo().seekTo(startSec);
    });
    setVideoDuration(event.target.getDuration());
  };

  const recordAgain = () => {
    setSectionType("record");
    recReset();
  };

  const uploadAgain = () => {
    console.log("uploadAgain");
  };

  const recStart = () => {
    setNumberOfLastAction(1);
    player.seekTo(startSec).playVideo().mute();
    if (sectionType === "record") {
      startRecording();
      if (mic === false) {
        recPause();
      }
    } else {
      audioRef.current.currentTime = player.getCurrentTime() - startSec;
      console.log("object1");
      audioRef.current.play();
      console.log("object2", audioRef.current);
    }
    setStartAction(false);
  };

  const recPause = () => {
    setNumberOfLastAction(2);
    player.pauseVideo();
    setPauseSec(player.getCurrentTime());
    console.log("465456456456", player.getCurrentTime());
    if (sectionType === "record") {
      pauseRecording();
    } else {
      audioRef.current.pause();
    }
  };

  const recResume = () => {
    setNumberOfLastAction(1);
    if (sectionType === "record") {
      if (Math.abs(player.getCurrentTime() - pauseSec) > 1 || mic === false) {
        recPause();
      } else {
        player.playVideo();
        resumeRecording();
      }
    } else if (sectionType === "audio") {
      console.log("audio");
      if (
        player.getCurrentTime() - startSec - 1 > audioRef.current.duration ||
        player.getCurrentTime() < startSec
      ) {
        console.log("reset");
        recReset();
      } else if (
        Math.floor(audioRef.current.currentTime) !==
        Math.floor(player.getCurrentTime() - startSec)
      ) {
        console.log("adjust second");
        audioRef.current.currentTime = player.getCurrentTime() - startSec;
        recResume();
      } else {
        console.log("ok");
        player.playVideo();
        audioRef.current.play();
        console.log(audioRef.current.play());
        // setTimeout(() => {
        //   audioRef.current.play();
        // }, 1000);
      }
    }
  };

  const recEnd = () => {
    setNumberOfLastAction(null);
    player.seekTo(startSec).pauseVideo();
    stopRecording();
    setEndSec(Math.floor(player.getCurrentTime()));
    setSectionType("audio");
    setControls(1);
    setStartAction(true);
  };

  const recReset = () => {
    player.seekTo(startSec);

    if (sectionType === "record") {
      setNumberOfLastAction(null);
      stopRecording();
    } else {
      audioRef.current.currentTime = 0;
    }
    setStartAction(true);
    recPause();
  };

  /******** end recFunction  ***********/

  const onStateChange = async (event) => {
    if (dubbingOption == 2 || sectionType === "audio") {
      console.log(event.data, "000000000", numberOfLastAction);

      if (event.data !== numberOfLastAction) {
        console.log("!!!!!!!!!!!", event.data, "*********");
        // if (event.data == "3") {
        //   console.log("oooooooo%%%%%%%%%");
        //   await setNumberOfLastAction(3);
        // }
        if (event.data === 1) {
          if (player.getCurrentTime() - startSec < 1) {
            console.log("22222222222222222222");
            recStart();
          } else {
            console.log(
              "333333333333333333333",
              player.getCurrentTime(),
              startSec
            );
            recResume();
          }
        } else if (event.data === 2) {
          recPause();
        } else if (event.data === 0) {
          recEnd();
        } else if (
          event.data === 3 &&
          event.target.getCurrentTime() - startSec > 1 &&
          sectionType === "record"
        ) {
          console.log("444444444444444444444");
          recReset();
        } else if (
          sectionType === "audio" &&
          event.target.getCurrentTime() > 1 &&
          event.data === 3
        ) {
          if (
            player.getCurrentTime() - startSec + 1 >
              audioRef.current.duration ||
            player.getCurrentTime() < startSec
          ) {
            recReset();
          } else {
            audioRef.current.currentTime = player.getCurrentTime() - startSec;
            console.log(
              audioRef.current.duration,
              "0000000000",
              audioRef.current.currentTime
            );
          }
        }
      }
    }
  };

  const handleChange = async (file) => {
    setNumberOfLastAction(null);
    setStartAction(true);
    setSectionType("audio");
    player.seekTo(startSec).pauseVideo();
    setFile(file);
    // recReset();

    setControls(1);
  };

  /*************  end main video function  ************/
  return (
    <Wrapper>
      <div className="creationWrapper">
        <div className="formCont">
          <StudioForm
            videoDuration={videoDuration}
            setVideoId={setVideoId}
            setDubbingOption={setDubbingOption}
            dubbingOption={dubbingOption}
            setEndSec={setEndSec}
            setStartSec={setStartSec}
          />
        </div>
        <div className="factory">
          <div className="videoContainer">
            <div>
              <YouTube
                style={{ height: `calc((${videoWidth} * 100vw) * 0.56)` }}
                opts={option}
                onReady={onReady}
                onStateChange={onStateChange}
                videoId={videoId}
              />
              {dubbingOption === "2" && (
                <>
                  {startAction && (
                    <button onClick={() => recStart()}>recStart</button>
                  )}
                  {!startAction && sectionType === "record" && (
                    <>
                      {numberOfLastAction !== 2 && (
                        <button onClick={() => recPause()}>recPause</button>
                      )}
                      {numberOfLastAction === 2 && (
                        <button onClick={() => recResume()}>recResume</button>
                      )}
                      <button onClick={() => recEnd()}>recEnd</button>
                      <button onClick={() => recReset()}>recReset</button>
                    </>
                  )}
                  {sectionType === "audio" &&
                    (dubbingOption === "2" ? (
                      <button onClick={() => recordAgain()}>
                        Record again
                      </button>
                    ) : dubbingOption === "1" ? (
                      <button onClick={() => uploadAgain()}>
                        Upload again
                      </button>
                    ) : null)}
                </>
              )}

              {dubbingOption === "1" && (
                <div className="uploader">
                  <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                  />
                  {/* <p>
                    {file
                      ? `File name: ${file[0].name}`
                      : "no files uploaded yet"}
                    {file && (
                      <audio
                        src={URL.createObjectURL(file[0])}
                        controls
                        ref={audioRef}
                      />
                    )}
                  </p> */}
                </div>
              )}
            </div>
          </div>
          {/* <p>{status}</p> */}
          <audio
            // src={mediaBlobUrl}
            src={file ? URL.createObjectURL(file[0]) : mediaBlobUrl}
            controls
            ref={audioRef}
            // style={{ display: "none" }}
          />
        </div>
      </div>
      {!mic && dubbingOption === "2" && (
        <Inform text="Access the microphone, please" />
      )}
    </Wrapper>
  );
};

export default RecordView;
