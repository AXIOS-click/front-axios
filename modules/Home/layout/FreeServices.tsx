import Link from "next/link";

const FreeServices = () => {
  const FREE_SERVICES = [
    "Protección DDoS 24/7",
    "Certificado SSL Gratis",
    "Servidores a nivel mundial",
    "Soporte 24/7",
    "Seguridad de datos",
    "Alta velocidad de carga",
  ];
  return (
    <section className="project-timeline-two-area pt-130 rpt-100 rel z-1">
      <div className="container container-1290">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title mb-70 rmb-30 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Por trabajar con nosotros</span>
              <h2>Servicios Gratuitos</h2>
              <p>¡A todos nos encantan las cosas gratis!</p>
            </div>
          </div>
        </div>
        <div className="row gap-90">
          {FREE_SERVICES.map((service, i) => (
            <div key={`service-${i + 1}`} className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <span className="serial-number">0{i + 1}</span>
                <h4>{service}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeServices;
