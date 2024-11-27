import React from "react";
import { Link } from "react-router-dom";
import { PhoneIcon } from '@heroicons/react/24/solid'
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import language from "../assets/japan word.png";
import student from "../assets/japan graduate.jpg";
import ssw from "../assets/ssw.jpg";
import visit from '../assets/arrival.webp'
import training from '../assets/train.jpg'
import bussiness from '../assets/business.jpg'
import NavBar from './../Components/NavBar';
import Footer from './../Components/Footer';
import { FaWhatsapp } from 'react-icons/fa';

const Services = () => {
  const navigate = useNavigate(); // Hook for navigation

  const services = [
    {
      title: "Japanese Language",
      icon: "A", // Replace this with an actual icon if available
      image: language,
      link: "/japanese-language", // Route for this card
    },
    {
      title: "Student Visa",
      icon: "📘", // Replace this with an actual icon if available
      image: student,
      link: "/student-visa", // Route for this card
    },
    {
      title: "SSW (Specified Skilled Workers)",
      icon: "👨‍🌾", // Replace this with an actual icon if available
      image: ssw,
      link: "/ssw", // Route for this card
    },
    {
        title: "Training Visa",
        icon: "👨‍🌾", // Replace this with an actual icon if available
        image: training,
        link: "/ssw", // Route for this card
      },
      {
        title: "Business Visa",
        icon: "👨‍🌾", // Replace this with an actual icon if available
        image: bussiness,
        link: "/ssw", // Route for this card
      },
      {
        title: "Visit Visa",
        icon: "👨‍🌾", // Replace this with an actual icon if available
        image: visit,
        link: "/ssw", // Route for this card
      },
      
      
  ];

  return (
    <>
        <NavBar/>
        <div className="flex justify-center mt-10">
        <div className="grid w-full max-w-screen-xl grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2 xl:gap-4">
            {services.map((service, index) => (
            <div
                key={index}
                className="relative w-full mx-auto overflow-hidden rounded-md group sm:w-72 lg:w-80 h-80" // Increased width here (w-72 to w-80)
            >
                {/* Image */}
                <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full"
                />
                
                {/* Title at the Bottom with Blurred Background */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-4 py-2 text-white bg-red-600 bg-opacity-80 backdrop-blur-md">
                {/* Icon */}
                <span className="text-xl font-bold">{service.icon}</span>
                {/* Title */}
                <h3 className="text-sm font-semibold">{service.title}</h3>
                </div>
                
                {/* Hover Overlay with "Read More" */}
                <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-red-600 opacity-0 bg-opacity-90 backdrop-blur-lg group-hover:opacity-100">
                <button
                    className="px-4 py-2 text-sm font-bold text-red-600 transition bg-white rounded shadow-md hover:bg-red-700 hover:text-white"
                    onClick={() => navigate(service.link)} // Navigate to the specific route
                >
                    Read More
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
        <br/>
        <br/>
        <div className="bg-slate-800 h-auto sm:h-[130px] w-full flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4 py-4">
            <p className="text-xl sm:text-3xl font-bold text-white text-center">
                Got a question? Drop us a message
            </p>
            <Link to="#" className="flex items-center px-4 sm:px-6 py-3 bg-green-600 rounded-lg">
                <PhoneIcon className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-white" />
                <span className="text-sm sm:text-base text-white">Whatsapp Us</span>
            </Link>
        </div>

        <Footer/>
    </>
  );
};

export default Services;
