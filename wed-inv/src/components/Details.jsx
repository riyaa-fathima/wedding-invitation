import { wedding } from "../weddingData";

export default function Details() {
  return (
    <section className="details section reveal">
      <div className="container">

        <h2 className="details-title">The Details</h2>

        <div className="detail-grid">

          <div className="detail">
            <p className="detail-label"> Nikah Ceremony</p>
            <p className="detail-value">{wedding.ceremony.time}</p>
            <p className="detail-sub">{wedding.ceremony.venue}</p>
          </div>

          <div className="detail">
            <p className="detail-label">Reception</p>
            <p className="detail-value">{wedding.reception.time}</p>
            <p className="detail-sub">{wedding.reception.venue}</p>
          </div>

          {/* <div className="detail">
            <p className="detail-label">Attire</p>
            <p className="detail-value">{wedding.attire.label}</p>
            <p className="detail-sub">{wedding.attire.note}</p>
          </div> */}

        </div>

        <div className="map-frame">
          <iframe
            title="Venue location"
            src={wedding.mapEmbedUrl}
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="note-box">
          <p className="detail-label">Good to know</p>
          <p>{wedding.goodToKnow}</p>
        </div>

      </div>
    </section>
  );
}