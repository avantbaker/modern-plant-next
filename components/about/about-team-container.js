import TeamCard from '@components/team-card';

const teamMembers = [
  {
    imageSrc: '/images/global/apothecary.png',
    name: 'John Smith',
    title: 'Lead Geneticist',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut nisi quia inventore dolorem eos, dolores, adipisci voluptatum eligendi, quam praesentium. Nemo laboriosam ratione commodi asperiores ab necessitatibus, veritatis error.'
  },
  {
    imageSrc: '/images/global/apothecary.png',
    name: 'John Smith',
    title: 'Lead Geneticist',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut nisi quia inventore dolorem eos, dolores, adipisci voluptatum eligendi, quam praesentium. Nemo laboriosam ratione commodi asperiores ab necessitatibus, veritatis error.'
  },
  {
    imageSrc: '/images/global/apothecary.png',
    name: 'John Smith',
    title: 'Lead Geneticist',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut nisi quia inventore dolorem eos, dolores, adipisci voluptatum eligendi, quam praesentium. Nemo laboriosam ratione commodi asperiores ab necessitatibus, veritatis error.'
  },
  {
    imageSrc: '/images/global/apothecary.png',
    name: 'John Smith',
    title: 'Lead Geneticist',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut nisi quia inventore dolorem eos, dolores, adipisci voluptatum eligendi, quam praesentium. Nemo laboriosam ratione commodi asperiores ab necessitatibus, veritatis error.'
  },
]

const AboutTeamContainer = () => {
  return (
    <div className='about-team'>
      <div className="container _80">
        <h3 className='about-team__title heading-3 mb-xxl'>Our Team</h3>
      </div>
      <div className='about-team__cards scrollable-cards'>
        { teamMembers.map((member, i) => <TeamCard key={i} {...member} />)}
      </div>
    </div>
  );
};

export default AboutTeamContainer;
