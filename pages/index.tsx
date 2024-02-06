import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/src/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`}`}>
      <Layout footer={5} header={5} dark>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="">
            <h1 style={{
              visibility: "hidden",
            }}>Home</h1>
          </div>
        ))}
      </Layout>
    </main>
  );
}
