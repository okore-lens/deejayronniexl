import React, { useEffect } from "react";
import AudioCard from "../../../cards/audio/AudioCard";
// import VideoCard from "../../../cards/video/VideoCard";
import "./Discography.scss";
import audiolist from "../../../assets/arrays/audios";
const Discography = () => {
  return (
    <div className="discography">
      <h1>Discography</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna ali.orem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali.
        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna ali.orem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna ali et, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna ali.
      </p>
      {/* Audio Section */}
      <div className="audio-section">
        <h2>Audio</h2>
        {audiolist.map((audio) => (
          <AudioCard
            key={audio.id}
            url={audio.url}
            title={audio.title}
            link={audio.link}
          />
        ))}
        {/* <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard /> */}
      </div>
      {/* Video Section
      <div className="video-section">
        <h2>Video</h2>
        <VideoCard />
      </div> */}
    </div>
  );
};

export default Discography;
