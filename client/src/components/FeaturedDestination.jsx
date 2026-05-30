import React from 'react'
import HotelCard from './HotelCard'
import { useAppContext } from '../context/AppContext'

const FeaturedDestination = () => {
    const { rooms, navigate } = useAppContext()

    return rooms.length > 0 && (
        <div className='relative flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 py-24 overflow-hidden bg-white group/section'>
            {/* Animated background blobs — move subtly on section hover */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-1000 group-hover/section:-translate-x-1/3 group-hover/section:bg-blue-200/40"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none transition-all duration-1000 group-hover/section:translate-x-1/3 group-hover/section:bg-cyan-200/40"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-1000 group-hover/section:scale-125 group-hover/section:bg-purple-200/25"></div>

            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-14 relative z-10">

                {/* Badge — floats up and glows on hover */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 px-5 py-2 rounded-full text-sm font-medium text-blue-600 mb-6 shadow-sm cursor-default
                    transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_8px_25px_rgba(73,185,255,0.35)] hover:border-blue-400 hover:bg-white hover:text-blue-700">
                    <span className="w-2 h-2 rounded-full bg-[#49B9FF] animate-pulse"></span>
                    ✦ Handpicked For You ✦
                </div>

                {/* Title — "Featured" lifts left, "Destinations" shimmers on hover */}
                <h2 className='font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-5 cursor-default'>
                    <span className="inline-block transition-all duration-500 hover:-translate-y-1 hover:text-gray-700">Featured</span>
                    {' '}
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#49B9FF] to-blue-700 transition-all duration-500 hover:-translate-y-1 hover:from-[#FF4D00] hover:to-[#FF8C00] hover:drop-shadow-[0_0_12px_rgba(255,77,0,0.6)]">
                        Rooms
                    </span>
                </h2>

                {/* Animated divider — expands outward on hover */}
                <div className="flex items-center gap-3 mb-6 group/divider cursor-default">
                    <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#49B9FF] transition-all duration-700 group-hover/divider:w-24 group-hover/divider:shadow-[0_0_8px_rgba(73,185,255,0.8)]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#49B9FF] transition-all duration-500 group-hover/divider:scale-150 group-hover/divider:shadow-[0_0_14px_rgba(73,185,255,1)] group-hover/divider:bg-white group-hover/divider:ring-4 group-hover/divider:ring-[#49B9FF]"></div>
                    <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#49B9FF] transition-all duration-700 group-hover/divider:w-24 group-hover/divider:shadow-[0_0_8px_rgba(73,185,255,0.8)]"></div>
                </div>

                {/* Description — bold glass card reveal on hover */}
                <div className="relative group/desc cursor-default max-w-2xl">
                    {/* Background glass reveal */}
                    <div className="absolute inset-0 -m-4 rounded-2xl bg-gradient-to-r from-blue-50/0 via-cyan-50/0 to-blue-50/0 scale-95 opacity-0 group-hover/desc:opacity-100 group-hover/desc:scale-100 group-hover/desc:from-blue-50/80 group-hover/desc:via-cyan-50/60 group-hover/desc:to-blue-50/80 transition-all duration-500 border border-transparent group-hover/desc:border-blue-100 backdrop-blur-sm"></div>
                    <p className='relative z-10 text-gray-600 text-base md:text-lg font-medium leading-relaxed transition-all duration-500 group-hover/desc:text-gray-900 group-hover/desc:text-xl group-hover/desc:font-semibold px-4 py-2'>
                        Browse our handpicked selection of rooms across all Bekele Mola Hotels branches, each offering top-quality comfort and authentic Ethiopian warmth.
                    </p>
                    {/* Bottom accent line that grows on hover */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[#49B9FF] to-blue-600 rounded-full group-hover/desc:w-3/4 transition-all duration-700"></div>
                </div>
            </div>

            {/* Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 w-full relative z-10'>
                {rooms.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} room={room} index={index} />
                ))}
            </div>

            {/* View All Button — outline style with fill-on-hover */}
            <div className="relative mt-16 group/cta cursor-pointer" onClick={() => { navigate('/rooms'); scrollTo(0, 0) }}>
                {/* Outer glow ring that appears on hover */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#49B9FF] to-blue-600 opacity-0 group-hover/cta:opacity-40 blur-md transition-all duration-500"></div>

                <button className="relative flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold text-base border-2 border-[#49B9FF] text-[#49B9FF] bg-transparent overflow-hidden transition-all duration-300 group-hover/cta:text-white group-hover/cta:border-blue-600 group-hover/cta:-translate-y-1 active:scale-95">
                    {/* Fill block slides in from left on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#49B9FF] to-blue-600 translate-x-[-101%] group-hover/cta:translate-x-0 transition-transform duration-500 ease-out"></span>
                    <span className="relative z-10 flex items-center gap-3">
                        Explore All Rooms
                        <span className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-[#49B9FF] group-hover/cta:border-white transition-all duration-300 group-hover/cta:bg-white/20">
                            <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default FeaturedDestination
