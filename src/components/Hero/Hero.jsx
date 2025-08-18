import "./Hero.css";
import harry from "../../assets/harryPotter.png"; // adjust path as per your structure

export default function Hero() {
  return (
    <section className="hero">
      {/* Left: Text */}
      <div className="hero-left">
        <h1>
          <i>Solutions</i> are easy. <span>Understanding</span> is rare.
        </h1>
        <p>
          And nothing matches the satisfaction of truly seeing the algorithm in your mind. ✨
        </p>
      </div>

      {/* Right: Floating logo */}
      <div className="hero-right">
        <img src={harry} alt="Logo" className="floating-logo" />
      </div>
    </section>
  );
}
