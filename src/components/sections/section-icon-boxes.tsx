import { motion } from "framer-motion";
import IconBox from "@/components/icon-box";

export const iconBoxes = [
  {
    icon: "icons/medical-research-6506_05214fe4-cb2e-4171-ac03-72168bf2981b.svg",
    title: "Analytics and Research",
    description:
      "Optimize and streamline your financial data management with our automated web scraping solutions. DataCannibal effortlessly collects invoices from multiple sources, ensuring your financial records are accurate and up-to-date without manual intervention.",
  },
  {
    icon: "icons/edit-document-4191_913956ad-aac3-4d29-b4ef-061756334d24.svg",
    title: "Copywriting",
    description:
      "Leverage the power of precise, automated data extraction. Our technology seamlessly integrates with your existing systems, pulling invoices from various market portals, reducing manual effort, and minimizing errors.",
  },
  {
    icon: "icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "Sales growth",
    description:
      "Our automated web scraping technology not only collects and organizes your invoices but also identifies key insights to drive your business growth. By analyzing market trends and purchasing behaviors, DataCannibal helps you make data-driven decisions that lead to increased revenue and sales opportunities.",
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

const SectionIconBoxes = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {!noTitle && (
          <div className="flex justify-center">
            <div className="text-center lg:w-3/5">
              <h2 className="mb-12">
                Do you want to{" "}
                <span className="text-primary">automate your invoice</span> to
                collection process? We know the solution.
              </h2>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={iconBox.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBox iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxes;
