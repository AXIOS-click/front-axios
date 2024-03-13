import PreLoader from "@/src/components/layout/PreLoader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["cyrillic"],
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--Inter-next-font",
});

export default function App({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />

        {/* <!-- Sitemap --> */}
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="./sitemap.xml"
        />
        {/* <!-- metas --> */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!-- h --> */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="all" />
        <meta name="googlebot-news" content="all" />
        {/* <!-- icons --></meta> */}

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="img/ICNS/icos/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="img/ICNS/icos/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="img/ICNS/icos/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="img/ICNS/icos/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="img/ICNS/icos/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="img/ICNS/icos/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="img/ICNS/icos/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="img/ICNS/icos/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="img/ICNS/icos/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="img/ICNS/icos/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="img/ICNS/icos/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="img/ICNS/icos/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="img/ICNS/icos/favicon-16x16.png"
        />
        <link rel="manifest" href="img/ICNS/icos/manifest.json" />
        <meta name="msapplication-TileColor" content="#0d0d0d" />
        {/* <!-- end icons --> */}
        <meta
          name="msapplication-TileImage"
          content="img/ICNS/icos/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#0d0d0d" />
        {/* <!-- SEO --> */}
        {/*<!-- Google / Search Engine Tags --> */}
        <title>AXIOS Click | Venta de plantillas web</title>
        <meta
          name="description"
          content="Mejora tu presencia en internet hoy mismo con nuestras plantillas web. Transforma internet en una herramienta de venta efectiva. ¡Te esperamos!"
        />
        <meta itemProp="name" content="AXIOS Click | Venta de plantillas web" />
        <meta
          itemProp="description"
          content="Mejora tu presencia en internet hoy mismo con nuestras plantillas web. Transforma internet en una herramienta de venta efectiva. ¡Te esperamos!"
        />
        <meta
          itemProp="image"
          content="http://axios.click/assets/img/IMG/axiosclick.jpg"
        />
        <meta
          name="keywords"
          content="Desarrollo web, plantillas web, servicio 24/7"
        />
        <meta
          name="new_keywords"
          content="Desarrollo web, plantillas web, servicio 24/7"
        />
        <meta
          name="keywords"
          content="Desarrollo web, plantillas web, servicio 24/7"
        />
        <meta
          name="description"
          content="Mejora tu presencia en internet hoy mismo con nuestras plantillas web. Transforma internet en una herramienta de venta efectiva. ¡Te esperamos!"
        />
        <meta name="author" content="administrator@axios.click" />
        <link rel="canonical" href="https://axios.click/" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://axios.click/" />
        <meta
          property="og:title"
          content="AXIOS Click | Venta de plantillas web"
        />
        <meta
          property="og:description"
          content="Mejora tu presencia en internet hoy mismo con nuestras plantillas web. Transforma internet en una herramienta de venta efectiva. ¡Te esperamos!"
        />
        <meta
          property="og:image"
          content="https://axios.click/assets/img/IM/axiosclick.jpg"
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="200" />
        <meta
          name="facebook-domain-verification"
          content="70ukyjggn4mj2eruc9qdhkn395m9gu"
        />
        <meta property="fb:app_id" content="1039480973635975" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://axios.click/" />
        <meta
          property="twitter:title"
          content="AXIOS Click | Venta de plantillas web"
        />
        <meta
          property="twitter:description"
          content="Mejora tu presencia en internet hoy mismo con nuestras plantillas web. Transforma internet en una herramienta de venta efectiva. ¡Te esperamos!"
        />
        <meta
          property="twitter:image"
          content="https://axios.click/assets/img/IM/axiosclick.jpg"
        />
        {/* <!-- Tag Manager --> */}
        <meta
          name="google-site-verification"
          content="XFIv75t0o9MHbsmRLPOj9o9Bml6zC_fR4eDHNfwCg6s"
        />
        <GoogleAnalytics gaId="G-ZFMW1FE4TK" />
      </Head>
      <div className={inter.className}>
        {!loaded && <PreLoader />}
        {loaded && <Component {...pageProps} />}
      </div>
    </Fragment>
  );
}
