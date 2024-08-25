'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({
  data,
}: {
  data: {
    image: string
  }[]
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [data.length]);

  const handleDotClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentImg(index);
    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const handlePrevClick = () => {
    handleDotClick(currentImg === 0 ? data.length - 1 : currentImg - 1);
  };

  const handleNextClick = () => {
    handleDotClick(currentImg === data.length - 1 ? 0 : currentImg + 1);
  };

  return (
    <div>
      <div className="relative h-64 md:h-96 lg:h-128 overflow-hidden rounded-md">
        <div
          ref={carouselRef}
          style={{
            transform: `translateX(-${currentImg * 100}%)`,
          }}
          className="absolute flex h-full w-full transition-transform duration-500"
        >
          {data.map((v, i) => (
            <div key={i} className="relative h-full w-full shrink-0 bg-cover bg-center">
              <Image
                className="pointer-events-none custom-image object-cover"
                alt={`carousel-image-${i}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                src={v.image || 'https://random.imagecdn.app/500/500'}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 mx-2 bg-gray-200 transition duration-400 hover:bg-white bg-opacity-50 p-2"
        >
          <FontAwesomeIcon className=' text-gray-300 hover:text-black-1' icon={faArrowLeft} />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 mx-2 bg-gray-200 transition duration-400 hover:bg-white bg-opacity-50 p-2 "
        >
          <FontAwesomeIcon className='text-gray-300 hover:text-black-1' icon={faArrowRight} />
        </button>
      </div>

      <div className="mt-3 flex justify-center">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-1 mx-1 cursor-pointer ${i === currentImg ? 'bg-black-1' : 'bg-gray-300'} w-4 sm:w-6 md:w-8`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;