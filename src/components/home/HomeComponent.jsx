import Menu from "../menu/Menu";
import "./styles.css";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn, FaPhone, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa6";

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
              <a href="">
                <FaLinkedinIn />
              </a>
              <a href="" className="phone">
                <FaPhone />
              </a>
              <a href="">
                <FaWhatsapp />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
