import Counter from "../components/Counter";

const MetricsSection = () => {
  return (
    <section className="counter-section-three pt-70 pb-20 mb-130 mrmy-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="counter-item-three counter-text-wrap wow fadeInRight delay-0-2s">
              <i className="flaticon-software-development" />
              <Counter end={4} extraClass={"plus"} />
              <span className="counter-title">Años de Experiencia</span>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="counter-item-three counter-text-wrap wow fadeInRight delay-0-4s">
              <i className="flaticon-development" />
              <Counter end={11} extraClass={"plus"} />
              <span className="counter-title">Projectos Completados</span>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="counter-item-three counter-text-wrap wow fadeInRight delay-0-6s">
              <i className="flaticon-star-symbol" />
              <Counter end={98} extraClass={"percent"} />
              <span className="counter-title">Clientes Satisfechos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
