const BottleImages = () => {
  return (
    <div className='bottle-images'>
      <div className='bottle-images__image-wrapper bottle-images__image-wrapper--top-right'>
        <img src={require('../public/images/global/modern-bottle-white.png?webp')} alt='' className='responsive-img' />
      </div>
      <div className='bottle-images__image-wrapper bottle-images__image-wrapper--bottom-left'>
        <img src={require('../public/images/global/modern-bottle-white.png?webp')} alt='' className='responsive-img' />
      </div>
    </div>
  );
};

export default BottleImages;
