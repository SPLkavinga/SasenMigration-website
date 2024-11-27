import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar";
import backgroundImage from '../assets/carousel-1.jpg'
import img2 from '../assets/sasen.jpg'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './../Components/Footer';
import language from "../assets/japan word.png";
import student from "../assets/japan graduate.jpg";
import ssw from "../assets/ssw.jpg";


AOS.init();
  
const LandingPage = () => {

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
  ];
  return (
    <>
        <Navbar/>
        <div className="bg-cover bg-center h-[500px] relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Optional dark overlay */}

          {/* First text - Positioned slightly towards the top */}
          <p className="absolute w-full mt-10 mb-4 text-5xl font-bold text-center text-white sm:text-6xl md:text-7xl">
            SASEN MIGRATION
            <br />
            <span className="block text-xl">
              Solution For All Type Of Visas
            </span>
          </p>

          {/* Second text - Positioned below the first */}
          <p className="absolute w-full mb-4 text-2xl text-center text-white sm:text-3xl md:text-5xl top-2/4">
            Immigration Process
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl">
              Starts Here!
            </span>
          </p>

          {/* Contact Us Button */}
          <div className="absolute flex justify-center w-full bottom-10">
            <Link to="/contact" className="px-6 py-3 text-lg text-white transition-all duration-300 bg-purple-500 rounded-xl hover:bg-blue-600">
            Contact Us
            </Link>
          </div>
        </div>


          {/* About Us */}
          <div className="px-6 py-10 md:px-12 lg:px-20">
            <h5 className="text-2xl font-bold tracking-wide text-center text-purple-500 uppercase mb-7 text-primary">
              About the Company
            </h5>
            <div className="grid items-center grid-cols-1 gap-10 mx-auto max-w-7xl lg:grid-cols-12">
              {/* Left Section - Images */}
              <div className="relative lg:col-span-5">
                {/* Top Image */}
                <img
                  src={img2}
                  alt="Approved Document"
                  className="w-3/4 h-auto"
                />
              </div>

              {/* Right Section */}
              <div className="lg:col-span-7 ">
                <div className="p-6 border border-gray-300 rounded-lg shadow-sm bg-gradient-to-br from-purple-50 via-purple-200 to-blue-200">
                <div className="flex flex-col items-center text-gray-800">
                  <h1 className="mb-4 text-3xl font-bold leading-tight text-center lg:text-4xl">
                    We’re Trusted Immigration Consultant Agency.
                  </h1>
                  <span className="w-full mb-5 text-2xl font-bold text-left lg:w-auto">
                    Leader in Japanese Language education and career solutions in Sri Lanka.
                  </span>
                </div>

                  <p className="mb-6 text-gray-600">
                  The main focus of Sasen Migration is to provide comprehensive and simplified guidance for any applicant seeking
                   employment visas for Japan. The organization ensures all necessary consultation and assistance for applicants
                    to smoothly transition to Japan with a work visa and facilitates the process efficiently.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-200">
                        <i className="text-2xl text-purple-500 fas fa-map-marked-alt"></i>
                      </div>
                      <h5 className="ml-4 text-lg font-bold text-gray-800">
                        Best Immigration Resources
                      </h5>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-200">
                        <i className="text-2xl text-purple-500 fas fa-globe"></i>
                      </div>
                      <h5 className="ml-4 text-lg font-bold text-gray-800">
                        Return Visas Available
                      </h5>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 lg:flex-row lg:gap-56">
                    {/* Experience Box */}
                    <div className="flex items-center justify-center flex-shrink-0 p-6 bg-gray-800 rounded-md shadow-md">
                      <div className="text-center">
                        <i className="mb-3 text-4xl text-purple-500 fa-ticket-alt"></i>
                        <h1 className="text-4xl font-bold text-white">10</h1>
                        <p className="text-sm text-white">Years of Experience</p>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-3">
                      <p className="flex items-center text-sm font-bold text-gray-700">
                        <i className="mr-3 text-black fas fa-check-circle"></i>
                        Offer 100% Genuine Assistance
                      </p>
                      <p className="flex items-center text-sm font-bold text-gray-700">
                        <i className="mr-3 text-black fas fa-check-circle"></i>
                        It’s Faster & Reliable Execution
                      </p>
                      <p className="flex items-center text-sm font-bold text-gray-700">
                        <i className="mr-3 text-black fas fa-check-circle"></i>
                        Accurate & Expert Advice
                      </p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center mt-6">
                    <div className="flex items-center justify-center w-10 h-10 text-white bg-green-500 rounded-full shadow-md">
                      <i className="text-xl fas fa-phone-alt"></i>
                    </div>
                    <div className="ml-4">
                      <span className="block text-sm text-gray-700">
                        Have any questions?
                      </span>
                      <span className="text-lg font-bold text-black">
                        CALL US: 0701 585500 / 0710 354270
                      </span>
                    </div>
                  </div>
                </div>
                {/* See More Button */}
                  <div className="mt-10">
                      <Link
                        to="/About"
                        className="px-6 py-3 text-white bg-purple-500 rounded-lg shadow-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                      >
                        See More
                      </Link>
                    </div>
              </div>
            </div>
          </div>




      {/* Services */}
      <div className="py-12 bg-gray-100">
      <h5 className="px-3 mb-3 text-3xl font-bold text-center text-purple-500 ">Visa Categories</h5>
      <h5 className="px-3 text-2xl font-bold text-center text-black ">If you have got what it takes to become a student, </h5>
      <h5 className="px-3 text-2xl font-bold text-center text-black "> find your dream job or become a citizen in Japan,</h5>
      <h5 className="px-3 mb-3 text-2xl font-bold text-center text-black ">  this is the place for you.</h5>
      <div className="container px-4 mx-auto lg:px-12">
      <div className="flex justify-center">
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
          {/* See More Button */}
          <div className="flex justify-center mt-10">
            <Link
              to="/service"
              className="items-center px-6 py-3 text-white bg-purple-500 rounded-lg shadow-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              See More
            </Link>
          </div>

      </div>
    </div>


    <p className='mt-8 mb-5 text-3xl font-bold text-center text-purple-500 md:mb-5 md:text-center'>Why Choose Us</p>
    <p className='mt-4 mb-2 text-3xl font-bold text-center md:mb-5 md:text-center'>Offer Tailor Made Services That Our Client Requires</p>
    <br />
    <div class="flex flex-col items-center justify-center gap-8 mt-8 md:flex-row md:gap-4 xl:gap-6  ">
                
    <div className="relative w-[350px] h-[380px] bg-slate-50 rounded-lg hover:bg-gradient-to-br from-purple-50 via-purple-200 to-blue-200  transition duration-500 transform md:m-4 hover:scale-105">
      {/* Dollar Icon (SVG) */}
      <div className="w-[270px] h-[200px] mt-5 ml-10 flex justify-center items-center">
        <svg
          className="w-16 h-16 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 1v22M5 8h14M5 16h14"
        />
        </svg>
      </div>
        <p className="m-4 text-2xl font-bold text-center ">Cost Effective</p>
        <p className="p-2 m-2 text-center text-gray-600">
          Efficient and reliable taxi service for hassle-free transportation in Sri Lanka.
        </p>
      </div>


      <div class="relative w-[350px] h-[380px] bg-slate-50 rounded-lg hover:bg-gradient-to-br from-purple-50 via-purple-200 to-blue-200  transform transition duration-500 hover:scale-105" >
        <p className='m-4 text-2xl font-bold text-center md:m-4'>Business Transport</p>
        <img className='w-[270px] h-[200px] mt-5 ml-10' src='../assets/business.jpg' alt="" />
        <p className="p-2 m-2 text-center text-gray-600">Business transport: Experience comfort and professionalism while travelling in Sri Lanka.</p>
                   
      </div>

      <div class="relative w-[350px] h-[380px] bg-slate-50 rounded-lg hover:bg-gradient-to-br from-purple-50 via-purple-200 to-blue-200 transform transition duration-500 hover:scale-105" >
        <p className='m-4 text-2xl font-bold text-center md:m-4'>City Tour</p>
        <img className='w-[270px] h-[200px] mt-5 ml-11' src='../assets/city.jpg' alt="" />
        <p className="p-2 m-2 text-center text-gray-600">Swift city transport: Navigating Sri Lanka's urban landscapes with speed and ease</p>             
      </div>
                
    </div>
    <br />
    <br />
    <br />        
    <Footer/>
  </>
  );
};

export default LandingPage;
