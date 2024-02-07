import { Pricing as IPricing } from "@/src/constants/pricing.constant";
import React, { FC } from "react";

interface PricingProps {
  pricing: IPricing;
}
const Pricing: FC<PricingProps> = ({ pricing }) => {
  const { title, description, features, price, save, icon } = pricing;

  return (
    <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-4s">
      <div
        className="pricing-plan-item style-three"
        style={{
          backgroundImage: "url(assets/images/shapes/pricing-plan-bg.png)",
        }}
      >
        <div className="icon-title">
          <div className="icon  bg-transparent">
            <i className={icon} />
          </div>
          <h5>{title}</h5>
        </div>
        <p>{description}</p>
        <ul className="list-style-one">
          {features.map(({ feature: featureText, included }, i) => (
            <li
              key={`feature-${i + 1}`}
              className={`${
                included &&
                "text-decoration-line-through text-muted deactivated"
              }`}
            >
              {featureText}
            </li>
          ))}
        </ul>
        <div className="price-offer">
          <span className="price-text">
            <span className="before">$</span>
            <span className="price">{price}</span>
          </span>
          {save && (
            <>
              <img src="assets/images/shapes/right-arrow.png" alt="Arrow" />
              <span className="offer-text">Ahorra {save}%</span>
            </>
          )}
        </div>
        {/* <Link legacyBehavior href="/pricing">
          <a className="theme-btn w-100">
            Choose Package <i className="far fa-arrow-right" />
          </a>
        </Link> */}
      </div>
    </div>
  );
};

export default Pricing;
