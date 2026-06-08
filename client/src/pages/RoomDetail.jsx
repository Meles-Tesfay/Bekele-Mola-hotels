import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData } from '../assets/assets'
import StarRating from '../components/StarRating'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { resolveImageUrl } from '../utils/resolveImage'

const RoomDetail = () => {
    const { id } = useParams()
    const { rooms, user, axios, navigate, currency } = useAppContext()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [checkInDate, setCheckInDate] = useState(null)
    const [checkOutDate, setCheckOutDate] = useState(null)
    const [guests, setGuests] = useState(1)
    const [roomIndex, setRoomIndex] = useState(-1)

    const [isAvailable, setIsAvailable] = useState(false)

    // Check if the Room is Available
    const checkAvailability = async () => {
        try {
            // FIX: Ensure both dates are selected before proceeding
            if (!checkInDate || !checkOutDate) {
                toast.error('Please select both Check-in and Check-out dates.');
                return;
            }

            // Check is Check-in Date is greater than Check-Out Date
            if (checkInDate >= checkOutDate) {
                toast.error('Check-in Date should be less than Check-Out Date')
                return;
            }

            // FIX: Convert date strings to ISO string format before sending to backend
            const { data } = await axios.post('/api/bookings/check-availability', {
                room: id,
                checkInDate: new Date(checkInDate).toISOString(),
                checkOutDate: new Date(checkOutDate).toISOString()
            })

            if (data.success) {
                if (data.isAvailable) {
                    setIsAvailable(true)
                    toast.success('Room is available')
                } else {
                    setIsAvailable(false)
                    toast.error('Room is not available')
                }
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            setIsAvailable(false); // Reset availability on error
        }
    }

    // onSubmitHandler function to check availability & book the room
    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();

            // FIX: Check if dates are selected before calling checkAvailability/book
            if (!checkInDate || !checkOutDate) {
                toast.error('Please select Check-in and Check-out dates before booking.');
                return;
            }

            if (!user) {
                toast.error('Please login to book a room')
                navigate('/login')
                return
            }

            if (!isAvailable) {
                return checkAvailability();
            } else {
                const { data } = await axios.post('/api/bookings/book', {
                    room: id,
                    checkInDate: new Date(checkInDate).toISOString(),
                    checkOutDate: new Date(checkOutDate).toISOString(),
                    guests,
                    paymentMethod: "Pay At Hotel"
                })
                if (data.success) {
                    toast.success(data.message)
                    navigate('/my-bookings')
                    scrollTo(0, 0)
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            toast.error(error.message)

        }
    }

    useEffect(() => {
        const index = rooms.findIndex(r => r._id === id)
        setRoomIndex(index)
        const room = rooms.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [rooms])

    return (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto'>

            {/* Header section with room name and rating */}
            <div className='flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8'>
                <div>
                    <div className='flex items-center gap-3 mb-2'>
                        <span className='px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-100'>
                            {room?.hotel?.city || 'Luxury Stay'}
                        </span>
                        <span className='px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-bold tracking-wider uppercase border border-orange-100'>
                            20% OFF
                        </span>
                    </div>
                    <h1 className='text-4xl md:text-5xl font-playfair font-bold text-gray-900'>
                        {room?.title || `Room ${roomIndex !== -1 ? roomIndex + 1 : ''}`}
                        <span className='font-inter text-lg text-gray-500 font-medium ml-3'>({room?.roomType})</span>
                    </h1>

                    <div className='flex items-center gap-4 mt-4'>
                        <div className='flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full border border-gray-100'>
                            <StarRating />
                            <p className='ml-1 text-sm font-medium text-gray-600'>4.8 <span className='text-gray-400 font-normal'>(200+ reviews)</span></p>
                        </div>
                        <div className='flex items-center gap-1.5 text-gray-500 text-sm font-medium'>
                            <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4 opacity-70' />
                            <span>{room?.hotel?.address}</span>
                        </div>
                    </div>
                </div>
                
                <div className='text-left md:text-right bg-gray-50 p-4 rounded-2xl border border-gray-100'>
                    <p className='text-gray-500 text-sm font-medium mb-1'>Price per night</p>
                    <p className='text-3xl font-bold text-gray-900'>{currency}{room?.pricePerNight}</p>
                </div>
            </div>

            {/* room images gallery with zoom hover */}
            <div className='flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px] mb-12'>
                <div className='lg:w-2/3 w-full h-[300px] lg:h-full group rounded-3xl overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]'>
                    <img
                        src={resolveImageUrl(mainImage)}
                        alt="room image"
                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-4 lg:w-1/3 w-full h-[200px] lg:h-full'>
                    {room?.images?.filter(img => img !== mainImage).slice(0, 2).map((image, index) => (
                        <div key={index} className='w-full h-full rounded-3xl overflow-hidden relative group cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)]' onClick={() => setMainImage(image)}>
                            <img
                                src={resolveImageUrl(image)}
                                alt="room image"
                                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-12 relative'>
                {/* Main Content (Left side) */}
                <div className='lg:w-2/3'>
                    {/* room highlights */}
                    <div className='mb-10'>
                        <h2 className='text-3xl font-playfair font-bold text-gray-900 mb-6'>Experience Luxury Like Never Before</h2>
                        <div className='flex flex-wrap items-center gap-3'>
                            {room?.amenities?.map((item, index) => (
                                <div key={index} className='flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_10px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group'>
                                    <img src={facilityIcons[item]} alt={item} className='w-5 h-5 opacity-70 group-hover:text-blue-600 transition-colors' />
                                    <p className='text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors'>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* common specification */}
                    <div className='mt-12 space-y-6'>
                        <h3 className='text-2xl font-bold font-playfair text-gray-900 mb-6'>What this place offers</h3>
                        {roomCommonData.map((spac, index) => (
                            <div key={index} className='flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300'>
                                <div className='p-3 bg-white shadow-sm rounded-xl border border-gray-100'>
                                    <img src={spac.icon} alt={`${spac.title}-icon`} className='w-6 h-6' />
                                </div>
                                <div>
                                    <p className='text-lg font-bold text-gray-900'>{spac.title}</p>
                                    <p className='text-gray-500 text-sm mt-1'>{spac.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='border-y border-gray-200 my-12 py-10 text-gray-600 leading-relaxed text-lg'>
                        <p>
                            {room?.description || `Enjoy a comfortable stay at ${room?.hotel?.name || 'our hotel'}. Modern amenities, cozy bedding, and a welcoming atmosphere await you.`}
                        </p>
                    </div>

                    {/* hosted by */}
                    <div className='bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100/50 mb-10'>
                        <h3 className='text-xl font-bold font-playfair text-gray-900 mb-6'>Meet your Host</h3>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6'>
                            <div className='flex items-center gap-5'>
                                <div className='relative'>
                                    <img
                                        src={room?.hotel?.owner?.image}
                                        alt="Host"
                                        className='h-20 w-20 rounded-full object-cover shadow-md border-4 border-white'
                                    />
                                    <div className='absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-white shadow-sm'></div>
                                </div>
                                <div>
                                    <p className='text-xl font-bold text-gray-900'>Hosted by {room?.hotel?.owner?.name || 'Bekele Mola Hotels'}</p>
                                    <div className='flex items-center gap-2 mt-1'>
                                        <StarRating />
                                        <p className='text-sm text-gray-500 font-medium'>200+ Reviews</p>
                                    </div>
                                </div>
                            </div>
                            <button className='relative group overflow-hidden px-8 py-3 rounded-xl font-bold text-blue-600 bg-white border border-blue-200 hover:border-blue-500 transition-all shadow-sm hover:shadow-md'>
                                <span className="relative z-10">Contact Host</span>
                                <div className="absolute inset-0 bg-blue-50/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Booking Sidebar (Right side sticky) */}
                <div className='lg:w-1/3'>
                    <div className='sticky top-32 bg-white p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.06)] border border-gray-100'>
                        <div className='mb-6 pb-6 border-b border-gray-100'>
                            <p className='text-3xl font-bold text-gray-900'>
                                {currency}{room?.pricePerNight} 
                                <span className='text-base text-gray-500 font-medium ml-1'>/ night</span>
                            </p>
                        </div>
                        
                        <form onSubmit={onSubmitHandler} className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="checkInDate" className='text-sm font-bold text-gray-700 ml-1'>Check-In</label>
                                <div className='relative'>
                                    <input onChange={(e) => setCheckInDate(e.target.value)}
                                        min={new Date().toISOString().split('T')[0]} type="date" id='checkInDate' 
                                        className='w-full rounded-2xl border border-gray-200 px-4 py-3.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium text-gray-700 cursor-pointer' required />
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="checkOutDate" className='text-sm font-bold text-gray-700 ml-1'>Check-Out</label>
                                <input onChange={(e) => setCheckOutDate(e.target.value)}
                                    min={checkInDate} disabled={!checkInDate}
                                    type="date" id='checkOutDate' 
                                    className='w-full rounded-2xl border border-gray-200 px-4 py-3.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium text-gray-700 cursor-pointer disabled:opacity-50' required />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="guests" className='text-sm font-bold text-gray-700 ml-1'>Guests</label>
                                <input onChange={(e) => setGuests(e.target.value)} value={guests} type="number" id='guests' placeholder='1' min="1" 
                                    className='w-full rounded-2xl border border-gray-200 px-4 py-3.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium text-gray-700' required />
                            </div>

                            <button className="relative group/btn overflow-hidden mt-4 w-full bg-gray-900 hover:bg-blue-600 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-500 shadow-lg shadow-gray-900/20 hover:shadow-blue-600/30 active:scale-95">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isAvailable ? "Book Now" : "Check Availability"}
                                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                            </button>
                            
                            <p className='text-center text-xs text-gray-400 mt-2'>You won't be charged yet</p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RoomDetail