import Link from "next/link";
import { WEB_DEV_PRICING } from "../constants/pricing.constant";
import Pricing from "../components/layout/Pricing";

const PricingSection = () => {
  return (
    <section className="pricing-area-three pt-85">
      <div className="container container-1290">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <h2>Los mejores paquetes para diseño web</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-2s">
            <div
              className="pricing-banner"
              style={{
                backgroundImage:
                  "url(assets/images/background/pricing-banner-bg.jpg)",
              }}
            >
              <span className="join-us">Inicia con nosotros</span>
              <h4>Precios asombrosos para empresas/negocios en crecimiento</h4>
              <div className="hand-shape">
                <img
                  src="assets/images/shapes/pricing-banner-hand-shape.png"
                  alt="Pricing Banner Shape"
                />
              </div>
            </div>
          </div>
          {WEB_DEV_PRICING.filter((_, i) => i === 1 || i === 2).map(
            (pricing, i) => (
              <Pricing key={`pricing-${i + 1}`} pricing={pricing} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
