import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionIconBoxes from "@/components/sections/section-icon-boxes";
import SectionCTALayout4 from "@/components/sections/section-cta-layout-4";
import SectionPromoVideo from "@/components/sections/section-promo-video";
import SectionIconBoxesLayout3 from "@/components/sections/section-icon-boxes-layout-3";
import { Helmet } from "react-helmet";

const Services = useFramerTransition(
  <>
    <Helmet>
      <title>Services</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle subtitle="At DataCannibal, we specialize in advanced web scraping and automated invoice collection solutions. Our technology seamlessly gathers data from diverse online sources, ensuring that your business has access to accurate, up-to-date information with minimal effort. Whether it's extracting critical market data or automating invoice processing, DataCannibal delivers reliable and efficient services tailored to your unique needs.">
        Services
      </SectionPageTitle>
      <SectionIconBoxes noTitle />
      <SectionPromoVideo />
      <SectionIconBoxesLayout3 />
      <SectionCTALayout4 />
    </main>
  </>,
);

export default Services;
