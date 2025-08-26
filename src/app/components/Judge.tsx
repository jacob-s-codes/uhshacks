import Link from "next/link";
import React, { useState } from "react";

interface JudgesProps {
    image: string;
    bio: string;
    link: string;
    name: string;
    title?: string; // optional role/title
}

const Judges = ({ image, bio, link, name, title }: JudgesProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

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

                {/* Bio */}
                <p
                    className={`text-gray-700 text-sm leading-relaxed transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"
                        }`}
                >
                    {bio}
                </p>

                {/* Read More / Read Less toggle */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-darkred text-sm font-medium hover:underline hover:cursor-pointer self-start"
                >
                    {isExpanded ? "Read less" : "Read more"}
                </button>

                {/* Link */}
                <Link
                    href={link}
                    target="_blank"
                    className="hover:text-darkred hover:scale-105 duration-300 w-fit"
                >
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-linkedin w-12 h-auto" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Judges;
