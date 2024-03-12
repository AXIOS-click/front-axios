import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Nav, Tab } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import { IFrontMatterProduct } from "@/src/types/prooducts";
import Link from "next/link";
import Layout from "@/src/components/layout/Layout";
import PageBanner from "@/modules/Products/layout/PageBanner";
import { createWhatsAppLink } from "@/modules/Products/hook/useCreateWhatsAppLink";
import Image from "next/image";
import { ImageWithPreloader } from "@/src/components/ImageWithPreloader";

const contentDirectory = path.join(process.cwd(), "content");

export default function ProductPost({
  product,
}: Readonly<{ product: IFrontMatterProduct }>) {
  return (
    <>
      <Head>
        <title>{product.frontmatter.title}</title>
        <meta
          itemProp="image"
          content={`http://axios.click/${product.frontmatter.image}`}
        />
      </Head>
      <main>
        <Layout dark>
          {/* Page Banner Start */}
          <PageBanner pageName={product.frontmatter.title} />
          {/* Page Banner End */}
          {/* Product Details Start */}
          <section className="product-details pt-130 rpt-100">
            <div className="container container-1290">
              <div className="row align-items-center gap-70">
                <div className="col-lg-6">
                  <Tab.Container defaultActiveKey={"preview1"}>
                    <div className="product-details-images rmb-55 wow fadeInLeft delay-0-2s">
                      <Tab.Content className="tab-content preview-images">
                        <Tab.Pane
                          className="tab-pane fade preview-item"
                          eventKey="preview1"
                        >
                          <ImageWithPreloader
                            src={`/${product.frontmatter.image}`}
                            alt={product.frontmatter.title + " | AXIOS CLICK PRODUCT"}
                          />
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </div>
                <div className="col-lg-6">
                  <div className="product-details-content wow fadeInRight delay-0-2s">
                    <div className="section-title">
                      <h2>{product.frontmatter.title}</h2>
                    </div>
                    <div className="ratting-price mb-30">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <form action="#" className="add-to-cart pt-35">
                      <button
                        type="submit"
                        className="theme-btn style-two"
                        onClick={(e) =>
                          createWhatsAppLink(product.frontmatter.title, e)
                        }
                      >
                        Start Cotization <i className="far fa-arrow-right" />
                      </button>
                      <Link
                        type="submit"
                        className="theme-btn style-one"
                        href={`/${product.frontmatter.images[0]}`}
                      >
                        View Full Page <i className="far fa-arrow-right" />
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </main>
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
