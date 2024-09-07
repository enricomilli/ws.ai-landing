import Hero from "@/components/landing/hero/Hero";
import type { MetaFunction } from "@remix-run/node";
import HeroProof from "@/components/landing/hero/HeroProof";
import Reviews from "@/components/landing/reviews/ScrollingReviews";
import Features from "@/components/landing/features/Features";
import StepsToDownload from "@/components/landing/installation/StepsToDownload";
import Pricing from "@/components/landing/pricing/Pricing";
import FAQs from "@/components/landing/faqs/FAQs";
import Footer from "@/components/landing/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "WorkSync.AI" },
    { name: "description", content: "Ready to find a job? Meet your AI solution." },
  ];
};

export default function Index() {
  return (
    <div className="w-screen h-screen">
      <LandingPage />
    </div>
  );
}

const LandingPage = () => {
  return (
    <>
      <div className="overflow-hidden mt-20">
        <Hero />
        <HeroProof />
        <Reviews />
        <Features />
        <StepsToDownload />
        <Pricing />
        <FAQs />
      </div>
      <Footer />
    </>
  );
};

{
  /* <div className="overflow-hidden -mt-[96px]">
  <Hero />
  <HeroProof />
  <SpotlightSection />
  <Reviews />
  <Features />
  <HowItWorks />
  <Pricing />
  <FAQs />
</div>
<Footer /> */
}
