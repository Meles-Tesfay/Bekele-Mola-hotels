import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { resolveImageUrl } from '../utils/resolveImage'

// Color palette for card accents per index (badges & bottom line only)
const cardAccents = [
    { badge: 'from-amber-400 to-orange-500' },
    { badge: 'from-violet-500 to-purple-600' },
    { badge: 'from-emerald-400 to-teal-500' },
    { badge: 'from-[#49B9FF] to-blue-600' },
]

const HotelCard = ({ room, index }) => {
    const { currency } = useAppContext()
    const accent = cardAccents[index % cardAccents.length]

    return (
        <Link
            to={'/rooms/' + room._id}
            onClick={() => scrollTo(0, 0)}
            key={room._id}
            className="group relative w-full rounded-3xl overflow-hidden bg-white text-gray-500/90 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(73,185,255,0.2)]"
        >
            {/* Image with zoom effect */}
            <div className="relative overflow-hidden h-52">
                <img
                    src={resolveImageUrl(room.images[0])}
                    alt={room.hotel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Best Seller Badge */}
                {index % 2 === 0 && (
                    <div className={`absolute top-3 left-3 bg-gradient-to-r ${accent.badge} px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Best Seller
                    </div>
                )}

                {/* Floating price tag on image hover */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="font-bold text-gray-900 text-sm">{currency}{room.pricePerNight}</span>
                    <span className="text-gray-400 text-xs">/night</span>
                </div>
            </div>

            {/* Card Body */}
            <div className='p-5'>
                <div className='flex items-start justify-between mb-2'>
                    <p className='font-playfair text-lg font-bold text-gray-900 leading-tight'>{room.title || `Room ${index + 1}`}</p>
                    <div className='flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-lg flex-shrink-0 ml-2'>
                        <img src={assets.starIconFilled} alt="star" className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold text-amber-600">4.5</span>
                    </div>
                </div>

                {room.description && (
                    <p className="text-xs text-gray-400 mb-2 line-clamp-2">{room.description}</p>
                )}
                <div className='flex items-center gap-1.5 text-xs text-gray-400 mb-4'>
                    <img src={assets.locationIcon} alt="location" className="w-3.5 h-3.5 opacity-60" />
                    <span className="truncate">{room.hotel?.city} · {room.hotel?.name}</span>
                </div>

                <div className='flex items-center justify-between'>
                    <div>
                        <span className='text-2xl font-bold text-gray-900'>{currency}{room.pricePerNight}</span>
                        <span className="text-gray-400 text-xs ml-1">/night</span>
                    </div>

                    {/* Unified Book Now button — pulse ring + shimmer + arrow animation */}
                    <div className="relative group/btn">
                        {/* Expanding ring on hover */}
                        <span className="absolute inset-0 rounded-xl bg-[#49B9FF]/25 opacity-0 scale-100 group-hover/btn:opacity-100 group-hover/btn:scale-[1.6] transition-all duration-500 pointer-events-none" />
                        <button className="relative px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#49B9FF] to-blue-600 shadow-md shadow-blue-300/40 transition-all duration-300 group-hover/btn:shadow-[0_0_20px_rgba(73,185,255,0.55)] group-hover/btn:-translate-y-0.5 active:scale-95 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-1.5">
                                Book Now
                                <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            {/* Shimmer sweep */}
                            <div className="absolute inset-0 bg-white/25 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom colorful accent line sweeps in on hover */}
            <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accent.badge} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
        </Link>
    )
}

export default HotelCard