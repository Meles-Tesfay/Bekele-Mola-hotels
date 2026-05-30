import React from 'react';
import { assets } from '../assets/assets';
import roomImg1 from '../assets/roomImg1.png';
import roomImg2 from '../assets/roomImg2.png';
import roomImg3 from '../assets/roomImg3.png';
import exclusiveOfferCardImg1 from '../assets/exclusiveOfferCardImg1.png';

const values = [
    {
        id: 1,
        title: "Uncompromising Luxury",
        description: "We believe that every detail matters. From thread counts to personalized services, we deliver a standard of luxury that exceeds expectations.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
        )
    },
    {
        id: 2,
        title: "Exceptional Service",
        description: "Our dedicated staff is committed to anticipating your needs and ensuring your stay is seamless, comfortable, and memorable.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
        )
    },
    {
        id: 3,
        title: "Sustainable Practices",
        description: "We are committed to eco-friendly operations, supporting local communities, and preserving the natural beauty of our surroundings.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
        )
    }
];

const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "50k+", label: "Happy Guests" },
    { number: "120+", label: "Luxury Rooms" },
    { number: "5", label: "Star Rating" },
];

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            
            {/* Hero Section */}
            <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
                    <div className="flex-1 group/header">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 mb-6 uppercase tracking-widest shadow-sm hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-default">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Our Story
                        </div>
                        <h1 className='font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-transform duration-500 group-hover/header:translate-x-2 cursor-default leading-tight'>
                            Authentic Ethiopian <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#49B9FF] to-blue-700 transition-all duration-500 hover:-translate-y-1 hover:from-[#FF4D00] hover:to-[#FF8C00] hover:drop-shadow-[0_0_12px_rgba(255,77,0,0.6)]">Hospitality</span> <br/> Since 1968
                        </h1>
                        <p className='text-gray-500 text-lg leading-relaxed mb-6'>
                            Founded with a vision to create unparalleled travel experiences, Bekele Mola Hotels has grown into a premier destination for discerning travelers across Ethiopia. We blend modern elegance with authentic cultural charm, offering a sanctuary where every detail is meticulously crafted.
                        </p>
                        <p className='text-gray-500 text-lg leading-relaxed mb-8'>
                            Whether you are visiting for a quiet retreat or a grand celebration, our commitment remains the same: to provide an extraordinary environment that feels like a home away from home.
                        </p>
                        <button className="bg-gray-900 hover:bg-[#FF4D00] text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-[0_8px_25px_rgba(255,77,0,0.4)] hover:-translate-y-1">
                            Explore Our Journey
                        </button>
                    </div>
                    
                    {/* Image Collage */}
                    <div className="flex-1 relative w-full h-[600px] flex gap-4">
                        <div className="flex flex-col gap-4 w-1/2 pt-12">
                            <img src={roomImg1} alt="Luxury Room" className="w-full h-64 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer" />
                            <img src={exclusiveOfferCardImg1} alt="Hotel View" className="w-full h-48 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer" />
                        </div>
                        <div className="flex flex-col gap-4 w-1/2">
                            <img src={roomImg2} alt="Lobby" className="w-full h-48 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer" />
                            <img src={roomImg3} alt="Dining" className="w-full h-72 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 py-16 px-6 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group cursor-default">
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF4D00] group-hover:to-[#FFD194] transition-all duration-500 group-hover:scale-110 inline-block">{stat.number}</h3>
                            <p className="text-gray-300 text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-24 px-6 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4D00]/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 rounded-3xl pointer-events-none"></div>
                    <img src={assets.regImage} alt="Mission" className="w-full h-[500px] object-cover rounded-3xl shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]" />
                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 z-20 group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Certified Luxury</h4>
                            <p className="text-sm text-gray-500">Award Winning</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className='font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Mission</span>
                    </h2>
                    <p className='text-gray-500 text-lg leading-relaxed mb-6'>
                        We exist to elevate the art of Ethiopian hospitality. Our mission is to provide an oasis of comfort and elegance for travelers seeking an escape from the ordinary, exploring the beauty of Ethiopia. We believe that a hotel should be more than just a place to sleep—it should be a cultural destination in itself.
                    </p>
                    <p className='text-gray-500 text-lg leading-relaxed mb-8'>
                        By combining world-class amenities with a deep respect for our local culture and environment, we create spaces where guests can truly unwind, connect, and be inspired.
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-[#FF4D00] to-[#FF8C00] rounded-full"></div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="bg-gray-50 py-24 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className='font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-[#FF4D00] hover:to-[#FF8C00] transition-all duration-500 cursor-default">Values</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            The principles that guide us in delivering exceptional experiences every single day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((val) => (
                            <div key={val.id} className="group relative bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(255,77,0,0.1)] transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-default">
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-red-50/0 group-hover:from-orange-50/50 group-hover:to-red-50/30 transition-colors duration-500 pointer-events-none"></div>
                                
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-blue-50 text-[#49B9FF] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF4D00] group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-sm group-hover:shadow-[0_8px_20px_rgba(255,77,0,0.4)]">
                                        {val.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FF4D00] transition-colors duration-300">
                                        {val.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {val.description}
                                    </p>
                                </div>
                                {/* Bottom Decorative Line */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#FF4D00] to-[#FF8C00] group-hover:w-full transition-all duration-700"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="py-24 px-6 md:px-16 lg:px-24 text-center">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 p-12 md:p-20 rounded-[3rem] border border-blue-100 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:bg-[#FF4D00] transition-colors duration-1000"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:bg-[#FF8C00] transition-colors duration-1000"></div>
                    
                    <h2 className='font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10'>
                        Ready to experience the extraordinary?
                    </h2>
                    <p className='text-gray-600 text-lg mb-10 relative z-10 max-w-2xl mx-auto'>
                        Join thousands of satisfied guests who have made Bekele Mola Hotels their preferred choice for luxury stays across Ethiopia. Your perfect room is just a click away.
                    </p>
                    <button className="relative z-10 bg-gradient-to-r from-[#49B9FF] to-blue-600 hover:from-[#FF4D00] hover:to-[#FF8C00] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-[0_10px_30px_rgba(255,77,0,0.5)] hover:-translate-y-1">
                        Book Your Stay Now
                    </button>
                </div>
            </div>

        </div>
    );
};

export default About;
