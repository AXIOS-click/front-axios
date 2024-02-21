import Layout from "@/src/components/layout/Layout";
import AdvertiseSection from "@/modules/Home/layout/AdvertiseSection";
import CTAsection from "@/modules/Home/layout/CTAsection";
import FreeServices from "@/modules/Home/layout/FreeServices";
import HeadlineSection from "@/modules/Home/layout/HeadlineSection";
import HeroSection from "@/modules/Home/layout/HeroSection";
import MetricsSection from "@/modules/Home/layout/MetricsSection";
import PricingSection from "@/modules/Home/layout/PricingSection";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={``}>
      <Layout footer={5} header={5} dark>
        <HeroSection />
        <MetricsSection />
        <AdvertiseSection />
        <HeadlineSection />
        <PricingSection />
        <FreeServices />
        <CTAsection />
      </Layout>
    </main>
  );
}
