import Link from "next/link";
import { WHATSAPP_LINK } from "../constants/common.constant";
import Image from "next/image";
import { CircleIcon, CloseIcon, WeveLinesIcon } from "../assets";

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
        <Image
          className="shape one"
          src={CircleIcon}
          alt="Circle icon | Axios Click"
          width={15}
          height={15}
        />
        <Image
          className="shape two"
          src={CloseIcon}
          alt="Close icon | Axios Click"
          width={15}
          height={15}
        />
        <Image
          className="shape three"
          src={WeveLinesIcon}
          alt="Weve Line icon | Axios Click"
          width={60}
          height={43}
        />
        <Image
          className="shape four"
          src={CircleIcon}
          alt="Circle icon | Axios Click"
          width={15}
          height={15}
        />
        <Image
          className="shape five"
          src={CloseIcon}
          alt="Close icon | Axios Click"
          width={15}
          height={15}
        />
        <Image
          className="shape six"
          src={WeveLinesIcon}
          alt="Weve Line icon | Axios Click"
          width={60}
          height={43}
        />
      </div>
    </div>
  );
};

export default CTAsection;
