export type TCategories = "web" | "mobile" | "design" | "marketing" | "seo" | "wordpress" | "ecommerce";

export interface IProduct {
    title: string;
    date: string;
    author: string;
    image: string;
    images: string[];
    price: number;
    category: TCategories[];
}

export interface IFrontMatterProduct {
    frontmatter: IProduct;
    slug: string;
    content: string;
}