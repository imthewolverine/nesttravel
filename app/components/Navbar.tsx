'use client'

import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    function dropdown() {
        setIsOpen(!isOpen);
    }

    if (!mounted) {
        return null; 
    }

    return (
        <div className="px-4 bg-white border-gray-200 sticky top-0 right-0 left-0 z-50 shadow">
            <div className="max-w-screen-lg min-[1537px]:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 md:py-6">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#494B5C]">Nest travel</span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    onClick={dropdown}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className={`${isOpen ? "flex" : "hidden"} flex-col w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a href="/" className="block py-2 px-3 rounded md:bg-transparent text-[#E71230] md:p-0" aria-current="page">Нүүр</a>
                        </li>
                        <li>
                            <a href="/aboutUs" className="block py-2 px-3 text-[#494B5C] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#E71230] md:p-0">Бидний тухай</a>
                        </li>
                        <li>
                            <a href="/tours" className="block py-2 px-3 text-[#494B5C] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#E71230] md:p-0">Аяллууд</a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 px-3 text-[#494B5C] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#E71230] md:p-0">Холбоо барих</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#494B5C] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#E71230] md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
