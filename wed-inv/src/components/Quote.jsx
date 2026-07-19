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
        <p>Two hearts, one promise, and a lifetime ahead.</p>

        <p>
          By the grace of Allah and with the blessings of our families, we
          invite you to join us as we unite in marriage. As we begin this
          beautiful journey together, we would be delighted to celebrate this
          special moment with those who mean the most to us.
        </p>

        <p>We eagerly await the joy of your presence and the warmth of your blessings on our wedding day.</p>
      </div>

      <span className="with-love">WITH LOVE</span>

      <h1 className="names">Riya & Riswan</h1>
    </section>
  );
}
