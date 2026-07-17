import { wedding } from "../weddingData";


export default function Hero() {
  return (
    <section className="hero section d-flex flex-column justify-content-center align-items-center text-center">
      <div className="monogram" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <path d="M20 75 L38 25 L50 55 L62 25 L80 75" />
          <line className="clay" x1="15" y1="50" x2="85" y2="50" />
        </svg>
      </div>

      <div className="container">
        <p className="eyebrow">{wedding.eyebrow}</p>

        <h1 className="names">
          {wedding.partnerOne}
          <span className="amp">&amp;</span>
          {wedding.partnerTwo}
        </h1>

        <p className="date-line">
          {wedding.date} &nbsp;·&nbsp;{wedding.date1}
        </p><p className="date-line">{wedding.city}</p>
      </div>

      <p className="scroll-cue">Scroll ↓</p>
    </section>
  );
}