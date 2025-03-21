"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Registerbtn from './Registerbtn';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <nav className="bg-darkred shadow-lg text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/"><span className="hover:text-black font-bold text-2xl">UHS Hacks</span></Link>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/about" className=" hover:text-black px-3 py-2 font-medium">About</Link>
                        <Link href="/schedule" className=" hover:text-black px-3 py-2 font-medium">Schedule</Link>
                        <Link href="/faq" className=" hover:text-black px-3 py-2 font-medium">FAQ</Link>
                        <Link href="/sponsors" className=" hover:text-black px-3 py-2 font-medium">Sponsors</Link>
                        <Link href="/register" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-darkred transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-darkred" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Register</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:cursor-pointer focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <hr className='text-black border-2 border-black'/>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block w-full text-white hover:text-black hover:bg-white px-3 py-2 font-medium">Home</Link>
                        <Link href="/about" className="block text-white hover:text-black hover:bg-white px-3 py-2 font-medium">About</Link>
                        <Link href="/schedule" className="block text-white hover:text-black hover:bg-white px-3 py-2 font-medium">Schedule</Link>
                        <Link href="/faq" className="block text-white hover:text-black hover:bg-white px-3 py-2 font-medium">FAQ</Link>
                        <Link href="/sponsors" className="block text-white hover:bg-white hover:text-black px-3 py-2 font-medium">Sponsors</Link>
                        <Registerbtn/>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar