import { IFrontMatterProduct } from "@/src/types/prooducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductGridItem = ({ product }: { product: IFrontMatterProduct }) => {
  const { image, title, category } = product.frontmatter;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="product-item wow fadeInUp delay-0-2s">
        <div className="image">
          <Image
            src={`/${image}`}
            alt={`${title} | Axios Click Product`}
            width={1000}
            height={400}
            loading="lazy"
          />
        </div>
        <div className="content">
          <p className="category">
            {category.map((cat, index) => <span key={`${index + 1}`}>{cat}</span>)}
          </p>
          <h5>
            <p>{title}</p>
          </h5>
          <div className="ratting-price">
            <div className="ratting">
              <span className="price">$593</span>
            </div>
          </div>
          <a href="#" className="theme-btn style-two">
            Mas Detalles<i className="far fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
