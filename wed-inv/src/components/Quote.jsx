// import { wedding } from "../weddingData";
import polaroid from "../assets/images/polaroid.png";
import wedding from "../../public/music/wedding.mp3";

import { useRef, useState } from "react";

export default function Quote() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };
  return (
    <section className="welcome">
      <div className="memory-frame">
        <img src={polaroid} alt="Childhood Memories" />

        <button className="music-btn" onClick={toggleMusic}>
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <audio ref={audioRef}>
          <source src={wedding} type="audio/mpeg" />
        </audio>
      </div>

      <h2 className="heading">A Love Written In Time</h2>

      <div className="story">
        <p>
          As we step into this new chapter, it would mean so much to have you by
          our side on our special day.
        </p>

        <p>
          On this page you'll discover everything you need — the schedule, venue
          details,and a few extra touches.
        </p>

        <p>Here's to love, joy and the beginning of our forever.</p>
      </div>

      <span className="with-love">WITH LOVE</span>

      <h1 className="names">Riya & Riswan</h1>
    </section>
  );
}
