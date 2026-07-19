import { wedding } from "../weddingData";
import venue from "../assets/images/nvenue.png";
import nikah from "../assets/images/nikaah.png";
import dining from "../assets/images/dinner.png";

export default function Details() {
  return (
    <section className="details section reveal">
      <div className="container">
        <h2 className="details-title">Wedding Details</h2>

        <div className="detail-item">
          <img src={venue} alt="Venue" className="detail-icon" />

          <h3>Venue</h3>

          <p>{wedding.ceremony.venue}</p>

          <a
            href={wedding.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="location-link"
          >
            View Location →
          </a>
        </div>

        <div className="divider"></div>

        <div className="detail-item">
          <img src={nikah} alt="Nikah" className="detail-icon" />

          <h3>Nikah Ceremony</h3>

          <p>{wedding.ceremony.time}</p>
        </div>

        <div className="divider"></div>

        <div className="detail-item">
          <img src={dining} alt="Dining" className="detail-icon" />

          <h3>Dining</h3>

          <p>{wedding.reception.time}</p>
        </div>
        <div className="divider"></div>
      </div>
    </section>
  );
}
