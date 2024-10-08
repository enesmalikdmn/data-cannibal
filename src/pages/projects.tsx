import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import ProjectList from "@/components/projects/project-list";
import { Helmet } from "react-helmet";

const Projects = useFramerTransition(
  <>
    <Helmet>
      <title>Projects</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle
        subtitle="Focus on engaging, reusable content that decrease the cost per leads
				while helps you to increase profits DataCannibal. DataCannibal strives to
				deliver the tools and support that helps companies grow with
				unparalleled success."
      >
        Projects
      </SectionPageTitle>
      <section className="border-b py-24">
        <div className="container">
          <ProjectList
            grid="md:grid-cols-2 lg:grid-cols-2 gap-12"
            limit={4}
            showPagination={true}
          />
        </div>
      </section>
    </main>
  </>,
);

export default Projects;
