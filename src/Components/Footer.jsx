// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaCalendarAlt, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-10 bg-purple-700">
        <div className="container mx-auto text-center">
            <h3 className="mb-4 text-2xl font-semibold text-blue-950">Connect with Us</h3>
            <p className="mb-6 text-blue-950">
                Follow us on social media to stay updated with our latest events and news.
            </p>
            <div className="flex justify-center mb-6 space-x-6">
                {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, index) => (
                    <motion.a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        className="text-2xl transition duration-300 text-blue-950 hover:text-blue-500"
                    >
                        <Icon />
                    </motion.a>
                ))}
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-8" />
            <span class="block text-sm text-blue-950 sm:text-center dark:text-blue-950">© 2024 <a href="https://nexcodia.com/" class="hover:underline">NexCodia Software Solutions</a>. All Rights Reserved.</span>
        </div>
    </footer>
    );
};

export default Footer;
