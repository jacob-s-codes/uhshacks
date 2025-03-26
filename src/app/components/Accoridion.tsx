import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  items: {
    title: React.ReactNode;
    content: React.ReactNode;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  

  return (
    <div className=" bg-darkred text-white  shadow-md">
      {items.map((item: { title: React.ReactNode; content: React.ReactNode }, index: number) => (
        <div key={index} className="border-b last:border-b-0 border-gray-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 text-left 
                       hover:bg-black  transition-colors duration-500 
                       "
          >
            <span className="font-medium ">{item.title}</span>
            <ChevronDown 
              className={`w-5 h-5 transform transition-transform duration-500 
                          ${activeIndex === index ? 'rotate-180' : ''}`} 
            />
          </button>
          
          {activeIndex === index && (
            <div 
              className="p-4 bg-white text-gray-600 
                         animate-fade-in-down"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Example usage
const App = () => {
  const accordionData = [
    {
      title: "What is a hackathon?",
      content: "Lorem50"
    },
    {
      title: "Is it free?",
      content: "Lorem50"
    },
    {
      title: "What should I bring?",
      content: "Lorem50"
    }
  ];

  return <Accordion items={accordionData} />;
};

export default App;