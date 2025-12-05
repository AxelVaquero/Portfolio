import Menu from "../menu/Menu";
import "./styles.css";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function HomeComponent() {
  return (
    <>
      <Menu />
      <div className="heroContainer">
        <div className="heroContent">
          <div className="titleWrapper">
            <h1 className="mainTitle">Axel<br />Vaquero</h1>
            <div className="subtitleWrapper">
              <span className="staticSubtitle">Soy </span>
              <div className="typewriterWrapper">
                <Typewriter
                  options={{
                    strings: ["Periodista", "Arqueólogo", "Divulgador"],
                    autoStart: true,
                    loop: true,
                    pauseFor: 2000,
                    deleteSpeed: 50,
                    delay: 80,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="socialWrapper">
            <a href="https://www.linkedin.com/in/axel-vaquero-300637203/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/escritura.cutreiforme/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@escritura.cutreiforme" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>

        <div className="heroImage">
          <div className="imageOverlay"></div>
        </div>
      </div>
    </>
  );
}
