import React from 'react'
import Marquee from 'react-fast-marquee'

const Carosel = () => {
  const images = [
    '/2025/wideimg.jpg',
    '/2025/winners.jpg',
    '/2025/wideimg2.jpg',
    '/2025/judging2.jpg',
    '/2025/workingpic1.jpg',
    '/2025/workingpic2.jpg',
    '/2025/workingpic3.jpg',
    '/2025/workingpic4.jpg',
    '/2025/workingpic5.jpg',
  ]

  return (
    <div className="group">
      <Marquee
        className="max-h-[600px] py-3"
        speed={200}
        pauseOnHover={true}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="group/item px-2 lg:px-4"
          >
            <img
              src={image}
              alt="UHS Hacks event"
              className="
                lg:h-[500px] md:h-96 h-72
                transition-all duration-300
                group-hover:scale-90
                group-hover/item:scale-110
              "
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default Carosel