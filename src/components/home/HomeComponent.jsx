import Menu from "../menu/Menu";
import "./styles.css";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function HomeComponent() {
  return (
    <>
      <Menu></Menu>
      <div className="headerContainer">
        <div></div>
        <div className="slider">
          <div className="sliderContainer">
            <div className="title">
              <h1>Axel</h1>
              <h1>Vaquero</h1>
            </div>
            <div className="subtitle">
              <Typewriter
                options={{
                  strings: ["Periodista", "Arqueólogo", "Divulgador histórico"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 300,
                }}
              />
            </div>
            <div className="rrss">
              <a href="https://www.linkedin.com/in/axel-vaquero-300637203/">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/escritura.cutreiforme/">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@escritura.cutreiforme">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
