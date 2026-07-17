import envelopeImg from "../assets/images/envolep.jpeg"; 

function Opening({ onOpen }) {
  return (
    <section className="opening">
      <div className="opening-overlay"></div>

      <div className="opening-content">
        <p className="subtitle">A CELEBRATION AWAITS</p>

        <h1 className="couple-name">
          Riya <span>&</span> Riswan
        </h1>

        <div className="divider"></div>

        <button className="envelope-btn" onClick={onOpen}>
          <img src={envelopeImg} alt="Wedding Invitation Envelope" />
        </button>

        <p className="click-text">CLICK TO OPEN</p>
      </div>
    </section>
  );
}

export default Opening;