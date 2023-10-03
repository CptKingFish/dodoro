import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId }) => {
  // Set up event handlers
  const onReady = (event) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    player.playVideo();
  };

  const onError = (error) => {
    console.error("YouTube Player Error:", error);
  };

  const opts = {
    height: "120",
    width: "320",
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1,
    // },
  };

  return (
    <div className="w-full">
      <YouTube
        videoId={videoId}
        onReady={onReady}
        onError={onError}
        iframeClassName={"iframe"}
      />
    </div>
  );
};

export default YouTubePlayer;
