import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const SectionPromoVideo = () => {
  return (
    <section className="bg-muted py-16 dark:bg-slate-900 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap justify-between lg:flex-nowrap lg:space-x-10">
          <div className="mb-10 w-full lg:w-[45%]">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/gNAE8g2tytA?showinfo=0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </AspectRatio>
          </div>

          <div className="w-full lg:w-[45%]">
            <h2>
            The Right Tools for Seamless Invoice Collection
            </h2>
            <p className="mb-10 text-lg">
            DataCannibal equips your business with advanced web scraping technology designed to automate and streamline invoice collection from multiple sources. Whether you're dealing with numerous marketplaces or online portals, our solutions ensure that you capture every detail efficiently, transforming tedious manual processes into smooth, automatic workflows. Focus on what truly matters—growing your business—while we handle the complexities of data extraction and integration.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get Started
                <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPromoVideo;
