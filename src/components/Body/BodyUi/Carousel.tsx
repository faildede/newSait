// carousel.tsx
'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Carousel = ({
  data,
}: {
  data: {
    image: string
  }[]
}) => {
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const elem = carouselRef.current as HTMLDivElement
    const { width, height } = elem.getBoundingClientRect()
    setCarouselSize({ width, height })

    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1))
    }, 8000) 

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [data.length])

  const handlePrevClick = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrentImg((prev) => (prev === 0 ? data.length - 1 : prev - 1))
    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1))
    }, 5000)
  }

  const handleNextClick = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1))
    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1))
    }, 5000)
  }

  return (
    <div>
      <div className="relative h-60 overflow-hidden rounded-md">
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          className="absolute flex h-full w-full transition-all duration-300"
        >
          {data.map((v, i) => (
            <div key={i} className="relative h-full w-full shrink-0">
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${i}`}
                fill
                src={v.image || 'https://random.imagecdn.app/500/500'}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2"

        >
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 mx-2 bg-white bg-opacity-50 "
        >
      
      <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <div className="mt-3 flex justify-center">
        {data.map((_, i) => (
            <div
            key={i}
            className={`h-1 mx-1 flex-1 ${i === currentImg ? 'animate-slide bg-blue-500' : 'bg-gray-300 w-1/4'}`}
            />
        ))}
        </div>
    </div>
  )
}

export default Carousel
