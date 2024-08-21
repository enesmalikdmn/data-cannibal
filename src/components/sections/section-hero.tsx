import HeroTriangle from "@/components/hero-triangle";
import NewsletterForm from "@/components/forms/newsletter-form";

const SectionHero = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroTriangle />
      <section className="pb-16 pt-32 md:pt-40 lg:pb-40 lg:pt-60">
        <div className="container max-w-6xl">
          <div className="flex">
            <div className="lg:w-[45%]">
              <h1 className="text-headings max-w-md text-3xl lg:text-4xl">
              Unlock Powerful Insights with DataCannibal
              </h1>
              <p className="mb-12 text-lg">
              Focus on gathering actionable data rather than getting lost in the details. DataCannibal's advanced web scraping tools help you automate invoice collection from multiple marketplaces, giving you more time to focus on what matters.
              </p>
            </div>
          </div>

          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};

export default SectionHero;
