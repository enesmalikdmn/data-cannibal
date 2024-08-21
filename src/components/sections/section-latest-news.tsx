import { motion } from "framer-motion";
import PostList from "@/components/posts/post-list";
import SectionTitle from "./section-title";

const SectionLatestNews = () => {
  return (
    <section className="bg-muted py-16 dark:bg-slate-900 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
          }}
        >
          <SectionTitle
            subtitle="Stay informed with the latest features and innovations from DataCannibal. Discover how our cutting-edge tools and services are transforming the way businesses handle invoices and data, ensuring a seamless and efficient process every step of the way."
            sectionClasses="mx-auto max-w-xl text-center mb-12"
            titleClasses="mb-3 text-center"
            subtitleClasses="text-md font-medium"
          >
            Latest Updates on Automated Invoice Management
          </SectionTitle>
          <PostList limit={3} showPagination={false} />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionLatestNews;
