"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Registerbtn from './Registerbtn';
import Image from 'next/image';
// import CryptoText from './CryptoText';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <nav className={`bg-darkred shadow-lg text-white sticky top-0 z-50 transition-colors duration-300`} id="navbar">
            <div className="max-w-[1450px] mx-auto px-4 ">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" ><Image width={500} height={500} src="/uhshacks.png" alt="UHS Hacks" className='lg:w-64 md:w-40 w-52 h-auto lg:pb-2 pb-1'></Image></Link>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center xl:space-x-8 lg:space-x-4 space-x-0.5 xl:text-lg text-base">
                        <Link href="#about" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#about')?.scrollIntoView({behavior:'smooth'});
                        }} className="hover:text-black hover:bg-red-200 rounded-lg px-3 py-2 font-medium transition-colors duration-300">About</Link>
                        <Link href="#schedule" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#schedule')?.scrollIntoView({behavior:'smooth'});
                        }} className="hover:text-black hover:bg-red-200 rounded-lg px-3 py-2 font-medium transition-colors duration-300">Schedule</Link>
                        
                        <Link href="#sponsors" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#sponsors')?.scrollIntoView({behavior:'smooth'});
                        }} className="hover:text-black hover:bg-red-200 rounded-lg px-3 py-2 font-medium transition-colors duration-300">Sponsors</Link>
                        <Link href="#judges" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#judges')?.scrollIntoView({behavior:'smooth'});
                        }} className="hover:text-black hover:bg-red-200 rounded-lg px-3 py-2 font-medium transition-colors duration-300">Judges</Link>
                        <Link href="#theteam" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#theteam')?.scrollIntoView({behavior:'smooth'});
                        }} className="hover:text-black hover:bg-red-200 rounded-lg px-3 py-2 font-medium transition-colors duration-300">Team</Link>
                        <Link href="#FAQ" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#FAQ')?.scrollIntoView({behavior:'smooth'});
                        }} className="hover:text-black hover:bg-red-200 rounded-lg px-3 py-2 font-medium transition-colors duration-300">FAQ</Link>
                        <Registerbtn/>
                    </div>

                    {/* Mobile menu button with animation */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:cursor-pointer focus:outline-none transition-all duration-300"
                            aria-expanded={isMenuOpen}
                        >
                            <div className="w-6 h-6 relative">
                                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                                <span className={`absolute h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-0 opacity-0' : 'w-full opacity-100 top-3'}`}></span>
                                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation with animation */}
            <div 
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-82 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <hr className={`text-black border-1 border-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}/>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    
                    <Link href="#about" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#about')?.scrollIntoView({behavior:'smooth'});
                        setIsMenuOpen(false);
                    }} className="block text-white hover:text-black hover:bg-white px-3 py-2 font-medium transition-colors duration-300">About</Link>
                    <Link href="#schedule" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#schedule')?.scrollIntoView({behavior:'smooth'});
                        setIsMenuOpen(false);
                    }} className="block text-white hover:text-black hover:bg-white px-3 py-2 font-medium transition-colors duration-300">Schedule</Link>
                    <Link href="#judges" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#judges')?.scrollIntoView({behavior:'smooth'});
                        setIsMenuOpen(false);
                    }} className="block text-white hover:text-black hover:bg-white px-3 py-2 font-medium transition-colors duration-300">Judges</Link>
                    <Link href="#sponsors" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#sponsors')?.scrollIntoView({behavior:'smooth'});
                        setIsMenuOpen(false);
                    }} className="block text-white hover:bg-white hover:text-black px-3 py-2 font-medium transition-colors duration-300">Sponsors</Link>
                    <Link href="#theteam" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#theteam')?.scrollIntoView({behavior:'smooth'});
                        setIsMenuOpen(false);
                    }} className="block text-white hover:bg-white hover:text-black px-3 py-2 font-medium transition-colors duration-300">Team</Link>
                    <Link href="#faq" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#FAQ')?.scrollIntoView({behavior:'smooth'});
                        setIsMenuOpen(false);
                    }} className="block text-white hover:text-black hover:bg-white px-3 py-2 font-medium transition-colors duration-300">FAQ</Link>
                    <Registerbtn/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar