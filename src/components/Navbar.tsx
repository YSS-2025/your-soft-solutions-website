"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="px-10 py-5 flex flex-col md:flex-row text-xl bg-[#ffffff70]">
            <div className="flex justify-between items-center w-full md:w-auto">
                <Image src="/logo.png" alt="Your Soft Solutions Logo" width={75} height={75} className='mr-auto md:mr-0' />
                <Link className="mr-auto ml-2 self-center hidden md:flex" href="/">Your Soft Solutions, LLC</Link>
                <button className="md:hidden" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <ul className={`flex-col md:flex-row md:flex md:ml-auto ${isOpen ? 'flex' : 'hidden'}`}>
                <li className="self-center my-3 mx-2">
                    <Link href="/">Home</Link>
                </li>
                <li className="self-center my-3 mx-2">
                    <Link href="/services">Services</Link>
                </li>
                <li className="self-center my-7 mx-2">
                    <Link className='rounded-full bg-[#4FADEB] p-5 text-white' href="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}