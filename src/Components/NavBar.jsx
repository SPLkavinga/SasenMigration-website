// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/sasen.jpg";
import qrCode from "../assets/carousel-1.jpg"; // Ensure you have a QR code image saved in your assets

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <header className="bg-white border-b border-gray-200 shadow-md dark:bg-purple-700 dark:border-gray-800">
                <div className="flex items-center justify-between max-w-screen-xl p-1 mx-auto">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logo} className=" w-42 h-14" alt="Logo" />
                        <span className="text-xl font-bold text-gray-800 dark:text-white">SASEN MIGRATION</span>
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden space-x-8 text-lg font-medium md:flex">
                        <Link to="/" className="text-lg text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125">Home</Link>
                        <Link to="/gallery" className="text-lg text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125">Gallery</Link>
                        <Link to="/service" className="text-lg text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125">Services</Link>
                        <Link to="/about" className="text-lg text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125">About Us</Link>
                        <Link to="/contact" className="text-lg text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125">Contact</Link>
                    </nav>

                    {/* Bank Details Button */}
                    <Link to="/contact">
                    <button
                        className="hidden px-4 py-2 font-semibold text-white transition duration-300 bg-gray-900 rounded-lg shadow-md md:inline-block hover:from-blue-600 hover:to-indigo-600"
                    >
                        Contsct Us
                    </button>
                    </Link>
                    

                    {/* Mobile Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className="text-gray-500 md:hidden dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                    >
                        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="bg-white border-t border-gray-200 shadow-lg md:hidden dark:bg-gray-900 dark:border-gray-800">
                        <nav className="flex flex-col p-4 space-y-4 text-lg font-medium">
                            <Link to="/" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125" onClick={toggleMenu}>Home</Link>
                            <Link to="/gallery" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125" onClick={toggleMenu}>Gallery</Link>
                            <Link to="/service" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125" onClick={toggleMenu}>Services</Link>
                            <Link to="/about" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125" onClick={toggleMenu}>About Us</Link>
                            <Link to="/contact" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125" onClick={toggleMenu}>Contact</Link>
                            <Link to="/contact">
                                <button className="px-4 py-2 mt-2 font-semibold text-center text-white transition duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">Contact Us</button>
                             </Link>
                           
                        </nav>
                    </div>
                )}
            </header>

        </>
    );
};

export default NavBar;
