import { wedding } from "../weddingData";

export default function Gallery() {
  return (
    <section className="section reveal">
      <div className="wrap wide">
        <h2 className="details-title">A Few Favorites</h2>
        <div className="gallery-grid">
          {wedding.gallery.map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={`Moment ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <p className="gallery-hint">
          {/* Drop your own photos into <code>/public/gallery</code> and list the filenames in{" "} */}
          <code>weddingData.js</code>
        </p>
      </div>
    </section>
  );
}
