import Link from "next/link";
import React from "react";
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  WHATSAPP_LINK,
} from "../../../src/constants/common.constant";
import { HeroImage } from "../../../src/assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero-area-six pt-185 rpt-150 rpb-100 rel z-1">
      <div className="container container-1620">
        <div className="hero-six-wrapper">
          <div className="hero-social">
            <a target="_blank" rel="noopener noreferrer" href={FACEBOOK_LINK}>
              <i className="fab fa-facebook-f" /> <span>Facebook</span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={INSTAGRAM_LINK}>
              <i className="fab fa-instagram" /> <span>Instagram</span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={WHATSAPP_LINK}>
              <i className="fab fa-whatsapp" /> <span>Whatsapp</span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={LINKEDIN_LINK}>
              <i className="fab fa-linkedin" /> <span>Linkedin</span>
            </a>
          </div>
          <div className="row no-gap">
            <div className="col-xl-2"></div>
            <div className="col-xl-4">
              <div className="hero-six-content">
                <h1>Crea presencia Digital</h1>
                <p>
                  En <b>AXIOS CLICK</b> creemos que la presencia digital, la
                  forma de lograr posicionar tu marca, y nosotros estamos aquí
                  para <b>ayudarte a conseguirlo.</b> Las empresas de
                  <b> ÉXITO</b> son las que se atrevieron a probar algo
                  diferente.
                </p>
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-btn style-two"
                >
                  Agenda Una consulta <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 align-self-end">
              <div className="right-image">
                <Image
                  src={HeroImage}
                  alt="Imagen Principal | Axios lick"
                  width={470}
                  height={515}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};

export default HeroSection;
