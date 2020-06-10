import React from 'react'

const defaults = {
    title: 'Protected plant properties.',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quidem. Accusantium fugiat, nesciunt totam officiis.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veniam iure harum alias, laudantium dignissimos, eaque minima magni non quia rerum magnam recusandae quaerat tenetur pariatur atque! Soluta, maxime laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam culpa totam a assumenda fugit aut eos quod vel officia tempore, fugiat, quisquam explicabo blanditiis accusamus quae maiores nemo in reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis quis quaerat itaque ex aspernatur voluptatem pariatur, quam magnam excepturi iusto doloribus molestias vitae provident ipsum minus minima modi corporis.'
};

function SectionContent({ 
    showStamp = true,
    title = defaults.title,
    subtitle = defaults.subtitle,
    content = defaults.content
}) {
  return (
    <div className='section-content'>
      {showStamp && (
        <div className='section-content__stamp-wrapper'>
          <div className='section-content__stamp'>
            <img
              className='section-content__stamp-img'
              src='/global/stamp-black.png'
              alt='Black Stamp'
            />
          </div>
        </div>
      )}
      <div className='section-content__content'>
        <h2 className='heading-2 mb-xl'>{title}</h2>
        <h5 className='heading-5 mb-lg'>
          {subtitle}
        </h5>
        <p className='paragraph'>
          {content}
        </p>
      </div>
    </div>
  );
}

export default SectionContent