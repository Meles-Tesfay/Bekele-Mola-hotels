import React from 'react';
import { resolveImageUrl } from '../utils/resolveImage';
import executiveLoungeImg from '../assets/roomImg2.png';

const experiences = [
    {
        id: 1,
        title: "Spa & Wellness",
        description: "Rejuvenate your mind and body with our award-winning signature spa therapies.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        )
    },
    {
        id: 2,
        title: "Authentic Dining",
        description: "Savor exquisite culinary creations including traditional Ethiopian cuisine like Doro Wot and fresh local Injera.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" /></svg>
        )
    },
    {
        id: 3,
        title: "Fitness Center",
        description: "Maintain your routine in our state-of-the-art gym equipped with premium machines.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
        )
    },
    {
        id: 4,
        title: "Rooftop Pool & Bar",
        description: "Relax by the infinity pool with panoramic city views and refreshing cocktails.",
        image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?w=800&q=80",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
        )
    },
    {
        id: 5,
        title: "Executive Lounge",
        description: "A quiet space for work or relaxation offering complimentary refreshments and Wi-Fi.",
        image: executiveLoungeImg,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        )
    },
    {
        id: 6,
        title: "Event Spaces",
        description: "Host your meetings, conferences, and celebrations in our elegant and versatile venues.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        )
    }
];

const Experience = () => {
    return (
        <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50/50 min-h-screen">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16 relative z-10 group/header">
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 mb-6 uppercase tracking-widest shadow-sm hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-default">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>
                    Immersive Activities
                </div>
                <h2 className='font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-transform duration-500 group-hover/header:scale-105 cursor-default'>
                    Unforgettable <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#49B9FF] to-blue-700 transition-all duration-500 hover:-translate-y-1 hover:from-[#FF4D00] hover:to-[#FF8C00] hover:drop-shadow-[0_0_12px_rgba(255,77,0,0.6)]">Experiences</span>
                </h2>
                <div className="max-w-2xl relative">
                    <p className='text-gray-500 text-lg leading-relaxed transform transition-all duration-500 hover:text-gray-800 hover:-translate-y-1 hover:shadow-sm p-2 rounded-xl'>
                        Elevate your stay with our curated selection of breathtaking activities, from traditional coffee ceremonies to serene lake tours and world-class culinary adventures.
                    </p>
                </div>
            </div>

            {/* Experience Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
                {experiences.map((exp, index) => (
                    <div key={exp.id} className="group relative rounded-[2rem] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(255,77,0,0.2)] transition-all duration-500 hover:-translate-y-4 border border-gray-100 cursor-pointer flex flex-col h-full">
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img src={resolveImageUrl(exp.image)} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            
                            {/* Animated Glowing Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
                            
                            {/* Icon floating */}
                            <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:bg-[#FF4D00] group-hover:border-[#FF8C00] group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,77,0,0.6)] group-hover:rotate-12">
                                {exp.icon}
                            </div>

                            {/* Title inside image area that moves */}
                            <div className="absolute bottom-4 left-6 z-20 transition-transform duration-500 group-hover:-translate-y-2">
                                <h3 className="font-playfair text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF4D00] group-hover:to-[#FFD194] transition-all duration-300">{exp.title}</h3>
                                <div className="h-1 w-12 bg-[#49B9FF] group-hover:bg-[#FF4D00] transition-colors duration-500 rounded-full group-hover:w-24"></div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 relative bg-white z-20 flex-1 flex flex-col justify-between">
                            {/* Hover Gradient Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-orange-50/40 group-hover:to-red-50/40 transition-colors duration-500 pointer-events-none"></div>
                            
                            <p className="text-gray-600 leading-relaxed relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                                {exp.description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-[#49B9FF] font-semibold group-hover:text-[#FF4D00] transition-colors duration-300 relative z-10">
                                <span>Discover More</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </div>
                        </div>
                        
                        {/* Bottom Colorful Border */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF4D00] to-[#FF8C00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-${index % 2 === 0 ? 'left' : 'right'} z-30`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
