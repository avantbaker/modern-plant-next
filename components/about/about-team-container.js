import TeamCard from '@components/team-card';

const teamMembers = [
	{
		imageSrc: '/images/teams/karl.png',
		name: 'Karl Cahill',
		title: 'CEO, San Diego, CA',
		info: `8+ years of experience in private equity
    with a unique focus on
    emerging
    biotechnology ventures.
    • Proven experience working in investor
    relations and business development
    for
    Raptor Pharmaceuticals and Inovio
    Pharmaceuticals
    • Intimate understanding of how
    biotechnology can create an
    incredible
    number of new products and propel
    biology beyond traditional
    markets in
    healthcare
    • Work experience across Asia, and
    relationships with leaders in biotech
    and
    gene
    tics
    • BA, Finance, University of Westminster`,
	},
	{
		imageSrc: `/images/teams/shireen.jpeg`,
		name: `Shireen Thor`,
		title: `COO, San Diego, CA`,
		info: `Award
    -
    winning founder of a startup
    ecommerce functional fashion
    company
    recognized by Entrepreneur Magazine as
    one of 2017 America’s
    Top
    Entrepreneurial Companies
    •
    15
    -
    year career as a design engineer and
    product marketer and Big 3
    business
    consultant
    • Experience running $25M+ P&Ls and with
    Accenture and CareFusion
    • Awards include:
    • Gold Stevie Award for Start
    -
    up of the Year
    • Gold Stevie for Female Entrepren
    eur of the Year
    • Red Herring North America Top 100
    • Red Herring Global Top 100
    • BSE, Industrial Engineering, University of
    Michigan`,
	},
	{
		imageSrc: `/images/teams/min.jpg`,
		name: `Dr. Min Lee`,
		title: `Scientific Advisor, San Diego, CA`,
		info: `Founder & chairman of Diagnomics Inc, in
    San Diego,
    California
    • CEO of Eone Diagnomics Genome Center
    (KOSDAQ; EDGC) in Incheon South
    Korea
    • Visiting professor of Institute of
    Convergence Science & Technology
    in
    Incheon National University
    • Director of ShareGenome, which focuses
    on precision medicine
    and
    scientific
    discoveries from genomics and health data
    • World renowned scholar, researcher and
    entrepreneur in Genomics
    • Postdoc at the Genomics and Proteomics
    Center at Harvard Medical School and
    Beth Israel Deaconess Medical Center
    • Ph.D.,
    Biological Science, City of Hope National Medical Center`,
	},
	{
		imageSrc: `/images/team/jeff.jpg`,
		name: `Jeff Christiansen`,
		title: `CSO, New York City, NY`,
		info: `Managing Director of ValCap Global
    Advisory, a strategy and
    investment banking boutique
    • Background in project management, deal
    st
    ructuring, negotiation strategy,
    private
    equity, corporate growth strategy
    • Previously with Bain & Company, Moody’s
    Investors Service, AfricInvest
    Capital
    Partners, US State Department
    • 10+ years of experience across Central
    Asia, Africa, Middle East,
    and South
    East
    Asia
    • MS, Georgetown University
    and BA, Washington University in St. Louis`,
	},
	{
		imageSrc: `/images/teams/michelle.png`,
		name: `Michelle Lee`,
		title: `Strategy Associate, San Diego, CA`,
		info: `Social media influencer with a heavy
    science background
    • Top 10 Fastest Growing Instagram
    Accounts of 2019
    • Author on the Transgenerational Effects
    of Obesogens
    • DNA App Developer
    • Lab manager and research student at
    Blumberg Lab in UCI
    •
    VP of Genetic Counseling SIG at UCI
    • Internship at UCI Pediatrics' Division
    of Genetic and Genomic
    Medicine
    • Project Man
    ager at Diagnomics (overseeing launching of Covid
    -
    19
    testing)
    •
    BA, University of California Irvine`,
	},
];

const AboutTeamContainer = () => {
	return (
		<div className="about-team">
			<div className="container _80">
				<h3 className="about-team__title heading-3 mb-xxl">Our Team</h3>
			</div>
			<div className="about-team__cards scrollable-cards">
				{teamMembers.map((member, i) => (
					<TeamCard key={i} {...member} />
				))}
			</div>
		</div>
	);
};

export default AboutTeamContainer;
