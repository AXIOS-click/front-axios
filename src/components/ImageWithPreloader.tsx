import Image from "next/image";
import React, { useState } from "react";

export const ImageWithPreloader = ({
  src,
  alt,
  preloader,
}: {
  src: string;
  alt: string;
  preloader?: React.ReactNode;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div
        className="skeleton-image"
          style={{
            width: "100%",
            height: "auto",
            padding: "20% 0",
            borderRadius: "10px",
            display: loaded ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {preloader ?? <p style={{
            opacity: 0,
          }}>...cargando</p>}
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ display: loaded ? "" : "none", width: "100%", height: "auto" }}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
};
