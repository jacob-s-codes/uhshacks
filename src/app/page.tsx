"use client";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import Registerbtn from './components/Registerbtn';

import AccordionDemo from './components/Accoridion';
import Link from 'next/link';
import CryptoText from './components/CryptoTextOnce';

export default function Home() {
  const animateup = useRef(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      // Register ScrollTrigger once
      gsap.registerPlugin(ScrollTrigger);

      // Get the DOM element from the ref
      const element = animateup.current;

      // Create the animation
      const animation = gsap.fromTo(element,
        // Starting properties
        {
          y: 400, // Start from far left (negative value)
          opacity: 0.5,
        },
        // Ending properties
        {
          y: 0, // Move to original position
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "top 40%",
            scrub: 0.5,
            invalidateOnRefresh: true,
            // markers: true, // Uncomment for debugging
          }
        }
      );

      // Cleanup function to kill the animation when component unmounts
      return () => {
        if (animation) animation.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <div className=" bg-gray-50">




      {/* Hero Section */}
      <div className="uhsbg lg:h-[calc(100vh-4rem)] h-screen  flex items-center justify-center">

        <div className="relative max-w-7xl w-full text-center flex flex-col items-center justify-center mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className=" font-black tracking-tight text-white text-7xl lg:text-9xl"><span className='text-darkred'>UHS </span><CryptoText text="Hacks 2025" /></h1>
          <p className="mt-6 max-w-xl font-semibold lg:text-3xl text-2xl text-white">
            Join us for a day of coding, learning, and innovation at our school's premier hackathon event
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-start items-center gap-4">
            <div className="relative inline-flex  group">
              <div
                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-darkred via-red-400 to-red-800 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
              </div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSelDOdh_z7yWL_Vlil8nzMSyHEThYtlpgQZxdf9MAtcBmXEYg/viewform?usp=header" title="Sign up" target='_blank'
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-white font-pj rounded-xl "
                role="button">Sign Up Now
              </a>
            </div>


            <div className="relative inline-flex  group">
              <div
                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-darkred via-red-400 to-red-800 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
              </div>
              <a href="https://discord.gg/69DBGBKeGz" title="Join the discord" target='_blank'
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-gray-900"
                role="button">Join The Discord
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Date and Location Section */}
      <div className="bg-gradient-to-b from-white to-red-200">
        <div id="about">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className='text-center pt-36  lg:text-5xl text-4xl font-black pb-2'>LOGISTICAL INFORMATION</h2>
            <hr className='mb-12 border-2 border-black' />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
              <div className="flex flex-col items-center">
                <div className="rounded-md p-3">
                  <svg className="h-18 w-auto text-darkred" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-3xl font-medium ">September 20, 2025</h3>
                <p className="mt-2 text-xl text-gray-700">Saturday</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="rounded-md  p-3">
                  <svg className="h-18 w-auto text-darkred" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-3xl font-medium">University High School</h3>
                <Link href="https://maps.app.goo.gl/R24RfjfDNtfwdVqJ8" target='_blank'><p className="mt-2 text-xl text-gray-700 hover:text-darkred">3065 Jackson Street | Directions here</p></Link>
              </div>

              <div className="flex flex-col items-center">
                <div className="rounded-md  p-3">
                  <svg className="h-18 w-auto text-darkred" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-3xl font-medium ">9 AM - 6:45 PM</h3>
                <p className="mt-2 text-xl text-gray-700">Coding, learning, and fun</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className=" py-36" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="md:text-5xl text-3xl font-black text-black uppercase pb-2">Why Participate in UHS Hacks?</h2>
              <hr className='border-2 border-black' />

            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white overflow-hidden shadow-lg shadow-red-300 rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-darkred rounded-md p-3">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900">Team Building</h3>
                        <p className="mt-2 text-base text-gray-500">
                          Form teams up to 4 students and collaborate on innovative projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow-lg shadow-red-300 rounded-lg ">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-darkred rounded-md p-3">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900">Innovate & Learn</h3>
                        <p className="mt-2 text-base text-gray-500">
                          Mentors help you learn new technologies and skills
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow-lg shadow-red-300 rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-darkred rounded-md p-3">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-medium text-gray-900">Win Prizes</h3>
                        <p className="mt-2 text-base text-gray-500">
                          Prizes for winners across multiple categories
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <h3 className='font-medium'>12:00 PM</h3>
              <div className='flex flex-col items-end text-right max-w-2xl w-full'>
                <h3 className='font-medium pb-1'>Lunch</h3>
                <hr className='w-full border border-black' />
              </div>
            </div>
            <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-10
              rounded-lg bg-white '>
              <h3 className='font-medium'>2:30 PM</h3>
              <div className='flex flex-col items-end text-right max-w-2xl w-full'>
                <h3 className='font-medium pb-1'>Coding Competition</h3>
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



      {/* CTA Section */}
      <div className="bg-darkred">
        <div className="max-w-7xl flex lg:flex-row flex-col lg:text-left text-center items-center justify-between mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8" ref={animateup}>
          <div className='pr-8 text-white' >
            <h2 className="lg:text-5xl text-4xl font-black text-white sm:text-5xl uppercase" >
              <span className="block">Ready to hack?</span>
              <span className="block">Registration is now open!</span>
            </h2>
            <p className="my-8 text-xl leading-6 ">
              Limited spots available. Register today to secure your place. Questions? Email <a href="mailto:info@uhshacks.com" className='font-bold'>info@uhshacks.com</a> for more information.
            </p>
            <Registerbtn />
          </div>
          <img src="/uhsimg.png" alt="" className='max-w-2xl rounded-2xl shadow-2xl shadow-black h-auto lg:mt-0 mt-4' />
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


      <div className='pt-36 bg-white sm:px-6 lg:px-8 px-4' id="sponsors">

        <div className='max-w-7xl mx-auto'>
          <h2 className='text-center lg:text-5xl text-4xl font-black'>THANK YOU TO OUR SPONSORS</h2>
          <hr className='mb-8 mt-1 border-2 border-black' />
          <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-12 place-items-center'>
            <a href="https://vercel.com/home" target='_blank'><img src="/vercel-logotype-light.png" alt="Vercel sponsor" className='hover:scale-105 hover:rotate-3 duration-200 xl:w-96 w-72' /></a>
            <a href="https://www.sfuhs.org/" target='_blank'><img src="/uhslogo.jpg" alt="SFUHS sponsor" className='rounded-full hover:scale-105 hover:rotate-3 duration-200 w-full lg:h-48 h-36' /></a>
            <a href="https://www.twelvelabs.io/" target='_blank'><img src="/twelvelabslogo.jpg" alt="Twelve Labs sponsor" className='hover:scale-105 hover:rotate-3 duration-200 xl:w-96 w-72' /></a>
            <a href="https://www.cerebras.ai/" target='_blank'><img src="/cerebraslogo.png" alt="Cerebras sponsor" className='hover:scale-105 hover:rotate-3 duration-200 xl:w-96 w-72' /></a>
            <a href="https://modetocode.com" target='_blank'><img src="/mtclogo.png" alt="Mode to Code sponsor" className='rounded-lg w-auto lg:h-48 h-36 hover:scale-105 hover:rotate-3 duration-200 ' /></a>
            {/* <a href="https://gen.xyz/" target='_blank'><img src="/xyz-logo-color.png" alt="XYZ sponsor" className='hover:scale-105 hover:rotate-3 duration-200 lg:h-48 h-36' /></a> */}


          </div>
          <p className='text-xl text-center pt-8'>Interested in sponsoring UHS Hacks? Email: <a href="mailto:info@uhshacks.com" className='font-bold hover:cursor-pointer'>info@uhshacks.com</a></p>

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
      <footer className="bg-darkred">
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

            <a href="https://discord.gg/69DBGBKeGz" target="_blank" className=" hover:text-black">
              <span className="sr-only">Discord</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-discord w-8 h-auto" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
            </a>
          </div>
          <div className='flex flex-row items-center justify-center gap-x-10 mt-8'>
            <p className=" text-base ">
              &copy; 2025 UHS Hacks. All rights reserved.
            </p>
            <p>Website built by <Link href="https://github.com/jacob-s-codes" target="_blank" className="hover:cursor-pointer"><span className="hover:text-black">Jacob S</span></Link></p>
            <p className=' text-center'>Questions? Email: <a href="mailto:info@uhshacks.com" className='font-bold'>info@uhshacks.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}