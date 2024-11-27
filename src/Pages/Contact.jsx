import React from "react";
import NavBar from "../Components/NavBar";
import backgroundImage from '../assets/about-3.jpg'
import Footer from './../Components/Footer';
import ServicesMenu from './../Components/ServiceMenue';

const Contact = () => {
  return (
    <>
        <NavBar/>

        <div className="bg-cover bg-center h-[400px] relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Optional dark overlay */}

                {/* Flexbox to center the content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <p className="text-2xl font-bold text-white sm:text-6xl md:text-5xl">
                        CONTACT US
                        <br />
                        <span className="block text-xl">
                            <p className="text-base tracking-wider text-white md:text-lg">Home / Contact Us</p>
                        </span>
                    </p>
                </div>
            </div>


        <div className="py-5 overflow-hidden bg-gray-100 contact">
        <div className="container px-4 py-5 mx-auto">
            {/* Contact Section */}
            <div className="grid grid-cols-1 gap-8 m-10 mb-10 lg:grid-cols-2">
            {/* Quick Contact Section */}
            <div className="fadeInLeft wow" data-wow-delay="0.1s">
                <div className="p-6 border border-gray-300 rounded-lg shadow-sm bg-gradient-to-br from-purple-50 via-purple-200 to-blue-200">
                <h5 className="pl-3 mb-4 text-lg font-semibold text-purple-700 border-l-4 text-primary border-primary">
                    Quick Contact
                </h5>
                <h1 className="mb-4 text-4xl font-bold">
                    Have Questions? Don&apos;t Hesitate to Contact Us
                </h1>
                <p className="mb-6 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quaerat totam deserunt tempora. Tempore neque necessitatibus
                    corporis error earum sint quae?
                </p>
                <div className="flex items-start pb-4 mb-6 border-b">
                    <i className="p-4 text-3xl bg-purple-700 rounded-full fas fa-map-marked-alt text-primary"></i>
                    <div className="ml-4">
                    <h5 className="text-lg font-bold">Location</h5>
                    <p className="text-gray-600">
                    93/1 HAKMANA ROAD MATARA

                    </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex items-start">
                    <i className="text-4xl text-purple-700 fas fa-tty text-primary"></i>
                    <div className="ml-4">
                        <h5 className="mb-2 font-bold">Quick Contact</h5>
                        <p className="mb-1 text-gray-600">
                        <span className="font-medium">Phone:</span>{" "}
                        <a href="#" className="text-primary">
                        0701 585500 / 0710 354270
                        </a>
                        </p>
                        <p className="text-gray-600">
                        <span className="font-medium">Email:</span>{" "}
                        <a href="#" className="text-primary">
                        sasen.migration2005@gmail.com

                        </a>
                        </p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <i className="text-4xl text-purple-700 fas fa-clone text-primary"></i>
                    <div className="ml-4">
                        <h5 className="mb-2 font-bold">Opening Hrs</h5>
                        <p className="mb-1 text-gray-600">
                        <span className="font-medium">Mon - Fri:</span>{" "}
                        09.00 am to 07.00 pm
                        </p>
                        <p className="text-gray-600">
                        <span className="font-medium">Saturday:</span>{" "}
                        10.00 am to 05.00 pm
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Send Your Message Form */}
            <div className="fadeInRight wow" data-wow-delay="0.3s">
                <div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gradient-to-br from-purple-50 via-purple-200 to-blue-200">
                <h5 className="pl-3 mb-4 text-lg font-semibold text-purple-700 border-l-4 text-primary border-primary">
                    Let’s Connect
                </h5>
                <h1 className="mb-4 text-4xl font-bold">Send Your Message</h1>
                <form>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block font-medium">
                        Your Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        className="block w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium">
                        Your Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        className="block w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block font-medium">
                        Your Phone
                        </label>
                        <input
                        type="tel"
                        id="phone"
                        className="block w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="project" className="block font-medium">
                        Your Project
                        </label>
                        <input
                        type="text"
                        id="project"
                        className="block w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    </div>
                    <div className="mt-4">
                    <label htmlFor="subject" className="block font-medium">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="block w-full px-3 py-2 border rounded-md"
                    />
                    </div>
                    <div className="mt-4">
                    <label htmlFor="message" className="block font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="block w-full px-3 py-2 border rounded-md"
                        rows="5"
                    ></textarea>
                    </div>
                    <div className="mt-6">
                    <button className="px-5 py-3 text-white bg-purple-700 rounded-md bg-primary hover:bg-primary-dark">
                        Send Message
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>

        {/* Map Section */}
        <div className="px-2 mb-10 md:px-10 lg:px-24">
            <div className="mt-16">
                        <h3 className="mb-6 text-3xl font-bold text-center text-purple-700">Our Location</h3>
                        <div className="relative w-full h-64 overflow-hidden bg-gray-300 rounded-lg shadow-lg md:h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63492.95565772318!2d80.55074799999998!3d5.951992199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae138d151937cd9%3A0x1d711f45897009a3!2sMatara!5e0!3m2!1sen!2slk!4v1730884734146!5m2!1sen!2slk"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Our Location"
                            ></iframe>
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-100 to-transparent opacity-80"></div>
                        </div>
                    </div>
                </div>
        <ServicesMenu/>
        <Footer/>
    </>
  );
};

export default Contact;
