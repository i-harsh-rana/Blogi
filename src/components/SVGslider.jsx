import React, { useEffect, useState } from 'react'

import image1 from '../../public/1.svg'
import image2 from '../../public/2.svg'
import image3 from '../../public/3.svg'
import image4 from '../../public/4.svg'
import image5 from '../../public/5.svg'
import image6 from '../../public/6.svg'
import image7 from '../../public/7.svg'

const images = [image1, image2, image3, image4, image5, image6, image7]

function SVGslider() {
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((pevIndex)=>(pevIndex+1)%images.length)
        }, 2000)

        return () => clearInterval(interval);
    }, [])


  return (
    <div className="left-28 top-18 mt-44 mb-40 relative w-[675px] h-[500px] overflow-hidden flex justify-center align-middle">
    <div
      className="flex transition-transform duration-2000 ease-in-out"
      style={{
        transform: `translateX(-${index * 100}%)`,
        width: `${images.length * 100}%`,
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="w-[100%] flex-shrink-0"
          style={{ width: '100%' }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-200px h-200px object-cover"
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default SVGslider