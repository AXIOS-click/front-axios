import { IFrontMatterProduct } from "@/src/types/prooducts";
import { useState } from "react";

export const useFilterProducts = (
  products: IFrontMatterProduct[]
) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };
  const filteredProducts = products.filter((product) =>
    selectedCategory === "all"
      ? true
      : product.frontmatter.category.includes(selectedCategory as any)
  );

  const allProducts = products.length;
  const filteredProductsCount = filteredProducts.length;

  return {
    handleCategoryChange,
    filteredProducts,
    allProducts,
    filteredProductsCount,
    selectedCategory
  };
};
