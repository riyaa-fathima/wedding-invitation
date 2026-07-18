import { wedding } from "../weddingData";
import coupleLogo from "../assets/images/couple-logo.png";

export default function Closing() {
  return (
    <section className="closing section reveal">
      <div className="container text-center">

        <p className="closing-text">
          {wedding.closing}
        </p>

        <img
          src={coupleLogo}
          alt="Couple logo"
          className="couple-logo"
        />

      </div>

      <footer className="closing-footer">
        {wedding.city.split(",")[0]} · {wedding.date.split(",")[0]}
      </footer>
    </section>
  );
}