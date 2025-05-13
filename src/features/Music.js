import React from "react";
import ReactPlayer from "react-player/youtube";
import "./Music.css"
function Music(){
    return(
       
        <div className="music-container">
        <p className="music-title">
            Here are some Romantic Musics that I've Cherry Picked just for you. <br/>Sync your heart to the beats of love.        
        </p>
      
      <Player title="Titanic • My Heart Will Go On • Celine Dion" url="https://www.youtube.com/watch?v=F2RnxZnubCM" />
      <Player title="Never Gonna Give You Up • Rick Astley" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUjbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXAgcmljayBhc3RsZXk%3D" />
      <Player title="Careless Whisper • George Michael" url="https://www.youtube.com/watch?v=izGwDsrQ1eQ" />

      
      </div>
    )
}
function Player(props){
  return(
    <>
    <p>{props.title}</p>
        <ReactPlayer 
          url={props.url}
          className="react-player"
          width="100%"
          height="100%"
          controls={true}
          volume={0.5}
        /><br/>
      </>
  )
}
export default Music;