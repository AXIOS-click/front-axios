import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-area-six pt-185 rpt-150 pb-130 rpb-100 rel z-1">
      <div className="container container-1620">
        <div className="hero-six-wrapper">
          <div className="hero-social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/AXIOS-CLICK-109389375125627/"
            >
              <i className="fab fa-facebook-f" /> <span>Facebook</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/axiosclick/"
            >
              <i className="fab fa-instagram" /> <span>Instagram</span>
            </a>
            {[...Array(2)].map((_, i) => (
              <p
                key={`hero-social-${i + 1}`}
                style={{
                  visibility: "hidden",
                }}
              >
                a
              </p>
            ))}
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
                  <b>ÉXITO</b> son las que se atrevieron a probar algo
                  diferente.
                </p>
                <Link href="services" className="theme-btn style-two">
                  Explore Services <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 align-self-end">
              <div className="right-image">
                <img src="assets/images/hero/hero-six2.png" alt="Hero" />
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
