import React from "react";
import VideoPlayer from "react-background-video-player";
import "./App.css";

function App() {
  return (
    <div className="App">
      <VideoPlayer
        className="video"
        src={
          "https://player.vimeo.com/external/327135247.sd.mp4?s=16ebc8ccbb967cc3ea1a15ebda49874dd3fba11c&profile_id=165&oauth2_token_id=57447761"
        }
        autoPlay={true}
        muted={true}
        height={100}
        width={100}
      />
      <div className="mainInput">
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Where to?"
        />
      </div>
    </div>
  );
}

export default App;
