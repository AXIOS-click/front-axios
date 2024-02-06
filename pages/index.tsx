import Layout from "@/src/components/layout/Layout";
import AdvertiseSection from "@/src/layout/AdvertiseSection";
import HeroSection from "@/src/layout/HeroSection";
import MetricsSection from "@/src/layout/MetricsSection";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={`}`}>
      <Layout footer={5} header={5} dark>
        <HeroSection />
        <MetricsSection />
        <AdvertiseSection />
      </Layout>
    </main>
  );
}
