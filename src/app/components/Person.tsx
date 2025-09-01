import Link from "next/link";
import React from "react";

interface JudgesProps {
    image: string;
    bio: string;
    name: string;
    title?: string; // optional role/title
}

const Judges = ({ image, bio, name, title }: JudgesProps) => {
    

    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-black hover:shadow-xl transition-shadow duration-300">
            {/* Judge Image */}
            <img
                className="w-full h-72 object-cover"
                src={image}
                alt={`${name}'s photo`}
            />

            {/* Content */}
            <div className="p-5 flex flex-col space-y-3 border-t border-black">
                {/* Name + Title */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
                    {title && <p className="text-sm text-gray-500">{title}</p>}
                </div>
                <div className={`text-gray-700 text-sm leading-relaxed transition-all duration-300`}>
                    {/* Bio */}
                    <p
                    >
                        {bio}
                    </p>
                    
                </div>

                

                {/* Link */}
                
            </div>
        </div>
    );
};

export default Judges;
