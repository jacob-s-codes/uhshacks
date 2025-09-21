import React from 'react'
import Marquee from 'react-fast-marquee'

const Carosel = () => {
  return (
    <div>
        <Marquee className="max-h-[600px]  py-3 overflow-hidden grid  " speed={200} pauseOnHover={true}>
            <img src="/2025/wideimg.jpg" alt="wide image" className='lg:h-[500px] md:h-96 h-72 flex lg:mx-4 mx-2'/>
            <img src="/2025/winners.jpg" alt="wide image" className='lg:h-[500px] md:h-96 h-72 flex lg:mx-4 mx-2'/>
            <img src="/2025/wideimg2.jpg" alt="wide image" className='lg:h-[500px] md:h-96 h-72 flex lg:mx-4 mx-2'/>
            <img src="/2025/judging2.jpg" alt="wide image" className='lg:h-[500px] md:h-96 h-72 flex lg:mx-4 mx-2'/>
            <img src="/2025/workingpic1.jpg" alt="wide image" className='lg:h-[500px] md:h-96 h-72 flex lg:mx-4 mx-2'/>
            <img src="/2025/workingpic2.jpg" alt="wide image" className='lg:h-[500px] md:h-96 h-72 flex lg:mx-4 mx-2'/>
            <img src="/2025/workingpic3.jpg" alt="wide image" className='lg:h-[500px] md:h-96 h-72 flex lg:mx-4 mx-2'/>
            {/* <img src="/2025/wideimg2.jpg" alt="wide image" className='lg:w-[500px] md:w-32 w-28 flex lg:mx-10 mx-6'/> */}
          </Marquee>
    </div>
  )
}

export default Carosel