import GalleryControls from './gallery-controls';

const FluidGallerySection = () => {
  return (
    <div className="fluid-gallery-section container-fluid p-0">
      <div className="fluid-gallery-section__wrapper">
        <div className="fluid-gallery-section__slides container-fluid">
          <div className="fluid-gallery-section__slide">
            <img className="fluid-gallery-section__img img-responsive" src="/images/home/aesterbay.png?webp" alt="aesterbay"/>
          </div>
        </div>
      </div>
      <div className="fluid-gallery-section__controls-container">
        <GalleryControls className="fluid-gallery-section__controls" />
      </div>
    </div>
  )
}

export default FluidGallerySection