import React from 'react'
import { testimonials } from '../assets/assets';

const Testimonial = () => {
    return (
        <div className='relative flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-gray-50/50'>
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16 relative z-10 group/header">
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 mb-6 uppercase tracking-widest shadow-sm hover:scale-105 hover:bg-blue-100 transition-all duration-300 cursor-default">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>
                    Testimonials
                </div>
                <h2 className='font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-transform duration-500 group-hover/header:scale-105'>
                    What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 transition-all duration-1000 cursor-default">Guests Say</span>
                </h2>
                <div className="max-w-2xl relative">
                    <p className='text-gray-500 text-lg leading-relaxed transform transition-all duration-500 hover:text-gray-800 hover:-translate-y-1 hover:shadow-sm p-2 rounded-xl'>
                        Discover why travelers across Ethiopia consistently choose Bekele Mola Hotels for their comfortable and memorable stays.
                    </p>
                </div>
            </div>

            {/* Testimonial Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto'>
                {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className='group relative p-8 rounded-3xl bg-white border border-gray-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between h-full overflow-hidden cursor-default'>
                        
                        {/* Animated Gradient Background on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-indigo-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:via-indigo-50/30 group-hover:to-purple-50/50 transition-colors duration-700 pointer-events-none"></div>

                        {/* Top Colorful Border */}
                        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-${index % 2 === 0 ? 'left' : 'right'}`}></div>

                        <div className="relative z-10">
                            {/* Quote Icon */}
                            <div className="text-gray-200 mb-6 group-hover:text-blue-500 transition-colors duration-500 transform group-hover:scale-125 group-hover:rotate-12 origin-top-left">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            
                            <p className='text-gray-600 text-base leading-relaxed mb-8 italic group-hover:text-gray-900 transition-colors duration-300'>
                                "{testimonial.review}"
                            </p>
                        </div>

                        {/* Author Info */}
                        <div className='flex items-center gap-4 pt-6 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-300 relative z-10'>
                            <div className="relative">
                                <img className='w-14 h-14 rounded-full object-cover border-2 border-transparent group-hover:border-blue-400 transition-all duration-500 group-hover:rotate-6' src={testimonial.image} alt={testimonial.name} />
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100"></div>
                            </div>
                            <div>
                                <p className='font-playfair text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300'>{testimonial.name}</p>
                                <p className='text-gray-500 text-sm font-medium mb-1 group-hover:text-indigo-500 transition-colors duration-300'>{testimonial.address}</p>
                                <div className="flex gap-1 group-hover:animate-pulse">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-orange-500 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial
