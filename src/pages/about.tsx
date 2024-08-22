import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionChecklist from "@/components/sections/section-checklist";
import SectionStats from "@/components/sections/section-stats";
// import SectionTeam from "@/components/sections/section-team";
import SectionCTALayout4 from "@/components/sections/section-cta-layout-4";
import {Helmet} from "react-helmet"

const About = useFramerTransition(
	<>
		<Helmet>
			<title>About</title>
		</Helmet>
		<main className="relative">
			<SectionPageTitle
				subtitle="At DataCannibal, we are pioneers in the field of web scraping and data automation. Our mission is to empower businesses with seamless, automated access to the data they need, when they need it. Founded on the principles of innovation and efficiency, we specialize in extracting, transforming, and loading data from diverse sources, allowing our clients to focus on what they do best—growing their business."
			>
				About DataCannibal
			</SectionPageTitle>
			<SectionChecklist />
			<SectionStats />
			{/* <SectionTeam /> */}
			<SectionPageTitle
				subtitle="We are committed to making data collection effortless for our clients. Whether you're looking to streamline your invoicing process, track market trends, or gather insights from various online platforms, DataCannibal provides the tools and expertise to turn data into actionable insights. Our goal is to minimize the complexity of data scraping while maximizing its value to your operations."
			>
				Our Mission
			</SectionPageTitle>
			<SectionCTALayout4 />
		</main>
	</>
)

export default About