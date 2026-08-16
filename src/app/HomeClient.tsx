import Link from 'next/link'
import React from 'react'
import AccordionDemo from './components/Accoridion'
import CryptoText from './components/CryptoTextOnce'
import Registerbtn from './components/Registerbtn'
import Judges from './components/Judge'
import Person from './components/Person'
import Carosel from './components/Carosel'

const HomeClient = () => {
  const time = new Date();
  const year = time.getFullYear();

  return (
    <div className=" bg-gray-50 w-full overflow-x-hidden overflow-y-hidden">


      <div className="homebg h-screen relative w-full bg-cover overflow-hidden isolate">
        {/* Background video */}
        <video
          src="/2025/bgmp4.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 -z-0"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 z-10">
          <h1 className="font-black tracking-tight text-white text-7xl lg:text-9xl text-center ">
            <span
              className="text-red-700"

            >
              UHS{" "}
            </span>
            <CryptoText text="HACKS 2027" />
          </h1>
          <h2 className="max-w-2xl text-center font-semibold lg:text-3xl text-2xl text-white my-8">
            MANY VOICES, ONE UNIVERSITY

            <span
              className="text-red-700"

            >
              {"{HACKATHON} "}
            </span>
          </h2>
        </div>
      </div>



      {/* Date and Location Section */}
      <div className="bg-gradient-to-b from-white to-red-200">
        <div id="about">
          <div className="max-w-[1600px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className='text-center pt-36  lg:text-5xl text-4xl font-black pb-2'>Past Events</h2>
            <hr className='mb-12 border-2 border-black' />
            <Carosel />
          </div>
        </div>






      {/* CTA Section */}
      <div className="bg-red-800">
        <div className="max-w-[1450px] flex lg:flex-row flex-col lg:text-left text-center items-center justify-between mx-auto py-12 sm:py-20 px-5 sm:px-6">

          <div className='text-white lg:pr-8 w-full'>
            <h2 className="lg:text-5xl text-4xl font-black text-white sm:text-5xl uppercase lg:pr-4">
              <span className="block">Ready to hack?</span>
              <span className="block">Check back in soon!</span>
            </h2>
            <p className="my-8 text-xl leading-6 ">
              Limited spots available. Register soon to secure your place. Questions? Email <a href="mailto:info@uhshacks.com" className='font-bold hover:underline'>info@uhshacks.com</a> for more information.
            </p>
            <Registerbtn />
          </div>
          <img src="/swag.jpg" alt="" className='max-w-xl rotate-[-90deg] rounded-2xl shadow-2xl shadow-black h-auto lg:mt-0 mt-4 lg:mr-8' />
        </div>
      </div>

      {/* <div className="pt-36 sm:px-6 lg:px-8 px-4" id="theteam">
        <div className="max-w-7xl mx-auto">
          <h2 className='text-center lg:text-5xl text-4xl font-black'>OUR TEAM</h2>
          <hr className='mb-8 mt-1 border-2 border-black' />

          <div className="grid grid-cols-4 gap-2 text-white">
            <div className="flex flex-col items-start bg-darkred p-4 rounded-lg gap-y-2 border-black border-4">
              <img src="/people/jacobpic.png" alt="" className="rounded-lg h-72 w-auto border-2 border-white"/>
              <h3 className="text-2xl font-bold">&#123; Jacob Shaul &#125;</h3>
              <h4 className="text-xl font-bold">Lead Organizer</h4>
              <p className="text-lg font-medium">Looking forward to bringing opportunities to high school students in the Bay Area!</p>
            </div>

            <div className="flex flex-col items-start bg-darkred p-4 rounded-lg gap-y-2 border-black border-4">
              <img src="/people/rowanpic.png" alt="" className="rounded-lg h-72 border-2 border-white"/>
              <h3 className="text-2xl font-bold">&#123; Jacob Shaul &#125;</h3>
              <h4 className="text-xl font-bold">Lead Organizer</h4>
              <p className="text-lg font-medium">Looking forward to bringing opportunities to high school students in the Bay Area!</p>
            </div>
          </div>
        </div>
      </div> */}


        {/* Schedule */}
        <div className='py-36 max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8' id="schedule">
          <h2 className='lg:text-5xl text-4xl font-black uppercase text-center pb-2 '>Schedule</h2>
          <hr className='border-2 border-black' />
          <div className='flex flex-col items-center w-full text-2xl font-thin pt-12 gap-y-4 md:px-0 px-2'>
            <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-10
              rounded-lg bg-white '>
              <h3 className='font-medium'>9:00 AM</h3>
              <div className='flex flex-col items-end text-right w-full max-w-2xl'>
                <h3 className='font-medium pb-1'>Check-In</h3>
                <hr className='w-full border border-black' />

              </div>
            </div>
            <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-10
              rounded-lg bg-white '>
              <h3 className='font-medium'>10:00 AM</h3>
              <div className='flex flex-col items-end text-right w-full max-w-2xl'>
                <h3 className='font-medium pb-1'>Theme Announced</h3>
                <hr className='w-full border border-black' />

              </div>
            </div>
            <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-10
              rounded-lg bg-white '>
              <h3 className='font-medium'>10:15 AM</h3>
              <div className='flex flex-col items-end text-right max-w-2xl w-full'>
                <h3 className='font-medium pb-1'>Hacking Starts</h3>
                <hr className='w-full border border-black' />
              </div>
            </div>
            <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-10
              rounded-lg bg-white '>
              <h3 className='font-medium'>10:45 AM</h3>
              <div className='flex flex-col items-end text-right max-w-2xl w-full'>
                <h3 className='font-medium pb-1'>Intro to Web Development Workshop</h3>
                <hr className='w-full border border-black' />
              </div>
            </div>
            <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-10
              rounded-lg bg-white '>
              <h3 className='font-medium'>12:00 PM</h3>
              <div className='flex flex-col items-end text-right max-w-2xl w-full'>
                <h3 className='font-medium pb-1'>Lunch</h3>
                <hr className='w-full border border-black' />
              </div>
            </div>


            <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-10
              rounded-lg bg-white '>
              <h3 className='font-medium'>4:00 PM</h3>
              <div className='flex flex-col items-end text-right max-w-2xl w-full'>
                <h3 className='font-medium pb-1'>Hacking Stops</h3>
                <hr className='w-full border border-black' />
              </div>
            </div>

            <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-10
              rounded-lg bg-white '>
              <h3 className='font-medium'>4:30 PM</h3>
              <div className='flex flex-col items-end text-right max-w-2xl w-full'>
                <h3 className='font-medium pb-1'>Demos</h3>
                <hr className='w-full border border-black' />
              </div>
            </div>

            <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-10
              rounded-lg bg-white '>
              <h3 className='font-medium'>6:00 PM</h3>
              <div className='flex flex-col items-end text-right max-w-2xl w-full'>
                <h3 className='font-medium pb-1'>Judging</h3>
                <hr className='w-full border border-black' />
              </div>
            </div>

            <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-12
              rounded-lg bg-white '>
              <h3 className='font-medium'>6:30 PM</h3>
              <div className='flex flex-col items-end text-right max-w-2xl w-full'>
                <h3 className='font-medium pb-1'>Winners Announced!</h3>
                <hr className='w-full border border-black' />
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className='pt-36 bg-white sm:px-6 lg:px-8 px-4' id="sponsors">

        <div className='max-w-7xl mx-auto'>
          <h2 className='text-center lg:text-5xl text-4xl font-black'>THANK YOU TO OUR SPONSORS</h2>
          <hr className='mb-8 mt-1 border-2 border-black' />
          <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-12 place-items-center'>
            <a href="https://www.sfuhs.org/" target='_blank'><img src="/uhslogo.png" alt="SFUHS sponsor" className='rounded-lg hover:scale-105 hover:rotate-3 duration-200 xl:w-72 w-72 bg-darkred' /></a>
            <a href="https://vercel.com/home" target='_blank'><img src="/vercel-logotype-light.png" alt="Vercel sponsor" className='hover:scale-105 hover:rotate-3 duration-200 xl:w-96 w-72' /></a>
            <a href="https://www.twelvelabs.io/" target='_blank'><img src="/twelvelabslogo.jpg" alt="Twelve Labs sponsor" className='hover:scale-105 hover:rotate-3 duration-200 xl:w-96 w-72' /></a>
            <a href="https://www.atlassian.com/" target='_blank'><img src="/atlassianlogo.png" alt="Atlassian" className='hover:scale-105 hover:rotate-3 duration-200 xl:w-96 w-72' /></a>
            <a href="https://www.swami3.com/" target='_blank'><img src="/swami3logo.png" alt="Swami 3 sponsor" className='hover:scale-105 hover:rotate-3 duration-200 xl:w-96 w-72' /></a>
            <a href="https://www.cerebras.ai/" target='_blank'><img src="/cerebraslogo.png" alt="Cerebras sponsor" className='hover:scale-105 hover:rotate-3 duration-200 xl:w-96 w-72' /></a>
            <a href="https://engineering.berkeley.edu/" target='_blank'><img src="/coelogo.webp" alt="Berkley CoE sponsor" className='hover:scale-105 hover:rotate-3 duration-200 xl:w-96 w-80' /></a>
            {/* <a href="https://modetocode.com" target='_blank'><img src="/mtclogo.png" alt="Mode to Code sponsor" className='rounded-lg w-auto lg:h-48 h-36 hover:scale-105 hover:rotate-3 duration-200 ' /></a> */}
            <a href="https://gen.xyz/" target='_blank'><img src="/xyz-logo-color.png" alt="XYZ sponsor" className='hover:scale-105 hover:rotate-3 duration-200 lg:h-48 h-36' /></a>


          </div>
          <p className='text-xl text-center pt-8'>Interested in sponsoring UHS Hacks? Email: <a href="mailto:info@uhshacks.com" className='font-bold hover:cursor-pointer hover:underline hover:text-darkred'>info@uhshacks.com</a></p>

        </div>
      </div>

      <div className='pt-36 bg-white sm:px-6 lg:px-8 px-4' id="judges">

        <div className='max-w-7xl mx-auto'>
          <h2 className='text-center lg:text-5xl text-4xl font-black'>JUDGES</h2>
          <hr className='mb-8 mt-1 border-2 border-black' />

          {/* Option 1: Use items-start to align cards to top */}
          <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 gap-y-12 gap-x-8 place-items-center items-start'>
            <Judges
              name="Come back soon!"
              link=""
              image="/people/andypic2.jpg"
              title=""
            />
            <Judges
              name="Come back soon!"
              link=""
              image="/people/byronpic.png"
              title=""
            />



            <Judges
              name="Come back soon!"
              link=""
              image="/people/bensilbermann.png"
              title=""
            />
            <Judges
              name="Come back soon!"
              link=""
              image="/people/megan.png"
              title=""
            />

          </div>
        </div>
      </div>

      <div className='pt-36 bg-white sm:px-6 lg:px-8 px-4' id="theteam">

        <div className='max-w-7xl mx-auto'>
          <h2 className='text-center lg:text-5xl text-4xl font-black uppercase'>Meet the team</h2>
          <hr className='mb-8 mt-1 border-2 border-black' />

          {/* Option 1: Use items-start to align cards to top */}
          <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-y-12 gap-x-8 place-items-center items-start'>
            <Person
              name="Ella Shaul"
              bio="Hi, I'm Ella and I'm super excited to lead UHS Hacks 2027! In my free time I like to hang out with friends, listen to music, and anything STEM related. You can reach me at: elmshaul@gmail.com"
              image="/people/ellapic.png"
              title="Lead Organizer"
            />

            <Person
              name="Aishwarya Jha"
              bio="Hi, I'm Aishi, and I'm delighted to support UHS Hacks this year. I like to code and build websites, play volleyball, and hang out with family and friends. You can reach me at: aishwaryapjha@gmail.com"
              image="/people/aishi.png"
              title="Volunteer"
            />
            <Person
              name="Surina Chandra"
              bio="Hi, I’m Surina, and I’m excited to help out with UHS Hacks this year. I love 3D modeling, spending time with friends, and anything in the science department! You can reach me at: "
              image="/people/surina.png"
              title="Volunteer"
            />
            <Person
              name="Vihaan Paka-Hedge"
              bio="Hi, I’m Surina, and I’m excited to help out with UHS Hacks this year. I love 3D modeling, spending time with friends, and anything in the science department excites me! You can reach me at: "
              image="/people/vihaan.png"
              title="Volunteer"
            />
            <Person
              name="Phoebe Schofield"
              bio="“Hi, I’m Phoebe! In my free time I enjoy dancing and logic puzzles of any kind. I’m thrilled to help out with the UHS Hackathon this year! You can reach me at: phoebe.ahn.schofield@gmail.com”"
              image="/people/phoebe.png"
              title="Volunteer"
            />

          </div>
        </div>
      </div>



      <div className='py-36 bg-white sm:px-6 lg:px-8 px-4' id="FAQ">

        <div className='max-w-7xl mx-auto'>
          <h2 className='text-center lg:text-5xl text-4xl font-black'>FAQ</h2>
          <hr className='mb-8 mt-1 border-2 border-black' />
          <AccordionDemo />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 text-white">
          <div className="mt-8 flex justify-center space-x-6">

            <a href="https://www.instagram.com/uhshacks/" target="_blank" className=" hover:text-black">
              <span className="sr-only">Instagram</span>
              <svg className="h-auto w-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/company/uhs-hacks/" target="_blank" className=" hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin w-8 h-auto" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>

            <a href="https://discord.gg/Kz3RqUbEbt" target="_blank" className=" hover:text-black">
              <span className="sr-only">Discord</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-discord w-8 h-auto hover:cursor-pointer" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
            </a>
          </div>
          <div className='flex flex-row items-center justify-center gap-x-10 mt-8'>
            <p className=" text-base ">
              &copy; {year} UHS Hacks. All rights reserved.
            </p>
            <p>Website built by <Link href="https://github.com/jacob-s-codes" target="_blank" className="hover:cursor-pointer hover:text-black">Jacob S</Link></p>
            <p className=' text-center'>Questions? Email: <a href="mailto:info@uhshacks.com" className='font-bold hover:underline'>info@uhshacks.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomeClient