"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Registerbtn from './Registerbtn';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <nav className="bg-darkred shadow-lg text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 ">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/"><span className="hover:text-black hover:bg-red-200 hover:rounded-lg px-3 py-2  font-bold text-2xl">UHS Hacks</span></Link>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#about" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#about')?.scrollIntoView({behavior:'smooth'});
                        }} className=" hover:text-black hover:bg-red-200 hover:rounded-lg px-3 py-2 font-medium">About</Link>
                        <Link href="#schedule" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#schedule')?.scrollIntoView({behavior:'smooth'});
                        }} className=" hover:text-black hover:bg-red-200 hover:rounded-lg px-3 py-2 font-medium">Schedule</Link>
                        
                        <Link href="/sponsors" className=" hover:text-black hover:bg-red-200 hover:rounded-lg px-3 py-2 font-medium">Sponsors</Link>
                        <Link href="#FAQ" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#FAQ')?.scrollIntoView({behavior:'smooth'});
                        }} className=" hover:text-black hover:bg-red-200 hover:rounded-lg px-3 py-2 font-medium">FAQ</Link>
                        <Registerbtn/>
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
                        <Link href="#about" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#about')?.scrollIntoView({behavior:'smooth'});
                        }} className="block text-white hover:text-black hover:bg-white px-3 py-2 font-medium">About</Link>
                        <Link href="#schedule" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#schedule')?.scrollIntoView({behavior:'smooth'});
                        }} className="block text-white hover:text-black hover:bg-white px-3 py-2 font-medium">Schedule</Link>
                        <Link href="#faq" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#schedule')?.scrollIntoView({behavior:'smooth'});
                        }} className="block text-white hover:text-black hover:bg-white px-3 py-2 font-medium">FAQ</Link>
                        <Link href="/sponsors" className="block text-white hover:bg-white hover:text-black px-3 py-2 font-medium">Sponsors</Link>
                        <Registerbtn/>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar