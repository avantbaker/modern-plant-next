const TeamCard = ({ imageSrc = '', name = '', title = '', info = '' }) => {
  return (
    <div className='about-team__card team-card scrollable-cards__card'>
      <div className='team-card__left'>
        <div className='team-card__image-wrapper' style={{ backgroundImage: `url(${imageSrc})` }} />
      </div>
      <div className='team-card__right'>
        <div className='heading-5 mb-sm'>{name}</div>
        <div className='heading-6 mb-md'>{title}</div>
        <div className='paragraph--small'>{info}</div>
      </div>
    </div>
  );
};


export default TeamCard;