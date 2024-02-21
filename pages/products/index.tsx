"use client";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IFrontMatterProduct } from "@/src/types/prooducts";
import Layout from "@/src/components/layout/Layout";
import PageBanner from "@/modules/Products/layout/PageBanner";
import ProductGrid from "@/modules/Products/layout/ProductGrid";

const contentDirectory = path.join(process.cwd(), "content");

export default function Products({
  products,
}: Readonly<{ products: IFrontMatterProduct[] }>) {
  return (
    <Layout footer={5} header={5} dark>
        <PageBanner pageName={"Productos"} />
        <ProductGrid products={products} />
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(contentDirectory);

  const products = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const fullPath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
    };
  });

  return {
    props: {
      products,
    },
  };
}
