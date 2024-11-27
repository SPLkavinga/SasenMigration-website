import React, { useState } from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaTimes } from 'react-icons/fa';
import backgroundImage from '../assets/about-3.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/sasen.jpg'
import NavBar from './../Components/NavBar';
import teamImage1 from '../assets/team1.jpg';
import teamImage2 from '../assets/team2.png';
import teamImage3 from '../assets/team3.png';

const teamMembers = [
    {
        id: 1,
        name: "John Doe",
        position: "President",
        image: teamImage1,
        description: "John has over 20 years of experience in leadership and is committed to steering the team towards success.",
        facebook: "https://facebook.com",
        whatsapp: "https://wa.me/123456789",
        instagram: "https://instagram.com",
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Vice President",
        image: teamImage2,
        description: "Jane excels in operational strategy, ensuring that every project is executed smoothly and efficiently.",
        facebook: "https://facebook.com",
        whatsapp: "https://wa.me/123456789",
        instagram: "https://instagram.com",
    },
    {
      id: 3,
      name: "Jane Smith",
      position: "Vice President",
      image: teamImage3,
      description: "Jane excels in operational strategy, ensuring that every project is executed smoothly and efficiently.",
      facebook: "https://facebook.com",
      whatsapp: "https://wa.me/123456789",
      instagram: "https://instagram.com",
  },
    
];

const AboutUs= () =>  {
    const [selectedMember, setSelectedMember] = useState(null);

    const openModal = (member) => setSelectedMember(member);
    const closeModal = () => setSelectedMember(null);
    return ( 
        <>
            <NavBar/>
            <div className="bg-cover bg-center h-[400px] relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Optional dark overlay */}

                {/* Flexbox to center the content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <p className="text-2xl font-bold text-white sm:text-6xl md:text-5xl">
                        ABOUT US
                        <br />
                        <span className="block text-xl">
                            <p className="text-base tracking-wider text-white md:text-lg">Home / About Us</p>
                        </span>
                    </p>
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
              <div className="lg:col-span-7">
                <div className="p-6 border border-gray-300 rounded-lg shadow-sm bg-gradient-to-br from-purple-50 via-purple-200 to-blue-200">
                  <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-800 lg:text-4xl">
                    We’re Trusted Immigration Consultant Agency.
                  </h1>
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
                        CALL US:  0701 585500 / 0710 354270

                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Vision and Mission Section */}
          <section className="py-16 bg-gray-100">
              <div className="grid grid-cols-1 gap-12 px-1 mx-auto max-w-7xl lg:grid-cols-2">
                {/* Vision and Mission Section */}
                <div className="p-8 border border-gray-300 rounded-lg shadow-sm bg-gradient-to-br from-purple-50 via-purple-200 to-blue-200">
                  <h2 className="mb-4 text-4xl font-semibold text-purple-500">Our Vision</h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    To create a strong community of past students who support each other and give back to their schools, helping future generations succeed.
                  </p>
                  <h2 className="mb-4 text-4xl font-semibold text-indigo-500">Our Mission</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    To connect alumni and offer support through mentorship, career guidance, and networking. We aim to give back to our schools with financial help, improved facilities, and scholarships, ensuring they remain great places for learning.
                  </p>
                </div>

                {/* Image Section */}
                <div className="flex items-center justify-center">
                  <img src={img1} alt="Vision and Mission" className="rounded-lg shadow-md max-w-full lg:max-w-[90%]" />
                </div>
              </div>
          </section>






            <section className="py-16 text-center bg-white">
                <h2 className="mb-10 text-4xl font-semibold text-yellow-500">Our Team</h2>
                <div className="grid max-w-6xl grid-cols-1 gap-8 px-6 mx-auto sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            onClick={() => openModal(member)}
                            className="p-6 transition-transform bg-white shadow-lg cursor-pointer rounded-2xl hover:scale-105"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                            />
                            <h3 className="mb-1 text-xl font-bold text-gray-800">{member.name}</h3>
                            <p className="text-gray-500">{member.position}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Modal for Team Member Details */}
            {selectedMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="relative w-11/12 p-8 bg-white shadow-2xl rounded-2xl sm:w-96">
                        <button
                            className="absolute text-2xl text-gray-400 top-4 right-4 hover:text-gray-600"
                            onClick={closeModal}
                        >
                            <FaTimes />
                        </button>
                        <div className="text-center">
                            <img
                                src={selectedMember.image}
                                alt={selectedMember.name}
                                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                            />
                            <h3 className="mb-2 text-3xl font-bold text-gray-800">{selectedMember.name}</h3>
                            <p className="mb-2 text-lg text-gray-500">{selectedMember.position}</p>
                            <p className="mb-6 text-gray-600">{selectedMember.description}</p>
                            <div className="flex justify-center space-x-6 text-gray-400">
                                <a href={selectedMember.facebook} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-2xl hover:text-blue-500" />
                                </a>
                                <a href={selectedMember.whatsapp} target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className="text-2xl hover:text-green-500" />
                                </a>
                                <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-2xl hover:text-pink-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
     );
}

export default AboutUs;
