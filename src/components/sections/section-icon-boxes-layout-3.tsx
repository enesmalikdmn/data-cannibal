import { motion } from "framer-motion";
import IconBox from "@/components/icon-box";
import SectionTitle from "./section-title";

export const iconBoxes = [
  {
    icon: "icons/deadline-5926_5778aee2-b372-4b21-94a1-c9fc06ac464c.svg",
    title: "Instant Data Retrieval",
    description:
      "Streamline your financial operations with DataCannibal’s cutting-edge web scraping technology. Our system rapidly aggregates invoices from various platforms, ensuring that your financial records are accurate and current, eliminating the need for manual input.",
  },
  {
    icon: "icons/medal-3141_6860a6ec-597a-49e1-a5d2-dd4b070acef3.svg",
    title: "Industry-Leading Expertise",
    description:
      "DataCannibal is recognized for its excellence in web scraping and data management. Trusted by top-tier companies, our solutions are designed to optimize your invoice collection processes, offering reliability and precision that drive your business forward.",
  },
  {
    icon: "icons/medical-research-6506_05214fe4-cb2e-4171-ac03-72168bf2981b.svg",
    title: "Comprehensive Market Research",
    description:
      "Stay ahead of the competition with DataCannibal’s detailed market insights. Our automated scraping tools provide you with real-time data analysis, helping you understand market trends and make informed decisions.",
  },
  {
    icon: "icons/customer-support-4912_a5517329-a472-47b5-8155-d507da181405.svg",
    title: "Around-the-Clock Support",
    description:
      "DataCannibal’s customer support is available 24/7 to assist with all your needs. From setup to troubleshooting, our expert team is here to ensure your experience with our platform is smooth and hassle-free.",
  },
  {
    icon: "icons/pay-2643_cf4ecaa0-bcfb-4c2b-91e1-7353cb0dccdd.svg",
    title: "Risk-Free Service",
    description:
      "We stand behind our services with a satisfaction guarantee. If you’re not completely satisfied with DataCannibal, we offer a risk-free refund, prioritizing your satisfaction and success.",
  },
  {
    icon: "icons/handshake-3124_670c4553-214a-4d06-830f-4d0855736c60.svg",
    title: "Long-Term Partnerships",
    description:
      "Our commitment to excellence has forged strong relationships with our clients. At DataCannibal, we aim to be more than just a service provider; we strive to be a trusted partner in your business’s growth and success.",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SectionIconBoxesLayout3 = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="pb-10 pt-16 lg:pb-20 lg:pt-24">
      <div className="container">
        {!noTitle && (
          <SectionTitle
            subtitle="We offer a variety of services here to get you started and successfully suite every need using DataCannibal."
            sectionClasses="mx-auto max-w-xl text-center mb-12"
            titleClasses="mb-3 text-center"
            subtitleClasses="text-md font-medium"
          >
            Top 6 reasons why we are the best
          </SectionTitle>
        )}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBox
                  iconBox={iconBox}
                  className="py-7 text-center shadow-none before:hidden"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxesLayout3;
