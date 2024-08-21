import PromoTriangle from "@/components/promo-triangle";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const SectionPromo = () => {
  return (
    <section className="relative pb-28 pt-10 lg:pb-64 lg:pt-24">
      <PromoTriangle />
      <div className="container">
        <div className="lg:ml-auto lg:w-[45%]">
          <h2 className="max-w-2xl">
            Ensure Compliance and Save Time
          </h2>
          <p className="mb-10 text-lg">
          Compliance and accuracy are crucial for any business dealing with large volumes of invoices. DataCannibal not only automates the collection process but also ensures all data is collected in accordance with industry regulations. Save time and reduce the risk of non-compliance with our tailored web scraping solutions.
          </p>
          <Button>
            Get Started
            <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionPromo;
