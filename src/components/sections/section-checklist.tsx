import CheckLineIcon from "remixicon-react/CheckLineIcon";

const SectionChecklist = () => {
  return (
    <section className="pb-28">
      <div className="container relative z-10 -mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-md bg-white px-6 py-16 text-center shadow-lg dark:bg-slate-800 dark:shadow-slate-850/20 sm:px-12">
            <h3 className="mb-6">
            Why Choose Us?
            </h3>
            <div className="flex flex-wrap text-left md:flex-nowrap md:space-x-10">
              <div className="w-full  md:w-1/2">
                <div className="mb-1 h-28 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                  Expertise: With years of experience in web scraping and data automation, our team brings unparalleled knowledge to the table.
                  </span>
                </div>
                <div className="mb-1 h-28 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                  Customization: We offer flexible solutions tailored to your business needs, ensuring that you get exactly what you require from your data.
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="mb-1 h-28 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                  Reliability: Our robust data scraping tools are built to handle large volumes of data with precision and accuracy.
                  </span>
                </div>
                <div className="mb-1 h-28 flex">
                  <CheckLineIcon
                    size={20}
                    className="mr-1 mt-0.5 shrink-0 fill-green"
                  />
                  <span className="text-md text-foreground dark:text-slate-400">
                  Support: We are here to support you every step of the way, from initial setup to ongoing maintenance and troubleshooting.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionChecklist;
