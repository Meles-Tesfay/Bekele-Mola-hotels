import React, { useState } from 'react'
import { assets, cities } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { resolveImageUrl } from '../utils/resolveImage'

const Hero = () => {

    const { navigate, user, axios, setSearchedCities } = useAppContext()
    const [destination, setDestination] = useState("")
    const onSearch = async (e) => {
        e.preventDefault()
        navigate(`/rooms?destination=${destination}`)

        if (user) {
            await axios.post('/api/user/store-recent-search', { recentSearchedCity: destination });
            setSearchedCities((prev) => {
                const updated = [...prev, destination];
                if (updated.length > 3) updated.shift();
                return updated;
            })
        }
    }

    return (
        <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24
         xl:px-32 pt-32 pb-10 text-white bg-no-repeat bg-cover bg-center min-h-screen relative overflow-hidden'
         style={{ backgroundImage: `url(${resolveImageUrl('/src/assets/adama/10016.jpg')})` }}>
            {/* Gradient overlay for text readability while keeping the image vibrant on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 w-full animate-fade-in-up mt-10">
                <h1 className='font-playfair text-4xl md:text-6xl lg:text-[72px] lg:leading-[80px] font-extrabold max-w-3xl drop-shadow-2xl leading-tight group/title cursor-default transition-all duration-500 hover:translate-x-3 hover:drop-shadow-[0_0_30px_rgba(73,185,255,0.4)]'>
                    Welcome to <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49B9FF] to-blue-200 transition-all duration-500 group-hover/title:from-[#FF4D00] group-hover/title:to-[#FF8C00]">Bekele Mola Hotels</span>
                </h1>
                
                <p className='max-w-xl mt-6 text-base md:text-xl text-white font-medium drop-shadow-lg leading-relaxed transition-all duration-500 hover:translate-x-1 cursor-default'>
                    Experience unparalleled hospitality across Ethiopia. From urban elegance to tranquil lakeside retreats, discover comfort at its finest.
                </p>

                <div className='inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-transparent px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/20 transition-all cursor-default mt-5 shadow-sm'>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#49B9FF] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#49B9FF]"></span>
                    </span>
                    The Ultimate Hotel Experience
                </div>
                
                {/* Premium Widget Search Bar */}
                <form onSubmit={onSearch} className='bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-[2rem] p-2.5 mt-8 flex flex-col md:flex-row items-stretch gap-2.5 w-full max-w-[960px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)] relative z-20 border border-transparent'>
                    
                    {/* Destination */}
                    <div className='flex-1 w-full bg-gray-50/80 hover:bg-[#e8f4ff] border border-transparent hover:border-blue-300 rounded-[1.5rem] px-4 py-3 transition-all duration-300 group cursor-text focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(73,185,255,0.2)]'>
                        <div className='flex items-center gap-2 mb-1'>
                            <img src={assets.locationIcon} alt="Location" className='w-3.5 h-3.5 opacity-50 group-hover:opacity-80 group-focus-within:opacity-100 group-focus-within:scale-110 group-hover:scale-110 transition-all duration-300' />
                            <label htmlFor="destinationInput" className='text-[10px] font-bold text-gray-400 uppercase tracking-wider cursor-text group-hover:text-blue-500 transition-colors duration-300'>Destination</label>
                        </div>
                        <div className="relative">
                            <input onChange={e => setDestination(e.target.value)} value={destination} list='destinations' id="destinationInput" type="text" className="w-full text-sm md:text-base font-bold text-gray-900 placeholder-gray-400 outline-none bg-transparent truncate" placeholder="Where are you going?" required />
                            <datalist id='destinations'>
                                {cities.map((city, index) => (
                                    <option value={city} key={index} />
                                ))}
                            </datalist>
                        </div>
                    </div>

                    {/* Check In */}
                    <div className='flex-1 w-full bg-gray-50/80 hover:bg-[#e8f4ff] border border-transparent hover:border-blue-300 rounded-[1.5rem] px-4 py-3 transition-all duration-300 group cursor-text focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(73,185,255,0.2)]'>
                        <div className='flex items-center gap-2 mb-1'>
                            <img src={assets.calenderIcon} alt="Check In" className='w-3.5 h-3.5 opacity-50 group-hover:opacity-80 group-focus-within:opacity-100 group-hover:scale-110 group-focus-within:scale-110 transition-all duration-300' />
                            <label htmlFor="checkIn" className='text-[10px] font-bold text-gray-400 uppercase tracking-wider cursor-text group-hover:text-blue-500 transition-colors duration-300'>Check in</label>
                        </div>
                        <input id="checkIn" type="date" className="w-full text-sm md:text-base font-bold text-gray-900 outline-none bg-transparent [color-scheme:light] cursor-text" />
                    </div>

                    {/* Check Out */}
                    <div className='flex-1 w-full bg-gray-50/80 hover:bg-[#e8f4ff] border border-transparent hover:border-blue-300 rounded-[1.5rem] px-4 py-3 transition-all duration-300 group cursor-text focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(73,185,255,0.2)]'>
                        <div className='flex items-center gap-2 mb-1'>
                            <img src={assets.calenderIcon} alt="Check Out" className='w-3.5 h-3.5 opacity-50 group-hover:opacity-80 group-focus-within:opacity-100 group-hover:scale-110 group-focus-within:scale-110 transition-all duration-300' />
                            <label htmlFor="checkOut" className='text-[10px] font-bold text-gray-400 uppercase tracking-wider cursor-text group-hover:text-blue-500 transition-colors duration-300'>Check out</label>
                        </div>
                        <input id="checkOut" type="date" className="w-full text-sm md:text-base font-bold text-gray-900 outline-none bg-transparent [color-scheme:light] cursor-text" />
                    </div>

                    {/* Guests & Button Container */}
                    <div className='flex items-stretch w-full md:w-auto gap-2.5'>
                        <div className='flex-1 md:w-32 bg-gray-50/80 hover:bg-[#e8f4ff] border border-transparent hover:border-blue-300 rounded-[1.5rem] px-4 py-3 transition-all duration-300 group cursor-text focus-within:bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(73,185,255,0.2)]'>
                            <div className='flex items-center gap-2 mb-1'>
                                <img src={assets.guestsIcon} alt="Guests" className='w-3.5 h-3.5 opacity-50 group-hover:opacity-80 group-focus-within:opacity-100 group-hover:scale-110 group-focus-within:scale-110 transition-all duration-300' />
                                <label htmlFor="guests" className='text-[10px] font-bold text-gray-400 uppercase tracking-wider cursor-text group-hover:text-blue-500 transition-colors duration-300'>Guests</label>
                            </div>
                            <input min={1} max={4} id="guests" type="number" className="w-full text-sm md:text-base font-bold text-gray-900 placeholder-gray-400 outline-none bg-transparent" placeholder="0" />
                        </div>
                        
                        <button className='bg-gradient-to-br from-[#49B9FF] to-blue-600 w-full md:w-16 rounded-[1.5rem] shadow-lg shadow-blue-500/40 hover:shadow-[0_0_25px_rgba(73,185,255,0.7)] hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center flex-shrink-0 h-full py-3 md:py-0 group/btn'>
                            <img src={assets.searchIcon} alt="Search" className='w-5 h-5 group-hover/btn:rotate-12 group-hover/btn:scale-125 transition-all duration-500' style={{ filter: 'brightness(0) invert(1)' }} />
                            <span className="md:hidden ml-2 font-bold text-white tracking-wide">Search</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero