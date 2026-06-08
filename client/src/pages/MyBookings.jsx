import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { resolveImageUrl } from '../utils/resolveImage'

const MyBookings = () => {
    const { axios, user, currency, authLoading } = useAppContext()
    const navigate = useNavigate()
    const [bookings, setBookings] = useState([])
    const [hospitalityOrders, setHospitalityOrders] = useState([])

    const fetchUserBookings = async () => {
        try {
            const { data } = await axios.get('/api/bookings/user')
            if (data.success) {
                setBookings(data.bookings || [])
                setHospitalityOrders(data.hospitalityOrders || [])
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handlePayment = async (bookingId, orderType = 'room') => {
        try {
            const { data } = await axios.post('/api/bookings/stripe-payment', { bookingId, orderType })
            if (data.success) {
                window.location.href = data.url
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (!authLoading && !user) {
            navigate('/login', { state: { from: '/my-bookings' } })
            return
        }
        if (user) {
            fetchUserBookings()

            const urlParams = new URLSearchParams(window.location.search)
            const success = urlParams.get('success')
            const sessionId = urlParams.get('session_id')

            if (success === 'true' && sessionId) {
                const verifyPayment = async () => {
                    try {
                        const { data } = await axios.post('/api/bookings/verify', {
                            success,
                            session_id: sessionId,
                        })
                        if (data.success) {
                            fetchUserBookings()
                            toast.success(data.message)
                        } else {
                            toast.error(data.message)
                        }
                    } catch (error) {
                        toast.error(error.message)
                    } finally {
                        window.history.replaceState(null, '', window.location.pathname)
                    }
                }
                verifyPayment()
            }
        }
    }, [user, authLoading])

    const hasNoBookings = bookings.length === 0 && hospitalityOrders.length === 0

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
            <Title
                title='My Bookings'
                subTitle='Manage your room reservations and hospitality orders in one place.'
                align='left'
            />

            <div className='max-w-6xl mt-8 w-full text-gray-800'>

                {hasNoBookings && (
                    <p className='text-gray-500 py-12 text-center'>
                        No bookings yet. Browse <button type="button" onClick={() => navigate('/rooms')} className='text-blue-600 underline'>rooms</button>
                        {' '}or <button type="button" onClick={() => navigate('/hospitality')} className='text-blue-600 underline'>hospitality</button> to get started.
                    </p>
                )}

                {/* ROOM BOOKINGS */}
                {bookings.length > 0 && (
                    <>
                        <h2 className='text-xl font-playfair font-bold text-gray-900 mt-4 mb-2'>Room Reservations</h2>
                        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                            <div>Rooms</div>
                            <div>Date & Timings</div>
                            <div>Payment</div>
                        </div>

                        {bookings.map((booking) => (
                            <div
                                key={booking._id}
                                className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6'
                            >
                                <div className='flex flex-col md:flex-row'>
                                    <img
                                        src={resolveImageUrl(booking.room?.images?.[0])}
                                        alt="room"
                                        className='md:w-44 rounded shadow object-cover'
                                    />
                                    <div className='flex flex-col gap-1.5 mt-3 md:ml-4'>
                                        <p className='font-playfair text-2xl'>
                                            {booking.hotel?.name}
                                            <span className='font-inter text-sm'> ({booking.room?.roomType})</span>
                                        </p>
                                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                                            <img src={assets.locationIcon} alt="" />
                                            <span>{booking.hotel?.address}</span>
                                        </div>
                                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                                            <img src={assets.guestsIcon} alt="" />
                                            <span>Guests: {booking.guests}</span>
                                        </div>
                                        <p className='text-base'>Total: {currency}{booking.totalPrice}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Check-In:</p>
                                    <p className="text-gray-500 text-sm">{new Date(booking.checkInDate).toDateString()}</p>
                                    <p className='mt-3'>Check-Out:</p>
                                    <p className="text-gray-500 text-sm">{new Date(booking.checkOutDate).toDateString()}</p>
                                </div>
                                <div className='flex flex-col items-start justify-center pt-3'>
                                    <div className='flex items-center gap-2'>
                                        <div className={`h-3 w-3 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`} />
                                        <p className={`text-sm ${booking.isPaid ? 'text-green-500' : 'text-red-500'}`}>
                                            {booking.isPaid ? 'Paid' : 'Unpaid'}
                                        </p>
                                    </div>
                                    {!booking.isPaid && (
                                        <button
                                            onClick={() => handlePayment(booking._id, 'room')}
                                            className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50'
                                        >
                                            Pay Now
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </>
                )}

                {/* HOSPITALITY ORDERS */}
                {hospitalityOrders.length > 0 && (
                    <>
                        <h2 className='text-xl font-playfair font-bold text-gray-900 mt-10 mb-2'>Hospitality Orders</h2>
                        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                            <div>Service</div>
                            <div>Order details</div>
                            <div>Payment</div>
                        </div>

                        {hospitalityOrders.map((order) => (
                            <div
                                key={order._id}
                                className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6'
                            >
                                <div className='flex flex-col md:flex-row'>
                                    <img
                                        src={resolveImageUrl(order.hospitality?.image)}
                                        alt={order.hospitality?.title}
                                        className='md:w-44 h-36 md:h-auto rounded shadow object-cover'
                                    />
                                    <div className='flex flex-col gap-1.5 mt-3 md:ml-4'>
                                        <span className='text-xs font-semibold text-blue-600 uppercase tracking-wide'>
                                            {order.hospitality?.category}
                                        </span>
                                        <p className='font-playfair text-2xl'>{order.hospitality?.title}</p>
                                        <p className='text-sm text-gray-500'>{order.hotel?.name}</p>
                                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                                            <img src={assets.locationIcon} alt="" />
                                            <span>{order.hotel?.address}</span>
                                        </div>
                                        {order.hospitality?.features?.length > 0 && (
                                            <p className='text-xs text-gray-400'>
                                                {order.hospitality.features.join(' · ')}
                                            </p>
                                        )}
                                        <p className='text-base'>
                                            Total: {currency}{order.totalPrice}
                                            {order.quantity > 1 && ` (×${order.quantity})`}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p>Ordered:</p>
                                    <p className="text-gray-500 text-sm">{new Date(order.createdAt).toDateString()}</p>
                                    <p className='mt-3'>Service date:</p>
                                    <p className="text-gray-500 text-sm">{new Date(order.serviceDate).toDateString()}</p>
                                    <p className='mt-3 text-sm text-gray-500'>Qty: {order.quantity}</p>
                                </div>
                                <div className='flex flex-col items-start justify-center pt-3'>
                                    <div className='flex items-center gap-2'>
                                        <div className={`h-3 w-3 rounded-full ${order.isPaid ? 'bg-green-500' : 'bg-red-500'}`} />
                                        <p className={`text-sm ${order.isPaid ? 'text-green-500' : 'text-red-500'}`}>
                                            {order.isPaid ? 'Paid' : 'Unpaid'}
                                        </p>
                                    </div>
                                    {!order.isPaid && (
                                        <button
                                            onClick={() => handlePayment(order._id, 'hospitality')}
                                            className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50'
                                        >
                                            Pay Now
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default MyBookings
