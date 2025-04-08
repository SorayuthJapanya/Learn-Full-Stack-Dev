import React, { useState, useEffect, useRef } from "react";

const HomePage = (props) => {
  const { setFile, setAudioStream } = props;

  const [isRecording, setIsRecording] = useState("inactive");
  const [audioChuncks, setAudioChunks] = useState([]);
  const [duration, setDuration] = useState(0);

  const mediaRecorderRef = useRef(null);

  const mimeType = "audio/webm";

  async function startRecording() {
    let tempStream;
    console.log("Start Recording...");

    try {
      const streamData = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      tempStream = streamData;
    } catch (error) {
      console.log(error.message);
      return;
    }
    setIsRecording("recording");

    // Create a new MediaRecorder instance using the stream
    const media = new MediaRecorder(tempStream, { type: mimeType });
    mediaRecorderRef.current = media;

    mediaRecorderRef.current.start();
    let localAudioChuncks = [];
    mediaRecorderRef.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") {
        return;
      }
      if (event.data.size === 0) {
        return;
      }
      localAudioChuncks.push(event.data);
    };
    setAudioChunks(localAudioChuncks);
  }

  async function stopRecording() {
    setIsRecording("inactive");
    console.log("Stop Recording...");

    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChuncks, { type: mimeType });
      setAudioStream(audioBlob);
      setAudioChunks([]);
      setDuration(0);
    };

    mediaRecorderRef.current.stop();
  }

  useEffect(() => {
    if (isRecording === "inactive") {
      return;
    }

    const interval = setInterval(() => {
      setDuration((curr) => curr + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <main className="flex-1 p-4 flex flex-col text-center gap-3 sm:gap-4 justify-center pb-20">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl ">
        Tran<span className="span bold font-semibold">cripe</span>
      </h1>
      <h3 className="font-medium md:text-lg">
        Record<span className="span"> &rarr;</span> Trascipe
        <span className="span"> &rarr;</span> Translate
      </h3>

      {/* Record */}
      <button
        onClick={isRecording === "recording" ? stopRecording : startRecording}
        className="special-btn cursor-pointer flex items-center text-base justify-between mx-auto w-80 max-w-full gap-4 my-4"
      >
        <p>{isRecording === "inactive" ? "Record" : "Stop Recording..."}</p>
        <div className="flex items-center gap-2">
          {duration && <p className="text-sm ">{duration}s</p>}
          <i
            className={
              "fa-solid fa-microphone " +
              (isRecording === "recording" ? "text-rose-300" : "")
            }
          ></i>
        </div>
      </button>
      <p className="text-lg">
        Or{" "}
        <label className="bold cursor-pointer span hover:text-blue-700 duration-200">
          Upload{" "}
          <input
            onChange={(e) => {
              const tempFile = e.target.files[0];
              setFile(tempFile);
            }}
            className="hidden"
            type="file"
            accept=".mp3,.wave"
          />
        </label>
        a mp3 file
      </p>
      <p className="italic text-slate-500">Free now free forever!</p>
    </main>
  );
};

export default HomePage;
