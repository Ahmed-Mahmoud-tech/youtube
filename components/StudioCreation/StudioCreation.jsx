import { useReactMediaRecorder } from "react-media-recorder";
import Image from "next/image";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { useRef } from "react";
import StudioForm from "./Form/StudioForm";
import Wrapper from "./StudioCreation.styled";
import Inform from "../Globals/Inform/Inform";

// acquiring_media
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["mp3", "WAV", "mp4"];

const RecordView = () => {
  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: false });

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: { controls: controls, end: endSec, start: startSec },
  };

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
  const [audioRef, setAudioRef] = useState(uploadSrcRef);
  const [theFile, setTheFile] = useState(mediaBlobUrl);
  const [option, setOption] = useState(opts);

  const recordAudioRef = useRef();
  const uploadSrcRef = useRef();

  // end second
  useEffect(() => {
    opts.playerVars.end = endSec;
    setOption(opts);
  }, [endSec]);

  // start second
  useEffect(() => {
    opts.playerVars.start = startSec;
    setOption(opts);
    player && recReset();
    player && setSectionType("record");
  }, [startSec]);

  // mic validation
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

  // window
  useEffect(() => {
    window.innerWidth < 768 && setVideoWidth(1);
  }, []);

  // change dubbing Option
  useEffect(() => {
    if (player) {
      recReset();
      setSectionType("record");
      setControls(0);
      setEndSec();
      setStartSec(0);
      if (dubbingOption == 2) {
        micFun();
      }
      if (dubbingOption == 1) {
        setAudioRef(uploadSrcRef);
      } else {
        setAudioRef(recordAudioRef);
      }
    }
  }, [dubbingOption]);

  /***********  recFunction  ***********/

  const onReady = (event) => {
    setPlayer(event.target);
    event.target.mute();
    audioRef?.current.addEventListener("ended", () => {
      event.target.pauseVideo().seekTo(startSec);
    });
    setVideoDuration(event.target.getDuration());
  };

  const recordAgain = () => {
    setSectionType("record");
    recReset();
  };

  const recStart = () => {
    setNumberOfLastAction(1);
    player.seekTo(startSec).playVideo().mute();
    console.log("recStart");
    if (sectionType === "record") {
      console.log("recStart, record mode");
      startRecording();
      if (mic === false) {
        console.log("recStart, mic is closed");
        recPause();
      }
    } else if (sectionType === "audio") {
      console.log("recStart, audio mode");
      audioRef.current.currentTime = player.getCurrentTime() - startSec;
      audioRef.current.play();
    }
    setStartAction(false);
  };

  const recPause = () => {
    console.log("recPause");
    setNumberOfLastAction(2);
    player.pauseVideo();
    setPauseSec(player.getCurrentTime());
    if (sectionType === "record") {
      console.log("recPause, record mode");
      pauseRecording();
    } else if (sectionType === "audio") {
      console.log("recPause, audio mode");
      audioRef.current.pause();
    }
  };

  const recResume = () => {
    console.log("recResume");
    setNumberOfLastAction(1);
    if (sectionType === "record") {
      console.log("recResume, record mode");
      if (Math.abs(player.getCurrentTime() - pauseSec) > 1 || mic === false) {
        console.log("recResume, record mode, pause");
        recPause();
      } else {
        console.log("recResume, record mode, resume");
        player.playVideo();
        resumeRecording();
      }
    } else if (sectionType === "audio") {
      console.log("recResume, audio mode");
      // if video over or lower than audio duration
      if (
        player.getCurrentTime() - startSec - 1 > audioRef.current.duration ||
        player.getCurrentTime() < startSec
      ) {
        console.log(
          "recResume, record mode, video over or lower than audio duration, Reset"
        );
        recReset();
        // if audio second not matched the video second
      } else if (
        Math.abs(
          audioRef.current.currentTime - (player.getCurrentTime() - startSec)
        ) > 1
      ) {
        console.log(
          "recResume, record mode, audio second not matched the video second, adjust audio"
        );
        audioRef.current.currentTime = player.getCurrentTime() - startSec;
        recResume();
      } else {
        console.log("recResume, record mode, ok");
        player.playVideo();
        audioRef.current.play();
        console.log(audioRef.current.play());
      }
    }
  };

  const recEnd = () => {
    console.log("recEnd");
    setNumberOfLastAction(3);
    player.seekTo(startSec).pauseVideo();
    stopRecording();
    setEndSec(Math.floor(player.getCurrentTime()));
    setSectionType("audio");
    setControls(1);
    setStartAction(true);
  };

  const recReset = () => {
    console.log("recReset");

    player.seekTo(startSec);
    if (sectionType === "record") {
      console.log("recReset, record");
      setNumberOfLastAction(null);
      stopRecording();
    } else if (sectionType === "audio") {
      console.log("recReset, record ");
      audioRef.current.currentTime = 0;
    }
    setStartAction(true);
    recPause();
  };

  /******** end recFunction  ***********/

  const onStateChange = (event) => {
    // setTimeout(() => {
    if (dubbingOption == 2 || sectionType === "audio") {
      console.log("step", "1", event.data, numberOfLastAction);

      if (event.data != numberOfLastAction) {
        console.log("step", "2", event.data, numberOfLastAction);
        if (event.data == "3") {
          console.log("step", "3", event.data, numberOfLastAction);
          setNumberOfLastAction(3);
        }
        if (event.data === 1) {
          console.log("step", "4", event.data, numberOfLastAction);
          if (player.getCurrentTime() - startSec < 1) {
            console.log("step", "5", event.data, numberOfLastAction);
            recStart();
          } else {
            console.log("step", "6", event.data, numberOfLastAction);
            recResume();
          }
        } else if (event.data === 2) {
          console.log("step", "7", event.data, numberOfLastAction);
          recPause();
        } else if (event.data === 0) {
          console.log("step", "8", event.data, numberOfLastAction);
          recEnd();
        } else if (
          event.data === 3 &&
          event.target.getCurrentTime() - startSec > 1 &&
          sectionType === "record"
        ) {
          console.log("step", "9", event.data, numberOfLastAction);

          recReset();
        } else if (
          sectionType === "audio" &&
          event.target.getCurrentTime() > 1 &&
          event.data === 3
        ) {
          console.log("step", "10", event.data, numberOfLastAction);

          if (
            player.getCurrentTime() - startSec + 1 >
              audioRef.current.duration ||
            player.getCurrentTime() < startSec
          ) {
            console.log("step", "11", event.data, numberOfLastAction);

            recReset();
          } else {
            console.log("step", "12", event.data, numberOfLastAction);
            audioRef.current.currentTime = player.getCurrentTime() - startSec;
          }
        }
      }
    }
    // }, 100);
  };

  const handleChange = (file) => {
    setTheFile(file);
    setNumberOfLastAction(null);
    setSectionType("audio");
    player.seekTo(startSec).pauseVideo();
    audioRef.current.currentTime = 0;
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
                  {sectionType === "audio" && dubbingOption === "2" && (
                    <button onClick={() => recordAgain()}>Record again</button>
                  )}
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
            // src={file ? URL.createObjectURL(file[0]) : mediaBlobUrl }
            src={theFile && URL.createObjectURL(theFile[0])}
            controls
            ref={uploadSrcRef}
            // style={{ display: "none" }}
          />

          <audio
            // src={mediaBlobUrl}
            // src={mediaBlobUrl}
            // src={file ? URL.createObjectURL(file[0]) : mediaBlobUrl }
            src={mediaBlobUrl}
            controls
            ref={recordAudioRef}
            // style={{ display: "none" }}
          />

          {/* <audio
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
            controls
            ref={audioRef}
          /> */}
        </div>
      </div>
      {!mic && dubbingOption === "2" && (
        <Inform text="Access the microphone, please" />
      )}
      <button onClick={() => audioRef.current.play()}>000000000000000</button>
    </Wrapper>
  );
};

export default RecordView;
