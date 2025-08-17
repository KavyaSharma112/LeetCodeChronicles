import "./Hero.css";
import logo from "../../assets/icebear.png"; // adjust path as per your structure

export default function Hero() {
  return (
    <section className="hero">
      {/* Left: Floating logo */}
      <div className="hero-left">
        <img src={logo} alt="Logo" className="floating-logo" />
      </div>

      {/* Right: Text */}
      <div className="hero-right">
        <h1>
          <i>Solutions</i> are easy. <span>Understanding</span> is rare.
        </h1>
        <p>
          And nothing matches the satisfaction of truly seeing the algorithm in your mind. ✨
        </p>
      </div>
    </section>
  );
}
