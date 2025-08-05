import HomeClient from './HomeClient';

export const metadata = { 
  title: "UHS Hacks | High School Hackathon",
  description: "Join UHS Hacks, the premier high school hackathon where students collaborate, innovate, and build amazing projects!",
  icons: {
    icon: '/favicon.ico'
  },
}

export default function Home() {
  // const animateup = useRef(null);

  // useEffect(() => {
  //   // Only run on client-side
  //   if (typeof window !== 'undefined') {
  //     // Register ScrollTrigger once
  //     gsap.registerPlugin(ScrollTrigger);

  //     // Get the DOM element from the ref
  //     const element = animateup.current;

  //     // Create the animation
  //     const animation = gsap.fromTo(element,
  //       // Starting properties
  //       {
  //         y: 400, // Start from far left (negative value)
  //         opacity: 0.5,
  //       },
  //       // Ending properties
  //       {
  //         y: 0, // Move to original position
  //         opacity: 1,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: element,
  //           start: "top 90%",
  //           end: "top 40%",
  //           scrub: 0.5,
  //           invalidateOnRefresh: true,
  //           // markers: true, // Uncomment for debugging
  //         }
  //       }
  //     );

  //     // Cleanup function to kill the animation when component unmounts
  //     return () => {
  //       if (animation) animation.kill();
  //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //     };
  //   }
  // }, []);

  return (
    <div>
      <HomeClient/>
    </div>
  );
}