import React from "react";

const AdvertiseSection = () => {
  return (
    <section id="services" className="what-we-provide-area rpt-100 rel z-1">
      <div className="container container-1290">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 wow fadeInUp delay-0-2s">
            <div className="section-title style-two text-center mb-70">
              <span className="sub-title mb-15">Lo que ofrecemos</span>
              <h2>
                Hacemos Crecer la <i>Identidad</i> de tu marca
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="we-provide-item wow fadeInUp delay-0-2s">
              <span className="serial-number">01</span>
              <h3>
                <p>
                  <span>Diseñamos</span> Productos Digitales
                </p>
              </h3>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="we-provide-item wow fadeInUp delay-0-4s">
              <span className="serial-number">02</span>
              <h3>
                <p>
                  <span>Branding</span> &amp; Diseño de Marcas
                </p>
              </h3>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="we-provide-item wow fadeInUp delay-0-6s">
              <span className="serial-number">03</span>
              <h3>
                <p>
                  <span>Desarrollo</span> De Productos Digitales
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseSection;
