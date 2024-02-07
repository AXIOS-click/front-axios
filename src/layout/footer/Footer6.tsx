import { AxioLogoWebp } from "@/src/assets";
import { FACEBOOK_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, WHATSAPP_LINK } from "@/src/constants/common.constant";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Footer6Props {
  dark: boolean;
}

const Footer6: FC<Footer6Props> = ({ dark }) => {
  return (
    <footer className="main-footer footer-six pt-80">
      <div className="container">
        <div className="row gap-80 justify-content-between">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget newsletter-widget wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-20">
                <Link href="/">
                  <Image
                    src={AxioLogoWebp}
                    alt="Logo Axios Click"
                    width={150}
                    height={40}
                  />
                </Link>
              </div>
              <div className="text mb-25">
                Las empresas de éxito son las que se atrevieron a probar algo
                diferente.
              </div>
              {/* <form className="footer-newsletter" action="#">
                <input type="email" placeholder="Email Address" required />
                <button type="submit">
                  <i className="far fa-long-arrow-right" />
                </button>
              </form> */}
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-3 col-6">
            <div className="footer-widget footer-links wow fadeInUp delay-0-3s">
              <h5 className="footer-title">Axios Click</h5>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two">
                  <li>
                    <Link href="/">Principal</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-2 col-lg-2 col-md-3 col-6">
            <div className="footer-widget footer-links wow fadeInUp delay-0-4s">
              <h5 className="footer-title">Resources</h5>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">My account</a>
                  </li>
                  <li>
                    <a href="#">Themes</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-6">
            <div className="footer-widget footer-links wow fadeInUp delay-0-5s">
              <h5 className="footer-title">Supports</h5>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two">
                  <li>
                    <a href="#">Terms of Services</a>
                  </li>
                  <li>
                    <a href="#">Support Ticket</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Video Tutorials</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="footer-widget footer-info wow fadeInUp delay-0-6s">
              <h5 className="footer-title">Contacto</h5>
              <ul className="list-style-two">
                <li>
                  <i className="far fa-map-marker-alt" />{" "}
                  <span>Quito, Ecuador</span>
                </li>
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a href="mailto:administrator@axios.click">
                    administrator@axios.click
                  </a>
                </li>
                <li>
                  <i className="far fa-phone" />{" "}
                  <a href="tel:+593968544194">+593 96 854 4194</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-area rel mt-25 pt-35 pb-25">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-copyright-text wow fadeInUp delay-0-2s">
                <p>
                  Copyright @{new Date().getFullYear()},{" "}
                  <Link href="/">Axios.click</Link> All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-social text-lg-end wow fadeInRight delay-0-2s">
                <div className="social-style-two">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={FACEBOOK_LINK}
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={INSTAGRAM_LINK}
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  {/* Whatsapp */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={WHATSAPP_LINK}
                  >
                    <i className="fab fa-whatsapp" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={LINKEDIN_LINK}
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="far fa-chevron-double-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer6;
