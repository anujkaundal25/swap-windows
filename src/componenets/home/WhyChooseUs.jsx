import Image from "next/image";
import { FiArrowUpRight, FiCheck, FiAward } from "react-icons/fi";

const reasons = [
  "Premium European fabricator partnerships",
  "Frames with glass, frames only, or glass only",
  "Four material options: steel, wood, aluminum, and PVC",
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-visual" aria-label="Architectural windows in modern homes">
          <div className="why-choose-main-image">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1100&auto=format&fit=crop"
              alt="Bright modern living room with expansive windows"
              fill
              sizes="(max-width: 1023px) 90vw, 42vw"
              className="why-choose-image"
              unoptimized
            />
          </div>
          <div className="why-choose-inset-image">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=700&auto=format&fit=crop"
              alt="Contemporary home interior with custom glazing"
              fill
              sizes="(max-width: 1023px) 55vw, 22vw"
              className="why-choose-image"
              unoptimized
            />
          </div>
          <div className="why-choose-experience">
            <FiAward aria-hidden="true" />
            <span>
              <strong>Built around your project</strong>
              <small>Flexible product and supply options</small>
            </span>
          </div>
        </div>

        <div className="why-choose-content">
          <span className="why-choose-label">Why Choose Us</span>
          <h2 className="why-choose-title">
            The right windows, backed by the right partners.
          </h2>
          <p className="why-choose-intro">
            We connect builders and contractors with premium European
            fabricators and trusted glazing brands, making it easier to source
            the right solution for every project.
          </p>

          <div className="why-choose-details">
            <ul className="why-choose-list">
              {reasons.map((reason) => (
                <li key={reason}>
                  <span className="why-choose-check" aria-hidden="true">
                    <FiCheck />
                  </span>
                  {reason}
                </li>
              ))}
            </ul>

            <div className="why-choose-stats" aria-label="Our product range">
              <div>
                <strong>4</strong>
                <span>Material categories</span>
              </div>
              <div>
                <strong>USA</strong>
                <span>Distribution reach</span>
              </div>
            </div>
          </div>

          <a className="why-choose-cta" href="#contact">
            Learn More About Us
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
