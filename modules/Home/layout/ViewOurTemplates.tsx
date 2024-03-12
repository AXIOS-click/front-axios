import Link from "next/link";

export const ViewOurTemplates = () => {
  return (
    <section className="work-with-area pt-70 rpt-40 rel z-1">
      <div className="container">
        <div className="row justify-content-center pb-45 rpb-25">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title style-two text-center mb-25 wow fadeInUp delay-0-2s">
              <h2>
                Visisita nuestros catalogo de <i>plantillas</i>
              </h2>
              <Link legacyBehavior href="/products">
                <a className="theme-btn style-two mt-35">
                  Ir al catalogo <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
