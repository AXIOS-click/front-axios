import Link from "next/link";
import { WHATSAPP_LINK } from "../constants/common.constant";

const CTAsection = () => {
  return (
    <div className="cta-area bgc-primary pt-30 pb-15 rel z-1">
      <div className="container">
        <div className="cta-wrap">
          <h4>¡Cotizemos tu proyecto!</h4>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn"
          >
            Agenda una consulta <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
      <div className="cta-shapes">
        <img
          className="shape one"
          src="assets/images/shapes/circle.png"
          alt="Circle"
        />
        <img
          className="shape two"
          src="assets/images/shapes/close.png"
          alt="Close"
        />
        <img
          className="shape three"
          src="assets/images/shapes/weve-lines.png"
          alt="Weve Line"
        />
        <img
          className="shape four"
          src="assets/images/shapes/circle.png"
          alt="Circle"
        />
        <img
          className="shape five"
          src="assets/images/shapes/close.png"
          alt="Close"
        />
        <img
          className="shape six"
          src="assets/images/shapes/weve-lines.png"
          alt="Weve Line"
        />
      </div>
    </div>
  );
};

export default CTAsection;
