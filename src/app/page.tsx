"use client";
import Head from 'next/head';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import Registerbtn from './components/Registerbtn';

import AccordionDemo from './components/Accoridion';
import Link from 'next/link';

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
            start: "top 80%",
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
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>UHS Hacks | High School Hackathon</title>
        <meta name="description" content="Join UHS Hacks, the premier high school hackathon where students collaborate, innovate, and build amazing projects!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      {/* Hero Section */}
      <main>
        <div className="relative h-screen uhsbg flex items-center justify-center">

          <div className="relative max-w-7xl w-full text-center flex flex-col items-center justify-center mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className=" font-black tracking-tight text-white text-7xl lg:text-9xl"><span className='text-darkred'>UHS</span> Hacks 2025</h1>
            <p className="mt-6 max-w-xl font-semibold lg:text-3xl text-2xl text-white">
              Join us for 12 hours of coding, learning, and innovation at our schools premier hackathon event.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-start items-center gap-4">
              <div className="relative inline-flex  group">
                <div
                  className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-darkred via-red-400 to-red-800 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdaiUnt_hWneYpygHvoYs7jmvtgetWJOg15DLicKktSynXeJA/viewform?usp=dialog" title="Sign up" target='_blank'
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-gray-900"
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
              <hr className='mb-12 border-2 border-black'/>
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
                  <h3 className="mt-4 text-3xl font-medium ">9 AM - 6:30 PM</h3>
                  <p className="mt-2 text-xl text-gray-700">Of coding, learning, and fun</p>
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
                            Form teams of up to 4 students and collaborate on innovative projects.
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
                          <h3 className="text-lg font-medium text-gray-900">Learn & Innovate</h3>
                          <p className="mt-2 text-base text-gray-500">
                            Workshops and mentors to help you learn new technologies and skills.
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
                            $5,000 in prizes for winners across multiple categories.
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
          <div className='py-36 max-w-7xl mx-auto lg:px-0 px-4' id="schedule">
            <h2 className='lg:text-5xl text-4xl font-black uppercase text-center pb-2'>Schedule</h2>
            <hr className='border-2 border-black' />
            <div className='flex flex-col items-center w-full text-2xl font-thin pt-12 gap-y-4 md:px-0 px-2'>
              <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-18
              rounded-lg bg-white '>
                <h3 className='font-medium'>9:00 AM</h3>
                <div className='flex flex-col items-end text-right max-w-2xl'>
                  <h3 className='font-medium pb-1'>Check-In</h3>
                  <hr className='w-full border border-black' />
                  <p className='text-xl pt-6'>Hackers will check-in and get everything ready. Hackers can also find and organize their teams if necessary.</p>
                </div>
              </div>
              <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-18
              rounded-lg bg-white '>
                <h3 className='font-medium'>10:00 AM</h3>
                <div className='flex flex-col items-end text-right max-w-2xl'>
                  <h3 className='font-medium pb-1'>Theme Anounced</h3>
                  <hr className='w-full border border-black' />
                  <p className='text-xl pt-6'>Hackers will check-in and get everything ready. Hackers can also find and organize their teams if necessary.</p>
                </div>
              </div>
              <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-18
              rounded-lg bg-white '>
                <h3 className='font-medium'>10:15 AM</h3>
                <div className='flex flex-col items-end text-right max-w-2xl'>
                  <h3 className='font-medium pb-1'>Hacking Starts</h3>
                  <hr className='w-full border border-black' />
                  <p className='text-xl pt-6'>Hackers will check-in and get everything ready. Hackers can also find and organize their teams if necessary.</p>
                </div>
              </div>
              <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-18
              rounded-lg bg-white '>
                <h3 className='font-medium'>12:00 PM</h3>
                <div className='flex flex-col items-end text-right max-w-2xl'>
                  <h3 className='font-medium pb-1'>Lunch</h3>
                  <hr className='w-full border border-black' />
                  <p className='text-xl pt-6'>Hackers will check-in and get everything ready. Hackers can also find and organize their teams if necessary.</p>
                </div>
              </div>
              <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-18
              rounded-lg bg-white '>
                <h3 className='font-medium'>2:30 PM</h3>
                <div className='flex flex-col items-end text-right max-w-2xl'>
                  <h3 className='font-medium pb-1'>Coding Competition</h3>
                  <hr className='w-full border border-black' />
                  <p className='text-xl pt-6'>Hackers will check-in and get everything ready. Hackers can also find and organize their teams if necessary.</p>
                </div>
              </div>

              <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-18
              rounded-lg bg-white '>
                <h3 className='font-medium'>4:00 PM</h3>
                <div className='flex flex-col items-end text-right max-w-2xl'>
                  <h3 className='font-medium pb-1'>Hacking Stops</h3>
                  <hr className='w-full border border-black' />
                  <p className='text-xl pt-6'>Hackers will check-in and get everything ready. Hackers can also find and organize their teams if necessary.</p>
                </div>
              </div>

              <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-18
              rounded-lg bg-white '>
                <h3 className='font-medium'>4:30 PM</h3>
                <div className='flex flex-col items-end text-right max-w-2xl'>
                  <h3 className='font-medium pb-1'>Demos</h3>
                  <hr className='w-full border border-black' />
                  <p className='text-xl pt-6'>Hackers will check-in and get everything ready. Hackers can also find and organize their teams if necessary.</p>
                </div>
              </div>

              <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-18
              rounded-lg bg-white '>
                <h3 className='font-medium'>6:00 PM</h3>
                <div className='flex flex-col items-end text-right max-w-2xl'>
                  <h3 className='font-medium pb-1'>Judging</h3>
                  <hr className='w-full border border-black' />
                  <p className='text-xl pt-6'>Hackers will check-in and get everything ready. Hackers can also find and organize their teams if necessary.</p>
                </div>
              </div>

              <div className='flex flex-row justify-between gap-x-10 w-full max-w-7xl border border-gray-700 px-10 py-18
              rounded-lg bg-white '>
                <h3 className='font-medium'>6:30 PM</h3>
                <div className='flex flex-col items-end text-right max-w-2xl'>
                  <h3 className='font-medium pb-1'>Winners Anounced!</h3>
                  <hr className='w-full border border-black' />
                  <p className='text-xl pt-6'>Hackers will check-in and get everything ready. Hackers can also find and organize their teams if necessary.</p>
                </div>
              </div>

            </div>
          </div>
        </div>



        {/* CTA Section */}
        <div className="bg-darkred">
          <div className="max-w-7xl flex lg:flex-row flex-col lg:text-left text-center items-center justify-between mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8" ref={animateup}>
            <div className='pr-8' >
              <h2 className="lg:text-5xl text-4xl font-black text-white sm:text-5xl uppercase" >
                <span className="block">Ready to hack?</span>
                <span className="block">Registration is open now!</span>
              </h2>
              <p className="my-4 text-xl leading-6 text-white">
                Limited spots available. Register today to secure your place!
              </p>
              <Registerbtn />
            </div>
            <img src="/uhsimg.png" alt="" className='max-w-2xl rounded-2xl shadow-2xl shadow-black h-auto lg:mt-0 mt-4' />
          </div>
        </div>
      </main>

      <div className='py-36 bg-white lg:px-0 px-4' id="FAQ">

        <div className='max-w-7xl mx-auto'>
          <h2 className='text-center lg:text-5xl text-4xl font-black'>FAQ</h2>
          <hr className='mb-8 mt-1 border-2 border-black'/>
          <AccordionDemo />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-darkred">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 text-white">
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className=" hover:text-black">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>

            <a href="#" className=" hover:text-black">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>

            <a href="#" className=" hover:text-black">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-center text-base ">
            &copy; 2025 UHS Hacks. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}