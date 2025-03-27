import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full  mx-auto space-y-2">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center 
                       p-4 text-left bg-red-200 hover:bg-darkred hover:text-white 
                       transition-colors duration-200"
          >
            <span className="font-semibold">{item.title}</span>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto',
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                  }
                }}
                className="bg-white border-t overflow-hidden"
              >
                <div className="p-4">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

// Example usage
const AccordionDemo = () => {
  const accordionItems = [
    {
      title: "What is a hackathon?",
      content: "A hackathon is a design sprint-like event in which computer programmers and others involved in software development, including graphic designers, interface designers, project managers, domain experts, and others collaborate intensively on software projects."
    },
    {
      title: "Is it free?",
      content: "Yes, UHS Hacks is a free event for all high school students!"
    },
    {
      title: "Do I need to know how to code?",
      content: "Nope! We welcome students of all skill levels, from beginners to experts."
    },
    {
      title: "What should I bring?",
      content: "Bring your laptop, charger, and any other tech you need to work on your project. We also recommend bringing a water bottle and snacks to keep you energized throughout the event."
    }

  ];

  return <Accordion items={accordionItems} />;
};

export default AccordionDemo;