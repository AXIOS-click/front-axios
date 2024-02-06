export interface Features {
  feature: string;
  included?: boolean;
}
export interface Pricing {
  title: string;
  price: number;
  description: string;
  save?: number;
  recommended?: boolean;
  features: Features[];
}
export const WEB_DEV_PRICING: Pricing[] = [
  {
    title: "Paquete Emprendedor",
    price: 100,
    save: 20,
    description: "",
    features: [
      {
        feature: "1 Página Web con máximo 7 secciones",
      },
      {
        feature: "1 mes Alojamiento Hosting gratuito",
      },
      {
        feature: "1 mes de soporte gratuito",
      },
      {
        feature: "500mb de almacenamiento",
      },
      {
        feature: "Email Corporativo",
        included: false,
      },
      {
        feature: "Dominio",
        included: false,
      },
    ],
  },
  {
    title: "Paquete Profesional",
    price: 130,
    save: 10,
    description: "",
    features: [
      {
        feature: "2 Páginas Web con máximo 8 secciones",
      },
      {
        feature: "1 mes Alojamiento Hosting gratuito",
      },
      {
        feature: "1 mes de soporte gratuito",
      },
      {
        feature: "1gb de almacenamiento",
      },
      {
        feature: "Email Corporativo",
      },
      {
        feature: "Dominio",
        included: true,
      },
    ],
  },
  {
    title: "Paquete Premium",
    price: 180,
    save: 15,
    description: "",
    features: [
      {
        feature: "3 Páginas Web con máximo 8 secciones",
      },
      {
        feature: "2 meses Alojamiento Hosting gratuito",
      },
      {
        feature: "2 meses de soporte gratuito",
      },
      {
        feature: "1.5gb de almacenamiento",
      },
      {
        feature: "Email Corporativo",
      },
      {
        feature: "Dominio",
      },
    ],
  },
];
