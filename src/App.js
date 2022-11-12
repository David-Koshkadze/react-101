import { useState, useEffect, useRef } from "react";
import "./styles.css";


function VideoPlayer({source, isPlaying}) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  })

  return (
    <video width="300px" src={source} ref={ref} loop playsInline/>
  )
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "Stop" : "Play"}</button>
      <VideoPlayer source="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={isPlaying}
      />
    </div>
  );
}
