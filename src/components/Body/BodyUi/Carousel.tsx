'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })]);

  return (
    <>
      <div className='embla mx-auto mt-12 h-96 border' ref={emblaRef}>
        <div className='embla__container'>
          <div className='embla__slide'>
            <img
              src="/CaruselImage/firstImage.png"
              alt="text"
              className="embla__slide__img"
            />
          </div>
          <div className='embla__slide bg-blue-300 flex items-center justify-center'>
            Slide 2
          </div>
          <div className='embla__slide bg-blue-400 flex items-center justify-center'>
            Slide 3
          </div>
        </div>
      </div>
      <style jsx>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
          height: 100%;
          will-change: transform;
        }
        .embla__slide {
          position: relative;
          min-width: 100%;
          height: 100%;
        }
        .embla__slide__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
}

export default Carousel;