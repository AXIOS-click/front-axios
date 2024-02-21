import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import { IFrontMatterProduct } from "@/src/types/prooducts";

const contentDirectory = path.join(process.cwd(), "content");

export default function ProductPost({ product }: Readonly<{ product: IFrontMatterProduct }>) {
  return (
    <>
      <Head>
        <title>{product.frontmatter.title}</title>
      </Head>
      <div>
        <h1>{product.frontmatter.title}</h1>
        <p>By {product.frontmatter.author}</p>
        <ReactMarkdown>{product.content}</ReactMarkdown>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(contentDirectory);

  const paths = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: Readonly<{ params: IFrontMatterProduct }>) {
  const fullPath = path.join(contentDirectory, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    props: {
      product: {
        slug: params.slug,
        frontmatter: data,
        content,
      },
    },
  };
}
