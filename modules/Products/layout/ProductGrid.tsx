"use client";
import { IFrontMatterProduct } from "@/src/types/prooducts";
import ProductGridItem from "../components/ProductGridItem";
import { useState } from "react";
import { useFilterProducts } from "../hook/useFilterProducts";

const ProductGrid = ({
  products,
}: Readonly<{ products: IFrontMatterProduct[] }>) => {
  const {
    filteredProducts,
    handleCategoryChange,
    selectedCategory,
    filteredProductsCount,
    allProducts
  } = useFilterProducts(products);

  return (
    <section className="product-area py-130 rpy-100 rel z-1">
      <div className="container container-1290">
        <div className="shop-shorter rel z-3 mb-40 wow fadeInUp delay-0-2s">
          <div className="sort-text mb-20">
            Mostrando {filteredProductsCount} de {allProducts} productos
          </div>
          <div className="products-dropdown mb-20">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="all">All Categories</option>
              <option value="web">Web</option>
              <option value="mobile">Mobile</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="seo">SEO</option>
              <option value="wordpress">WordPress</option>
              <option value="ecommerce">E-commerce</option>
            </select>
          </div>
        </div>
        <div className="row">
          {filteredProducts.map((product) => (
            <ProductGridItem product={product} key={product.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
